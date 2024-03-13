import { VideoType } from "@/@types/video";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface VideoProps {
   className: string;
   video: VideoType; 
   titleStyle?:string;
}

const YouTubeVideo = ({ className, video,titleStyle }: VideoProps) => {
  // const [clicked, setClicked] = useState(false);
  const [ load, setLoad] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries)=>{
      if(entries[0].isIntersecting){
        setLoad(true);
        observer.disconnect();
      }
    })

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
  

    return () => {
      if(videoRef.current){
        observer.unobserve(videoRef.current);
      }
    }
  },[])

  // const handleClick = () => {
  //   setClicked(true);
  // };

 
  return (
    <div ref={videoRef}>
    {load ? (
      <div className="flex flex-col">
         <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
            <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
            Video
        </span>
        <span className="text-sm"></span>
    </div>
      <iframe
        width="100%"
        
        src={video.link}        title="YouTube video player"
        className={className}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="w-full">
        <h1 className={`text-lg font-bold text-gray-800 min-h-[3em] ${titleStyle}`}>
          {video.title}
        </h1>
        
      </div>
      </div>
    ) : (
      <div>Loading...</div>
    )}
  </div>
  // ) : (
  //   <div className="relative flex items-center justify-center cursor-pointer"   onClick={handleClick}>

   
  //   <Image
  //   height={500}
  //   width={500}
  //     className={className}
  //     src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
    
  //     alt="Video thumbnail"
  //     loading="lazy"
  //   />
  //   <Image
  //   src="/youtubelogo.png"
  //   height={500}
  //   width={500}
  //   alt="youtube logo"
  //   className="absolute  h-24 w-32"
  //   />
  //    </div>
  // );
  )
};

export default YouTubeVideo;