import AboutCards from "@/components/AboutCards";
import AboutComponent from "@/components/sections/AboutComponent";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - 0-60 Motoring</title>
        <meta
          name="description"
          content="Learn more about us at 0-60 Motoring - We are passionate about everything automotive."
        />
        <meta property="og:title" content="About Us - 0-60 Motoring" />
        <meta
          property="og:description"
          content="Learn more about us at 0-60 Motoring - We are passionate about everything automotive."
        />
        <meta property="og:url" content="https://www.0-60motoring.com/about" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      <main className="mt-20 md:mt-24">
        <AboutComponent />
        <AboutCards />
      </main>
    </>
  );
}
