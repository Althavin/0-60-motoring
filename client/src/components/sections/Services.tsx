import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <section  className="sm:mx-8  mb-4   ">
      <div className=" md:grid grid-cols-2 px-4 text-white banner-img-whatwedo  rounded-lg ">
      <div className=" flex items-center justify-center md:py-8">
          <Image src="/car1.png" alt="car" height={300} width={300} className="object-cover" />
        </div>

        <div className="flex flex-col bg-darkRed items-center justify-evenly py-4 md:bg-transparent md:pl-8">
          <h2 className="text-2xl uppercase text-center">SCOUTING & SOURCING</h2>
          <p className="text-center space-y-1 px-4 text-lg">
            Experience the convenience of our car scouting and sourcing
            services, where we go the extra mile to find your perfect vehicle.
            Let us find your dream car while you sit back and relax.
          </p>
          <Link href="tel:+25479064599" className=" uppercase bg-green rounded-lg px-4 py-2 hover:bg-white hover:text-darkRed transition 1s ease-in-out">
            talk to us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
