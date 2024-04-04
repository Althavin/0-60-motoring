import { BlogType } from "@/@types/blogs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BiArrowToLeft, BiDownArrowCircle, BiRightArrow } from "react-icons/bi";
interface Props {
  blogs: BlogType[];
}
const Blog = ({blogs}:Props) => {

  const router = useRouter()
  return (
    <section id="blog" className="sm:my-6 sm:px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20">
      <h2 className="text-3xl text-center mb-4">Blogs</h2>
      <div className="lg:border-4 border-darkRed bg-red md:bg-transparent sm:rounded-2xl py-4">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        {blogs.length >2 &&  <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full place-items-center">
            <div className="overflow-hidden ">
              <Image
                height={300}
                width={300}
                src={blogs[0].images[0]}
                className="object-cover w-full h-64"
                alt=""
              />
              <div className="p-5 ">
                <h4 className="text-xl font-bold">
                  {blogs[0].title}
                </h4>
                <p className="mb-2 text-gray-700">
                  {blogs[0].description.slice(0,100)}...
                </p>
                <Link
                  href={`/blogs/${blogs[0]._id}`}
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-black hover:text-primary "
                >
                  Read More
                  <BiRightArrow />
                </Link>
              </div>
            </div>
            <div className="overflow-hidden lg:scale-110">
              <div className="grid  grid-cols-2 place-items-center gap-2">
                <Image
                  height={500}
                  width={500}
                  src={blogs[1].images[0]}
                  className="h-72 col-span-2 w-full rounded-lg object-cover"
                  alt=""
                />
{
        blogs[1].images[1] &&        <Image
                  height={300}
                  width={300}
                  src={blogs[1].images[1]}
                  className="h-40 w-full rounded-lg object-cover"
                  alt=""
                />}

             {  blogs[1].images[2] &&    <Image
                  height={300}
                  width={300}
                  src={blogs[1].images[2]}
                  className="h-40 w-full rounded-lg object-cover"
                  alt=""
                />}
              </div>
              <div className="p-5 ">
                <h4 className="text-xl font-bold">
    {blogs[1].title}
                </h4>
                <p className="mb-2 text-gray-700">
                  {blogs[1].description.slice(0,100)}...
                </p>
                <Link
                  href={`/blogs/${blogs[1]._id}`}
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-black hover:text-primary "
                >
                  Read More
                  <BiRightArrow />
                </Link>
              </div>
            </div>
            <div className="overflow-hidden ">
              <Image
                height={300}
                width={300}
                src={blogs[2].images[0]}
                className="object-cover w-full h-64"
                alt=""
              />
              <div className="p-5 ">
                <h4 className="text-xl font-bold">{blogs[2].title}</h4>
                <p className="mb-2 text-gray-700">
                  {blogs[2].description.slice(0,100)}...
                </p>
                <Link
                  href={`/blogs/${blogs[2]._id}`}
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-black hover:text-primary "
                >
                  Read More <BiRightArrow />
                </Link>
              </div>
            </div>
          </div>}
        </div>
        <div className="flex items-center justify-center">
          <button onClick={()=>router.push("/blogs")} className="bg-darkRed text-white text-2xl uppercase rounded-2xl px-6 py-4 font-bold flex items-center gap-2 hover:bg-white hover:text-black transition 1s">
            Find more blogs <BiDownArrowCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
