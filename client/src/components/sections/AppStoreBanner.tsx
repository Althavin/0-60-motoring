import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AppStoreBanner = () => {
  return (
    <div className="container">
      <div
        className="banner-img text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
        
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <h1
              
              className="text-2xl text-center sm:text-4xl font-semibold "
            >
              Get Started with our app
            </h1>
            <p  className="text-center sm:px-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              magnam harum accusantium odit?
            </p>
            <div
              
              className="flex flex-wrap justify-center items-center gap-4"
            >
              <Link href="#">
                <Image
                  src="/website/play_store.png"
                  height={100}
                  width={100}
                  alt="app store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/website/app_store.png"
                  height={100}
                  width={100}
                  alt="app store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppStoreBanner