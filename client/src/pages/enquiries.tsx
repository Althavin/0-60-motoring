import { Services, WhatWeDo } from "@/components/sections";
import Head from "next/head";

export default function Enquiries() {
  return (
    <>
      <Head>
        <title>Enquiries - 0-60 Motoring</title>
        <meta name="description" content="Have questions or need more information? Send us an enquiry at 0-60 Motoring." />
        <meta property="og:title" content="Enquiries - 0-60 Motoring" />
        <meta property="og:description" content="Have questions or need more information? Send us an enquiry at 0-60 Motoring." />
        <meta property="og:url" content="https://www.0-60motoring.com/enquiries" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      <main className="mt-36 mb-12">
        <WhatWeDo />
        <Services />
      </main>
    </>
  );
}
