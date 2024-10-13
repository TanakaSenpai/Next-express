import React, { useRef, useEffect } from "react";
import Logo from "../Logo";
import Link from "next/link";
import IsLoggedIn from "./IsLoggedIn";

interface Props {
  onClose: () => void;
  pathName: string;
  navLinks: { label: string; href: string }[];
}

const MobileNav = ({ onClose, navLinks, pathName }: Props) => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-9"
        onClick={onClose}
      />
      <div
        id="mobileNav"
        ref={navRef}
        className="absolute top-0 right-0 h-screen bg-slate-800 w-9/12 rounded-l-lg shadow-lg z-10"
      >
        <button
          type="button"
          onClick={onClose}
          className="text-yellow-100 text-lg absolute right-6 top-4"
        >
          X
        </button>
        <div className="flex flex-col justify-between h-2/4 items-center py-8">
          <Logo size={70} />
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                onClick={onClose}
                className={`capitalize text-slate-200 text-xl ${
                  link.href === pathName && "underline underline-offset-4"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <IsLoggedIn styles="flex flex-col gap-6 text-slate-200 text-xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
