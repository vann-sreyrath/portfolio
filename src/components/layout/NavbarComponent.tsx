"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { navbarLinks } from "@/data/navbarLinks";
import { Menu, X } from "lucide-react";
import ScrollProgressBar from "./ScrollProgressComponent";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-pink-500 shadow-md sticky top-0 z-50">
      <ScrollProgressBar/>
      <div className="flex items-center justify-between p-4">

        <div className="text-white text-xl font-bold">VANN SREYRATH</div>

        <div className="md:hidden">
          {isMenuOpen ? (
            <X
              className="text-white cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <Menu
              className="text-white cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navbarLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => router.push(link.href)}
                className="text-white hover:text-pink-200 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <ul className="flex flex-col items-center space-y-4 bg-pink-600 md:hidden p-4">
          {navbarLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => {
                  router.push(link.href);
                  setIsMenuOpen(false);
                }}
                className="text-white hover:text-pink-200 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
