import { BlogType } from '@/@types/blogs';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaUserCircle } from 'react-icons/fa';

interface Props{
    blog:BlogType;

}
const Article = ({blog}:Props) => {
    const formatDate = (date: any) => {
        if (date) {
          const dt = new Date(date);
          const month =
            dt.getMonth() + 1 < 10 ? "0" + (dt.getMonth() + 1) : dt.getMonth() + 1;
          const day = dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate();
          return day + "/" + month + "/" + dt.getFullYear();
        }
        return "06/03/2024";
      };
  return (
    <article className="p-6 bg-white rounded-lg border border-red shadow-md " >
    <div className="flex justify-between items-center mb-5 text-blue-500">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
            <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
            Article
        </span>
        <span className="text-sm">{formatDate(blog.createdAt)}</span>
    </div>
    <h2 className="mb-2 text-2xl font-bold tracking-tight text-blue-700  min-h-[3em]"><a href="#">{blog.title}</a></h2>
    <p className="mb-5 font-light text-gray-500 ">
   { blog.images && blog.images.length > 0 &&    <Image
        src={blog.images[0]}
        height={500}
        width={500}
        priority={true}
        className='h-64 w-full object-cover'
        alt={blog.title}
        />}
    </p>
    <div className="w-full my-2">
       {blog.description && blog.description.length > 300 && <p>{ blog.description.slice(0,300)}...</p>}
    </div>
    <div className="flex justify-between items-center">

        {/* <div className="flex items-center space-x-4">
            <FaUserCircle className="w-7 h-7 text-darkRed rounded-full"  />
            <span className="font-medium text-darkRed">
                Author
            </span>
        </div> */}
        <p>
            To read more 
        <Link href={`/blogs/${blog._id}`} className="inline-flex items-center font-medium text-primary hover:underline ml-2">
            {" "}click here
            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </Link>
        </p>
    </div>
</article> 
  )
}

export default Article