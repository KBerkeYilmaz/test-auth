"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";
import AlertBar from "./AlertBar";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false); // Initialize success state

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false); 
    setError(""); 
    setIsLoading(true);

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      setIsLoading(false); 
      return;
    }

    try {
      const res = await fetch("api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        setSuccess(true); // Set success to show the AlertBar
        setError(""); // Clear any error
        
      } else {
        setError("User registration failed."); // Set error message
        console.log("User registration failed.");
      }
    } catch (error) {
      console.error("Error during registration: ", error);
      setError(error.message);
    }
    setIsLoading(false); 
  };

  return (
    
    <div className="grid place-items-center h-screen text-black">
      {isLoading ? (
        <CircularProgress />
      ) : (
        
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400 bg-white">
          {success && <AlertBar message="Registration successful!" severity="success" />}
          {error && !success && <AlertBar message={error} severity="error" />}


          <h1 className="text-xl font-bold my-4">Register</h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
          >
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
            />
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
              Register
            </button>

            {/* {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )} */}

            <Link
              className="text-sm mt-3 text-right"
              href={"/login"}
            >
              Already have an account? <span className="underline">Login</span>
            </Link>
          </form>
        </div>
      )}
    </div>
  );
}
