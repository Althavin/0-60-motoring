import { FooterLinks, footerReviews } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { AiFillCopyrightCircle } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram, FaLocationArrow,
  FaMobileAlt,
  FaTiktok,
  FaYoutube
} from "react-icons/fa";
import { FaMessage, FaXTwitter } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";

const Footer = () => {
  return (
    <div className="bg-darkRed text-white pb-8">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-2 col-span-2 lg:col-span-1 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li
                      key={uuidv4()}
                      className="cursor-pointer hover:translate-x-1 duration-300  space-x-1  "
                    >
                      <Link href={link.link}>
                        <span>&#11162;</span>
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {footerReviews.map((link) => (
                    <li
                      key={uuidv4()}
                      className="cursor-pointer hover:translate-x-1 duration-300  space-x-1 "
                    >
                      <Link href={link.link}>
                        <span>&#11162;</span>
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="py-8 px-4 flex items-center  flex-col">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 ">
              Car Services
            </h1>
            <Image src="/logo.jpeg" height={100} width={100} alt="" />
          </div>
          <div className=" py-8 px-4 ">
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Nairobi, Kenya</p>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Mombasa, Kenya</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <Link href="tel:+254790364599">+254 790364599</Link>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMessage />
              <Link href="mailto:0to60motoringkenya@gmail.com">
                0to60motoringkenya@gmail.com
              </Link>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a
                target="_blank"
                href="https://www.instagram.com/0to60_motoring/ "
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl md:text-3xl hover:text-primary duration-300" />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/0to60Motoring"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-xl md:text-3xl hover:text-primary duration-300" />
              </a>
              <a
                target="_blank"
                href="https://www.tiktok.com/@0to60motoring?is_from_webapp=1&sender_device=pc"
                rel="noopener noreferrer"
              >
                <FaTiktok className="text-xl md:text-3xl hover:text-primary duration-300" />
              </a>
              <a
                target="_blank"
                href="https://twitter.com/0Motoring "
                rel="noopener noreferrer"
              >
                <FaXTwitter className="text-xl md:text-3xl hover:text-primary duration-300" />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/@0-60motoring."
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-xl md:text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className=" flex items-center justify-center gap-2 ">
        <p>
          <AiFillCopyrightCircle />
        </p>
        <p>{new Date().getFullYear()}</p>
        <Link href="www.0-60motoring.com">www.0-60motoring.com</Link>
      </div>
    </div>
  );
};

export default Footer;
