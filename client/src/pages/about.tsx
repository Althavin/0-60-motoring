
import AboutCards from "@/components/AboutCards";
import { Hero } from "@/components/sections";
import AboutComponent from "@/components/sections/AboutComponent";
import Head from "next/head";



export default function About() {
  
  return (
    <>
      <Head>
        <title>0-60</title>
        <meta name="description" content="About us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon"href="/logo.jpeg" />
      </Head>
      <main className="mt-20 md:mt-24">
        
        
                <AboutComponent />
                <AboutCards/>
       
      </main>
    </>
  );
}