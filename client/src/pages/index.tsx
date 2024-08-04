import { BlogType } from "@/@types/blogs";
import { VideoType } from "@/@types/video";
import { BASEURL } from "@/baseURL";
import {
  AboutComponent,
  Blog,
  HeroBanner,
  Services,
  Testimonial,
  Videos,
  WhatWeDo,
} from "@/components/sections";
import axiosInstance from "@/lib/axiosInstance";
import axios from "axios";
import Head from "next/head";

interface Props {
  videos: VideoType[];
  blogs: BlogType[];
}

export default function Home({ videos, blogs }: Props) {

  return (
    <>
      <Head>
        <title>Home - 0-60 Motoring</title>
        <meta
          name="description"
          content="Welcome to 0-60 Motoring - Your one-stop destination for all things automotive. Explore our videos and blogs today!"
        />
        <meta property="og:title" content="Home - 0-60 Motoring" />
        <meta
          property="og:description"
          content="Welcome to 0-60 Motoring - Your one-stop destination for all things automotive. Explore our videos and blogs today!"
        />
        <meta property="og:url" content="https://www.0-60motoring.com/" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpeg" />
        <link rel="preload" href="/car7.webp" as="image"/>
      </Head>
      <main className=" mt-20 sm:mt-24">
        {/* <Hero /> */}
        <HeroBanner />
        {videos.length>1 && <Videos videos={videos} />}
        {blogs.length>2 && <Blog blogs={blogs} />}

        <Testimonial />
        <WhatWeDo />
        <Services />

        {/* <Contact /> */}
        <AboutComponent />
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const { data } = await axiosInstance.get(`${BASEURL}/youtube/latest`);

    const { data: blogsResponse } = await axiosInstance.get(`${BASEURL}/blogs`);

    return {
      props: {
        videos: data.responseEntity,
        blogs: blogsResponse.responseEntity,
      },
    };
  } catch (error) {
    return {
      props: {
        videos: [],
        blogs: [],
      },
    };
  }
};
