import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@/lib/db";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import { verifyPassword } from "@lib/auth";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          await connectToDB().catch((err) => {
            throw new Error(err);
          });
          const user = await User.findOne({
            email: credentials?.email,
          }).select("+password");

          if (!user) {
            throw new Error("Invalid credentials");
          }

          const passwordsMatch = await verifyPassword(credentials.password, user.password);

          if (!passwordsMatch) {
            throw new Error("Invalid Credentials!");
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
      return session;
    },
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      console.log(token)
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/(main)/login",
    signUp: "/(main)/register",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
