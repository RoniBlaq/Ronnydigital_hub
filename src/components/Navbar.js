
"use client";

import Link from "next/link";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Certificates", href: "/#certificates" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">

        <Link href="/" className="text-xl font-bold text-white">
          Ronnydigital<span className="text-blue-400"> Hub.</span>
        </Link>

        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3 text-sm text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-blue-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}
