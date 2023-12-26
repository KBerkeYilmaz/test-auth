"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setIsLoading(false);
        setError("Invalid Credentials");
        router.push("/login")
        return;
      }
      setIsLoading(false);
      router.push("/dashboard");
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div className="shadow-sm shadow-white p-5 rounded-lg border-t-4 border-green-400 bg-white text-black">
          <h1 className="text-xl font-bold my-4">Login</h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
              Login
            </button>
            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}

            <Link
              className="text-sm mt-3 text-right"
              href={"/register"}
            >
              Don't have an account? <span className="underline">Register</span>
            </Link>
          </form>
        </div>
      )}
    </div>
  );
}
