import React from "react";
import YouTubeVideo from "../YouTubeVideo";
import { videoIDs } from "@/lib/data";
import { FaAnglesDown } from "react-icons/fa6";
import Link from "next/link";
import { VideoType } from "@/@types/video";


interface Props{
  videos: VideoType[];
}

const Videos = ({videos}:Props) => {

  
  return (
    <section
      id="vlogs"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl text-center font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Video Reviews
        </h2>
      </div>
      <div className="    sm:mx-auto lg:bg-black lg:border-4 lg:border-darkRed lg:rounded-xl px-3 py-6">
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="grid gap-4">
            <YouTubeVideo
              className="object-cover w-full h-64 rounded shadow-lg border-4 border-darkRed"
              video={videos[0]}
              titleStyle="lg:text-gray-200"
            />

            <Link href="/vlogs" className="hidden lg:flex items-center flex-col text-center gap-2 justify-center text-white mt-6 text-2xl cursor-pointer">
              SCROLL TO WATCH MORE VIDEOS
              <FaAnglesDown />
            
            </Link>
          </div>
          <div className="lg:col-span-2 grid lg:grid-cols-2 gap-4">
            {
              videos.slice(1).map((video:any) => {
                return (
                  <YouTubeVideo
                    video={video}
                    key={video._id}
                    titleStyle="lg:text-gray-200"
                    className="object-cover w-full h-48 rounded shadow-lg border-4"
                  />
                );
              })
            }

          </div>
        </div>


        <Link href="/vlogs" className="lg:hidden flex items-center flex-col text-center gap-2 justify-center text-black mt-6 text-2xl cursor-pointer">
          <FaAnglesDown />
          SCROLL DOWN TO WATCH MORE VIDEOS
        </Link>
      </div>
    </section>
  );
};

export default Videos;
