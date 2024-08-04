import { VideoType } from "@/@types/video";
import Loader from "@/UI/Loader";
import { BASEURL } from "@/baseURL";
import { YouTubeVideo } from "@/components";
import axiosInstance from "@/lib/axiosInstance";
import axios from "axios";
import Head from "next/head";
import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useQuery } from "react-query";

// interface Props {
//   videos: VideoType[];
// }

const Vlogs = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [numVideosToShow, setNumVideosToShow] = useState(10);
  const [search, setSearch] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(0);

  const fetchVideos = async (): Promise<VideoType[]> => {
    const { data } = await axiosInstance.get(`${BASEURL}/youtube?search=${search}`);
    return data.responseEntity;
  };

  const { data: videos, isLoading } = useQuery(
    ["videos", triggerSearch],
    fetchVideos
  );

  const handleSearchClick = () => {
    setTriggerSearch((prev) => prev + 1);
  };

  if (isLoading) return <Loader />;

  const loadMoreVideos = () => {
    setNumVideosToShow(numVideosToShow + 4);
  };

  return (
    <>
      <Head>
        <title>Videos - 0-60 Motoring</title>
        <meta
          name="description"
          content="Explore our vlogs at 0-60 Motoring - Our mission is to empower individuals and businesses with our automotive content."
        />
        <meta property="og:title" content="Videos - 0-60 Motoring" />
        <meta
          property="og:description"
          content="Explore our vlogs at 0-60 Motoring - Our mission is to empower individuals and businesses with our automotive content!"
        />
        <meta property="og:url" content="https://www.0-60motoring.com/vlogs" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      <main className="mt-24">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
            Videos
          </h2>
          {}
          <div className="flex justify-center mb-8">
            <div className="relative max-w-lg w-full">
              <input
                type="text"
                ref={inputRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-md "
                placeholder="Search for videos"
              />

              <FaSearch
                className="absolute inset-y-0 right-0 flex items-center justify-center px-4 bg-primary-500 rounded-md h-12 w-12  text-darkRed"
                onClick={handleSearchClick}
              />
            </div>
          </div>
          {videos && videos.length === 0 && (
            <h1 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
              No videos found
            </h1>
          )}
          {videos && videos.length > 1 && (
            <h1 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
              {videos.length} videos Found
            </h1>
          )}

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 ">
            {videos &&
              videos.slice(0, numVideosToShow).map((video) => (
                <div key={video._id}>
                  <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <YouTubeVideo
                      video={video}
                      className="object-cover w-full h-56 md:h-64  "
                    />
                  </div>
                </div>
              ))}
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={loadMoreVideos}
              className="px-4 py-2 mt-8 text-white bg-darkRed flex items-center rounded hover:bg-gray-800"
            >
              Load More
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

// export const getStaticProps = async () => {
//   try {
//     const { data } = await axios.get(`${BASEURL}/youtube`);

//     return {
//       props: {
//         videos: data.responseEntity,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         videos: [],
//       },
//     };
//   }
// };

export default Vlogs;
