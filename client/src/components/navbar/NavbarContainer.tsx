import { Navlinks } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Image from "next/image";

const NavbarContainer = () => {
  const [showMenu, setShowMenu] = useState(false);

 

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div
      className="fixed z-10 shadow-md w-full duration-300 backdrop-blur bg-primary md:bg-white "
    
    >        
      {" "}
      <div className="container py-0">
        <div className="flex justify-between items-center">
          <Link href="/">
           
            <Image src="/logo.jpeg" alt="logo" width={100} height={100} className="object-cover h-12 w-12  md:h-24 md:w-24 m-4 rounded-lg" />
          </Link>
          <nav className="hidden md:block mx-2">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({title, link }) => (
                <li key={uuidv4()} className="py-4">
                  <Link
                    href={link}
                    className=" text-base  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
      <Link className="py-2 px-1 lg:px-4 bg-green text-sm lg:text-2xl  hover:bg-transparent text-white rounded-lg hover:text-black transition 2s ease-in-out hidden lg:block" href="tel:+254790364599">GET IN TOUCH</Link>
          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden ">
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default NavbarContainer;
