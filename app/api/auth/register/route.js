import { hashPassword } from "@lib/auth";
import User from "@/models/user";
import { connectToDB } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDB();
    const { name, email, password } = await req.json();
    if(!name||!email||!password){
    return NextResponse.json("Please type something", error)
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User already exists!");
    } else
      try {
        if (password.length < 8)
          return NextResponse.json(
            { message: "Password is too short!" },
            { status: 409 }
          );

        const hashedPassword = await hashPassword(password, 12);
        await User.create({
          name,
          email,
          password: hashedPassword,
          isAdmin: false,
        });

        return NextResponse.json(
          { message: "User registered." },
          { status: 201 }
        );
      } catch (error) {
        return NextResponse.json(
          { message: "An error occurred while registering the user." },
          { status: 500 }
        );
      }
  } catch (error) {
    console.log(error);
  }
}
