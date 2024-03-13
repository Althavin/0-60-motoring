import { Services, WhatWeDo } from "@/components/sections";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Enquiries</title>
        <meta name="description" content="Enquire about 0-60 Motoring" />
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
