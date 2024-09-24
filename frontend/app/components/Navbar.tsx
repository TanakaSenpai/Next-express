import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  const navLinks: { label: string; href: string }[] = [
    { label: "home", href: "/" },
    { label: "my articles", href: "/my-articles" },
    { label: "sign in", href: "/sign-in" },
    { label: "sign up", href: "/sign-up" },
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
