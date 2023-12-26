"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession({
    required: false,
    onUnauthenticated() {
      // Handle the unauthenticated state if needed
    },
  });

  const isLoading = status === "loading";

  return (
    <nav className="w-screen h-24 flex justify-end bg-transparent z-10 fixed top-10 text-white">
      <ul className="flex justify-end items-center w-full text-2xl">
        <li>
          <Link href="/" className="px-10 cursor-pointer">
            Home
          </Link>
        </li>
        <li>
          {isLoading ? (
            <div className="px-10 cursor-pointer">Loading...</div>
          ) : session ? (
            <Link href="/dashboard" className="px-10 cursor-pointer">
              Kullanıcı Paneli
            </Link>
          ) : (
            <Link href="/login" className="px-10 cursor-pointer">
              Giriş Yap
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
