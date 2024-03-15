import Image from "next/image";
import Link from "next/link";
import { FaWhatsappSquare } from "react-icons/fa";

const HeroBanner = () => {
  return (
    <div className="banner-img-hero duration-300 mb-0 bg-[#f0D6D6] lg:bg-transparent ">
      <div className="container min-h-[620px] flex">
        <div className="grid  grid-cols-1 md:grid-cols-2 place-items-center">
          <div className="order-2 flex flex-col gap-3 items-center ">
            <Image
              src="/car7.png"
              alt="car png"
              className="sm:scale-105 md:scale-110 lg:scale-125"
              width={500}
              height={500}
            />
            <div className="flex items-center gap-24 lg:gap-3 space-between md:self-end md:gap-2  ">
              <Link
                href="/enquiries"
                className="px-2 py-2 bg-darkRed rounded-sm text-white
           border-2 border-transparent hover:border-darkRed hover:bg-transparent hover:text-darkRed transition 1s  md:hidden "
              >
                DISCOVER NOW
              </Link>
              <a
                target="_blank"
                href="https://wa.me/254790364599"
                rel="noopener noreferrer"
              >
                {/* <FaWhatsappSquare className=" text-6xl lg:text-8xl text-green  " /> */}
                <Image
              src="/WhatsAppImage.webp"
              height={100}
              width={100}
              className="h-20 w-20 rounded-full"
              alt="whatsapp"
             />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-2 sm:space-y-5  order-1 lg:pr-32 ">
            <h1 className=" text-3xl md:text-5xl xl:text-7xl font-semibold text-center sm:text-left uppercase">
              We cater for all your <span className="text-darkRed">car</span>{" "}
              needs
            </h1>
            <p className="text-center sm:text-left">
              Welcome to 0-60 Motoring. Here we cater for all your car needs
              from car advice , reviews, consultation and car sourcing
            </p>

            <div className="flex gap-2 lg:gap-3">
              <Link
                href="/enquiries"
                className="px-2 py-2 bg-darkRed rounded-sm text-white
           border-2 border-transparent hover:border-darkRed hover:bg-transparent hover:text-darkRed transition 1s hidden md:block"
              >
                DISCOVER NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
