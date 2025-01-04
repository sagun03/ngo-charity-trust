"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/causes", label: "Causes" },
    { href: "/donate", label: "Donate" },
    { href: "/blog", label: "Blog" },
    { href: "/gallery", label: "Gallery" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
  ];

  const isActiveLink = (href: string) => pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-white text-black shadow-lg transition-all duration-500 ease-in-out transform translate-y-0" id="ftco-navbar">
      <div className="container mx-auto px-4 flex items-center justify-between p-4">
        <Link className="text-2xl font-bold text-[#f86f2d]" href="/">
          Welfare
        </Link>

        <button
          className="lg:hidden p-2 text-black focus:outline-none"
          type="button"
          onClick={toggleMenu}
          aria-controls="ftco-nav"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          {/* Toggle between FaBars and FaTimes based on menu state */}
          {isMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>

        {/* Web View Menu (Desktop) */}
        <div className="hidden lg:flex lg:items-center lg:justify-end lg:w-full" id="ftco-nav">
          <ul className="flex space-x-6">
            {menuItems.map(({ href, label }) => (
              <li key={href}  className={`nav-item ${isActiveLink(href) ? "text-[#f86f2d]" : "text-black"}`}>
                <Link href={href} className="nav-link hover:text-[#f86f2d]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile View */}
        <div
          className={`lg:hidden fixed mt-[4.5rem] h-screen justify-center inset-0 bg-[#f86f2d] z-50 transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}
          id="mobile-nav-overlay"
        >
          <div className="flex flex-col items-center w-full h-full">
            <ul className="flex flex-col justify-around space-y-6 text-white h-4/5 p-12">
              {menuItems.map(({ href, label }) => (
                <li
                  key={href}
                  className={`nav-item ${isActiveLink(href) ? "text-white" : "text-black"} text-xl text-center lg:text-white hover:text-white`}
                >
                  <Link onClick={() => toggleMenu()}  href={href} className="nav-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
