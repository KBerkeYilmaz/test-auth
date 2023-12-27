"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState, useCallback, useEffect, useRef } from "react";
import '../app/globals.css'

const closeButton =
  "M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z";
const burgerButton =
  "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z";



const Navbar = () => {
  const { data: session, status } = useSession({
    required: false,
    onUnauthenticated() {
    },
  });



  const [activeItem, setActiveItem] = useState(0);
  const [menuActive, setMenuActive] = useState(false);
  const [svgMorph, setSvgMorph] = useState(burgerButton);
  const hasMounted = useRef(false);

  const listItems = [
    { placeholder: "Ana Sayfa", id: "home-btn", href: "/" },
    { placeholder: session ? "Kullanıcı Paneli" : "Giriş Yap", id: "dashboard-btn", href: session ? "/dashboard" : "/login" },
    { placeholder: "Blog", id: "about-btn", href: "/blog" },
    { placeholder: "Galeri", id: "works-btn", href: "/gallery" },
  ];


  useEffect(() => {
    // Set the flag to true once the component has mounted
    hasMounted.current = true;
  }, []);

  useEffect(() => {
    // Only run this logic if the component has already mounted
    if (hasMounted.current) {
      const timer = setTimeout(() => {
        setSvgMorph(menuActive ? closeButton : burgerButton);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [menuActive]);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleItemClick = useCallback((key) => {
    setActiveItem(key);
    setMenuActive(false);
  }, []);


  const isLoading = status === "loading";

  return (
    <nav className="w-screen h-24 flex justify-end bg-transparent z-10 fixed text-white text-sm">
      <button className="cursor-pointer block lg:hidden absolute top-8 right-8 z-50">
        <svg
          className={
            hasMounted.current
              ? menuActive
                ? "spin-animation"
                : "reverse-spin-animation"
              : ""
          }
          height="30px"
          width="30px"
          fill="white"
          viewBox={"0 0 448 512"}
          onClick={() => toggleMenu()}
        >
          <path d={svgMorph} />
        </svg>
      </button>

      <ul
        className={`z-40 transition-all duration-500 ease-out w-screen lg:w-full h-screen lg:h-full
        transform ${
          menuActive
            ? "translate-x-0 opacity-100 visible"
            : "-translate-x-[100vw] opacity-0 invisible"
        }
        flex flex-col justify-between bg-black lg:bg-transparent items-center
        lg:flex-row lg:justify-between lg:items-center lg:visible lg:opacity-100 lg:translate-x-0
        md:text-lg lg:text-2xl xl:text-2xl 2xl:text-2xl p-10 outline-2`}
      >
        <div
          className="flex flex-col justify-center items-center gap-2 mt-8 lg:mt-0 text-xl sm:text-3xl
          lg:flex-row lg:justify-end lg:w-full lg:gap-6"
        >
          {listItems.map((item, index) => {
            const isActive = activeItem === index;
            return (
              <li
                id={item.id}
                key={index}
                className={`li-hover-animate cursor-pointer will-change-transform p-2 flex h-full w-fit ${
                  isActive
                    ? "scale-105 -translate-y-[0.10rem]"
                    : "hover:-translate-y-1 hover:scale-105"
                } transition duration-300 ease-out`}
              >
                <Link
                  href={item.href}
                  target={item.target ? item.target : undefined}
                  rel={item.rel ? item.rel : undefined}
                  onClick={() => handleItemClick(index)}
                  className={` w-full h-full p-2 flex items-center justify-center 
                  ${isActive ? "text-[#F9D866] pointer-events-none" : ""}`}
                >
                  {item.placeholder}
                </Link>
              </li>
            );
          })}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
