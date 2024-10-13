"use client";
import React, { useState } from "react";
import Logo from "../Logo";
import Link from "next/link";
import MobileNav from "./MobileNav";
import IsLoggedIn from "./IsLoggedIn";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const pathName = usePathname();
  const [showMenu, setMenu] = useState(false);
  const { data: session } = useSession();

  const navLinks: { label: string; href: string }[] = [
    { label: "home", href: "/" },
    { label: "my articles", href: "/my-articles" },
  ];

  return (
    <nav className="w-full h-16">
      <div className="flex justify-between items-center h-full mx-6 sm:mx-20">
        <Logo />
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`capitalize ${link.href === pathName && "font-bold"}`}>
              {link.label}
            </Link>
          ))}
          <IsLoggedIn />
        </div>
        <div className="block md:hidden">
          <div className="flex gap-4">
            {session && <p>Welcome, <span className="font-semibold">{ session!.user.name }</span>!</p>}
          <button
            type="button"
            onClick={() => setMenu(true)}
            className={`transition-transform duration-300 ${
              showMenu ? "rotate-45" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6" // Adjust size as needed
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          </div>
          {showMenu && (
            <MobileNav
              navLinks={navLinks}
              pathName={pathName}
              onClose={() => setMenu(false)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
