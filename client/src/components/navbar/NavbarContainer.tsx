import { Navlinks } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import Image from "next/image";

const NavbarContainer = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-3">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/logo.jpeg" 
              alt="0-60 Motoring Logo" 
              width={60} 
              height={60} 
              className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover hover:scale-105 transition-transform duration-300" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {Navlinks.map(({ title, link }) => (
              <Link
                key={uuidv4()}
                href={link}
                className="relative text-gray-700 hover:text-primary font-medium transition-colors duration-300 py-2 group"
              >
                {title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link 
            href="tel:+254790364599"
            className="hidden lg:flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <FaPhone className="text-sm" />
            GET IN TOUCH
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {showMenu ? (
              <HiMenuAlt1 className="w-6 h-6 text-gray-700" />
            ) : (
              <HiMenuAlt3 className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </nav>
  );
};

export default NavbarContainer;
