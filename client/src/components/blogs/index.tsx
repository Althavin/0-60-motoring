import { BlogType } from "@/@types/blogs";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Article from "./Article";
import axios from "axios";
import { BASEURL } from "@/baseURL";
import { useQuery } from "react-query";
import Loader from "@/UI/Loader";
import { FaSearch } from "react-icons/fa";
import axiosInstance from "@/lib/axiosInstance";

const BlogPage = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  const [search, setSearch] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(0); 

  const fetchBlogs = async (): Promise<BlogType[]> => {
    const { data } = await axiosInstance.get(`${BASEURL}/blogs?search=${search}`);
    return data.responseEntity;
  };

  const { data: blogs, isLoading } = useQuery(["blogs", triggerSearch], fetchBlogs);

  const handleSearchClick = () => {
    setTriggerSearch(prev => prev + 1); 
  };

  if (isLoading) return <Loader />;


  return (
    <section className="bg-[#f0D6D6]  dark:bg-gray-900 min-h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Blogs
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Explore our blog for in-depth car reviews, expert insights, and the latest automotive trends and news. Start your journey here!
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <div className="relative max-w-lg w-full">
            <input
              type="text"
              ref={inputRef} 

              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-md dark:bg-gray-800 dark:border-gray-700"
              placeholder="Search for blogs"
            />

<FaSearch onClick={handleSearchClick} className="absolute inset-y-0 right-0 flex items-center justify-center px-4 bg-primary-500 rounded-md h-12 w-12 text-darkRed" />
          </div>
        </div>
        {blogs && blogs.length === 0 && (
          <h1 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
            No blogs found
          </h1>
        )}
        {blogs && blogs.length > 1 && (
          <h1 className="mb-4 text-center text-2xl font-bold text-gray-900 dark:text-white">
            {blogs.length} blogs Found
          </h1>
        )}
        <div className="grid gap-8 lg:grid-cols-2">
          {blogs &&
            blogs.length > 0 &&
            blogs.map((blog) => <Article key={blog._id} blog={blog} />)}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
