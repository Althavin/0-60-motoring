import { carList } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { v4 as uuidv4 } from "uuid"

const CarList = () => {
  return (
    <div className="pb-24">
    <div className="container">
      {/* Heading */}
      <h1
        
        className="text-3xl sm:text-4xl font-semibold  mb-3"
      >
        Lorem ipsum dolor
      </h1>
      <p className="text-sm pb-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
        nemo ab?
      </p>
      {/* Car listing */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {carList.map((data) => (
            <div
             key={uuidv4()}
              className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
            >
              <div className="w-full h-[120px]">
                <Image
                height={100}
                width={100}
                  src={data.image}
                  alt=""
                  className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-primary font-semibold">{data.name}</h1>
                <div className="flex justify-between items-center text-xl font-semibold">
                  <p>${data.price}/Day</p>
                  <Link href="#">Details</Link>
                </div>
              </div>
              <p className="text-xl font-semibold absolute top-0 left-3">
                12Km
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* End of car listing */}
      <div className="grid place-items-center mt-8">
        <button  className="button-outline">
          Get Started
        </button>
      </div>
    </div>
  </div>
  )
}

export default CarList