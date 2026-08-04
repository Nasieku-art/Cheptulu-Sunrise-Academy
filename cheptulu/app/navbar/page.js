"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-shadow duration-300 ${
        scrolled
          ? "border-[#1B4332]/10 bg-[#FAE7BC]/95 shadow-[0_2px_18px_rgba(27,67,50,0.08)] backdrop-blur"
          : "border-transparent bg-[#FAE7BC]"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <div>
            <Image src="/Image/sunrise-logo.png"
            alt=" Cheptulu Sunrise Academy"
            width={100}
            height={100}
             />
          </div>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative py-2 text-[0.95rem] font-medium text-[#22201B]/80 transition-colors hover:text-[#1B4332]"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-[#FAF6EC] transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/admissions"
            className="hidden rounded-full bg-[#65081f] px-5 py-2.5 text-sm font-semibold text-[#FAF6EC] transition-colors hover:bg-[#163728] lg:inline-block"
          >
            Apply Now
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-[#1B4332]/15 lg:hidden"
          >
            <span
              className={`h-[2px] w-5 bg-[#1B4332] transition-transform duration-300 ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-5 bg-[#1B4332] transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] w-5 bg-[#1B4332] transition-transform duration-300 ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out lg:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav
          className="flex flex-col gap-1 border-t border-[#1B4332]/10 bg-[#FAF6EC] px-5 py-4"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-[0.95rem] font-medium text-[#22201B]/85 transition-colors hover:bg-[#1B4332]/5 hover:text-[#1B4332]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/admissions"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-full bg-[#65081f] px-5 py-3 text-center text-sm font-semibold text-[#FAF6EC]"
          >
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  );
}