import React from "react";
import YouTubeVideo from "../YouTubeVideo";
import Link from "next/link";
import { VideoType } from "@/@types/video";
import { FaPlay, FaArrowRight, FaYoutube } from "react-icons/fa";

interface Props {
  videos: VideoType[];
}

const Videos = ({ videos }: Props) => {
  if (!videos || videos.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              🎥 Video Content
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Latest Video Reviews
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch our in-depth car reviews and automotive insights
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Featured Video */}
          <div className="lg:col-span-2 lg:row-span-2">
            <div className="group relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <YouTubeVideo
                className="w-full h-full min-h-[400px] lg:min-h-[500px] object-cover"
                video={videos[0]}
                titleStyle="text-white"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Featured Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                  <FaPlay className="w-3 h-3" />
                  Featured Video
                </span>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-xl font-bold mb-2 line-clamp-2">
                  {videos[0].title}
                </h3>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <FaYoutube className="w-4 h-4 text-red-500" />
                  <span>{videos[0].channel}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Side Videos */}
          <div className="lg:col-span-2 space-y-6">
            {videos.slice(1, 5).map((video) => (
              <div key={video._id} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="flex">
                  <div className="w-48 flex-shrink-0">
                    <YouTubeVideo
                      className="w-full h-32 object-cover"
                      video={video}
                      titleStyle="hidden"
                    />
                  </div>
                  
                  <div className="p-4 flex-1">
                    <h4 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h4>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <FaYoutube className="w-3 h-3 text-red-500" />
                      <span>{video.channel}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      <FaPlay className="w-3 h-3" />
                      <span>Watch Now</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-primary/10 to-green/10 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
            <div className="bg-primary/20 p-4 rounded-full mb-6">
              <FaYoutube className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              More Videos Available
            </h3>
            <p className="text-gray-600 mb-6">
              Explore our complete collection of automotive video reviews and tutorials
            </p>
            <Link
              href="/vlogs"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Watch All Videos
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom CTA - Mobile */}
        <div className="text-center mt-16 lg:hidden">
          <Link
            href="/vlogs"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <FaPlay className="w-4 h-4" />
            Watch All Videos
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Videos;
