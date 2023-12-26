"use client"

import RegisterForm from "@/components/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";


export default async function Register() {
  // const session = await getServerSession();
  const { data: session, status } = useSession()
  
  if (session) redirect("/dashboard");

  return <div> <RegisterForm /></div>;
}