"use client"

import RegisterForm from "@/components/RegisterForm";
// import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
// import { authOptions } from "../api/auth/[...nextauth]/route";
import { useSession } from "next-auth/react";


export default async function Register() {
  // const session = await getServerSession(authOptions);
  const { data: session, status } = useSession()


  if (session) redirect("/dashboard");

  return <RegisterForm />;
}