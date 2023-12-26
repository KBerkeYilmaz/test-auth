"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="w-screen h-24 flex justify-end bg-transparent z-10 fixed top-10 text-white">
      <ul className="flex justify-end items-center w-full text-2xl">
        <li>
          <Link
            href="/"
            className="px-10 cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          {session ? (
            <Link
              href={"/dashboard"}
              className="px-10 cursor-pointer"
            >
              Kullanıcı Paneli
            </Link>
          ) : (
            <Link
              href={"/login"}
              className="px-10 cursor-pointer"
            >
              Giriş Yap
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
