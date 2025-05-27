"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/meetings", label: "Meetings" },
  { href: "/resources", label: "Resources" },
  { href: "/team", label: "Team" }
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-700 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-indigo-400">
          The Quorum
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-gray-300 font-medium">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`hover:text-indigo-400 transition-colors ${pathname === href ? "text-indigo-400 font-semibold" : ""
                  }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="w-6 h-6 text-indigo-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden bg-gray-800 border-t border-gray-700 space-y-2 px-6 py-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={handleLinkClick}
                className={`block text-gray-300 font-medium hover:text-indigo-400 transition-colors ${pathname === href ? "text-indigo-400 font-semibold" : ""
                  }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
