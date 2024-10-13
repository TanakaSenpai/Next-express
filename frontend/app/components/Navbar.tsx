"use client"
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  const navLinks: { label: string; href: string }[] = [
    { label: "home", href: "/" },
    { label: "my articles", href: "/my-articles" },
  ];

  return (
    <nav className="w-full h-16">
      <div className="flex justify-between items-center h-full mx-20">
        <Logo />
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="capitalize">
              {link.label}
            </Link>
          ))}
          {session ? (
            <div className="flex gap-8">
              <p>Welcome, <span className="font-semibold">{session.user.name}</span>!</p>{" "}
              <p className="cursor-pointer" onClick={() => signOut()}>Logout</p>
            </div>
          ) : (
            <div className="flex gap-8">
              <Link href="sign-in">Sign in</Link>
              <Link href="sign-up">Sign up</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
