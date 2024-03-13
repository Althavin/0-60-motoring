import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatWeDo = () => {

  return (
    <section id="services" className="my-8 sm:mx-8 ">
      <div className="space-y-2 pb-6">
        <h2 className="text-3xl font-semibold text-center sm:text-4xl">
          WHAT WE DO
        </h2>
      </div>
      <div className=" text-white rounded-lg border-4 border-transparent">
        <div className=" md:grid grid-cols-2   ">
          <div className="md:bg-black  order-1 md:order-2 flex">
            <Image src="/Portsmouth.webp" alt="car" height={300} width={300} className="w-full max-h-64 object-fill" />
          </div>

          <div className="flex flex-col bg-darkRed items-center justify-evenly py-4 ">
            <h2 className="text-2xl uppercase text-center">GET CAR ADVICE & CONSULTANCY</h2>
            <p className=" space-y-1 px-4 text-lg">
              We offer car consultancy services, scouting, and car sourcing
              including making direct imports on behalf of our valued clients
            </p>
            <Link href="tel:+25479064599" className=" uppercase bg-green rounded-lg px-4 py-2 hover:bg-white hover:text-darkRed transition 1s ease-in-out">
              talk to us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
