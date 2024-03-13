import Image from 'next/image'
import React from 'react'

interface Props{
    image: string;
    alt: string;
}

const ArticleImage = ({image,alt}:Props) => {
  return (
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
      src={image}
      height={500}
      width={500}
      alt={alt}
      className="absolute left-0 top-0 w-full h-full z-0 object-cover"
    />
</div>
  )
}

export default ArticleImage