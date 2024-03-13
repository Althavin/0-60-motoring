import { Contact } from "@/components";
import Head from "next/head";

export default function ContactUs() {
  
    return (
      <>
        <Head>
          <title>Contact Us - 0-60 Motoring</title>
          <meta name="description" content="Get in touch with us for more information or any queries related to 0-60 Motoring." />
          <meta property="og:title" content="Contact Us - 0-60 Motoring" />
          <meta property="og:description" content="Get in touch with us for more information or any queries related to 0-60 Motoring." />
          <meta property="og:url" content="https://www.0-60motoring.com/contact" />
          <meta property="og:type" content="website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo.jpeg" />
        </Head>
        <main className="mt-24">
            <Contact/>
        
         
        </main>
      </>
    );
  }
  
  