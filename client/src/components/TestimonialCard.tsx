import Image from 'next/image'
import React from 'react'


interface Props {
  description: string;
  image?:string;
  name:string;
}

const TestimonialCard = ({description,image,name}:Props) => {
  return (
    <div className=" flex flex-col items-center  ">
            <Image
              height={100}
              width={100}
              src="https://picsum.photos/200"
              alt=".."
              className="rounded-full w-20 h-20 mb-[-10px] z-[1]"
            />
         
          <div className="bg-white text-black rounded-lg py-10 px-6  h-[28rem] flex flex-col justify-evenly">
            <p className="text-xl text-center md:text-xl">
              {description}
            </p>
            <p className="text-2xl text-center md:text-3xl font-bold">-{name}</p>
          </div>
          <Image
              height={100}
              width={100}
              src="/stars.png"
              alt=".."
              className="rounded-full w-50 h-20"
            />
          </div>
  )
}

export default TestimonialCard