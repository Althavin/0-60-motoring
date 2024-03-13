import { Contact } from "@/components";
import Head from "next/head";

export default function Home() {
  
    return (
      <>
        <Head>
          <title>Contact Us</title>
          <meta name="description" content="Please Conact us for more information" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon"href="/logo.jpeg" />
        </Head>
        <main className="mt-24">
            <Contact/>
        
         
        </main>
      </>
    );
  }
  
  