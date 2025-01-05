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
    { href: "/about", label: "About Us" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/blogs", label: "Blogs" },
  ];

  const isActiveLink = (href: string) => pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-white text-black shadow-lg transition-all duration-500 ease-in-out transform translate-y-0" id="ftco-navbar">
      <div className=" mx-4 md:mx-16 px-4 flex items-center justify-between p-4">
        {/* Logo */}
        <Link className="hidden md:flex text-2xl items-center font-bold text-black lg:mr-16" href="/">
        <img src="/logo2.png" alt="1" className="w-12 h-12 mr-2" /> Samarth Sankalp Charitable Trust
        </Link>
        <Link className="block md:hidden text-2xl font-bold text-black" href="/">
        <img src="/logo2.png" alt="1" className="w-12 h-12 mr-2" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-black focus:outline-none"
          type="button"
          onClick={toggleMenu}
          aria-controls="ftco-nav"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>

        {/* Web View Menu (Desktop) */}
        <div className="hidden lg:flex lg:items-center lg:justify-between gap-10" id="ftco-nav">
          <ul className="flex space-x-6">
            {menuItems.map(({ href, label }) => (
              <li
                key={href}
                className={`text-lg ${isActiveLink(href) ? "font-bold" : "text-black"}`}
              >
                <Link href={href} className="nav-link hover:text-stone-00">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Events and Contact Buttons */}
          <div className="flex space-x-4">
            <Link
              href="/events"
              className="py-2 px-4 bg-black text-white rounded hover:bg-black transition"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="py-2 px-4 border-2 border-black rounded hover:bg-black hover:text-white transition"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile View */}
        <div
          className={`lg:hidden fixed mt-[4.6rem] h-screen bg-white justify-center inset-0 z-50 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
          // style={{ backgroundImage: 'linear-gradient(270deg, #FFFFFF 10%, rgba(208, 221, 234, 0.7) 94%)' }}
          id="mobile-nav-overlay"
        >
          <div className="flex flex-col items-center w-full h-3/4">
            <ul className="flex flex-col justify-around space-y-6 text-white h-4/5 p-12">
              {menuItems.map(({ href, label }) => (
                <li
                  key={href}
                  className={`text-black ${isActiveLink(href) ? "font-bold" : "text-black"} text-xl text-center hover:text-stone-00`}
                >
                  <Link onClick={() => toggleMenu()} href={href} className="nav-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Events and Contact Buttons for Mobile */}
            <div className="flex flex-col space-y-4 w-full px-8">
              <Link
                href="/events"
                onClick={() => toggleMenu()}
                className="w-full text-center py-2 px-4 bg-black text-white rounded hover:bg-white hover:text-black transition"
              >
                Events
              </Link>
              <Link
                href="/contact"
                onClick={() => toggleMenu()}
                className="w-full text-center py-2 px-4 border-2 border-white rounded hover:bg-white hover:text-black transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
