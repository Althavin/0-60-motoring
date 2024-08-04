import { BlogType } from "@/@types/blogs";
import axios from "axios";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import parse from "html-react-parser";
import { ArticleImage } from "@/components";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { BASEURL } from "@/baseURL";
import Image from "next/image";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosInstance";

interface PathsResponse {
  responseEntity: BlogType[];
}

interface PropsResponse {
  responseEntity: BlogType;
}

interface Props {
  blog: BlogType;
}

const SingleArticle = ({ blog }: Props) => {

 
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
    <div className="mt-28 max-w-screen-xl mx-auto">
      <main className="my-10">
        <div
          className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
          style={{ height: "24em" }}
        >
          <div
            className="absolute left-0 bottom-0 w-full h-full z-[1]"
            style={{
              backgroundImage:
                "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
            }}
          ></div>
          <Image
            src={blog.images[0]}
            height={500}
            width={500}
            alt={blog.title}
            className="absolute left-0 top-0 w-full h-full z-0 object-cover"
          />
          <div className="p-4 absolute bottom-0 left-0 z-[2]">
            <Link
              href="/blogs"
              className="px-4 py-1 bg-black text-gray-200 md:inline-flex items-center justify-center mb-2 hidden "
            >
              Blogs
            </Link>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              {blog.title}
            </h2>
            <div className="flex mt-3">
              <FaUserCircle

                className="h-10 w-10 text-white rounded-full mr-2 object-cover"
              />

              <div>
                <p className="font-semibold text-gray-200 text-sm">Author</p>
                <p className="font-semibold text-gray-400 text-xs">{formatDate(blog.createdAt)} </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed space-y-3">
          <div className="pb-6">{parse(blog?.body|| "")}</div>
          {
            blog?.images?.slice(1).map(image=>(
              <ArticleImage image={image} alt={blog.title} key={image}/>
            ))
          }
        </div>
      </main>
    </div>
  );
};

// export const getStaticPaths = async () => {
//   const { data } = await axios.get<PathsResponse>(
//     `${BASEURL}/blogs`
//   );

//   const { responseEntity: blogs } = data;

//   const paths = blogs.map((blog) => ({
//     params: {
//       id: blog._id,
//     },
//   }));

//   return {
//     paths,
//     fallback: "blocking",
//   };
// };

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { params } = context;
  const { id } = params as { id: string };

  try {
    const { data } = await axiosInstance.get(
      `${process.env.BASE_URL}/api/v1/blogs/${id}`
    );

    return {
      props: {
        blog: data.responseEntity,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};


export default SingleArticle;
