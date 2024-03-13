
import { BlogType } from "@/@types/blogs";
import { VideoType } from "@/@types/video";
import { BASEURL } from "@/baseURL";
import {  AboutComponent, Blog, HeroBanner, Services, Testimonial, Videos, WhatWeDo } from "@/components/sections";
import axios from "axios";
import Head from "next/head";

interface Props {
  videos: VideoType[];
  blogs: BlogType[];
}

export default function Home({videos,blogs}:Props) {
  
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="0-60 Motoring Homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      <main className=" mt-20 sm:mt-24">
        {/* <Hero /> */}
        <HeroBanner/>
      { videos && <Videos videos={videos}/>}
      {blogs && <Blog blogs={blogs}/>}

      <Testimonial />
       <WhatWeDo />
        <Services />
      
        
        
        
        {/* <Contact /> */}
        <AboutComponent />
       
      </main>
    </>
  );
}



export const getStaticProps = async()=>{
  try {
    const { data }  = await axios.get(`${BASEURL}/youtube/latest`)

    const { data:blogsResponse } = await axios.get(`${BASEURL}/blogs`);

    return {
      props: {
        videos: data.responseEntity,
        blogs: blogsResponse.responseEntity
      }
    }
  } catch (error) {
    return {
      props: {
        videos: [],
        blogs: []
      }
    }
    
  }
}
