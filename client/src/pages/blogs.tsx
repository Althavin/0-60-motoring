import { BlogPage } from "@/components";
import Head from "next/head";

export default function Blogs() {
  return (
    <>
      <Head>
        <title>Blogs - 0-60 Motoring</title>
        <meta name="description" content="Read our latest blogs at 0-60 Motoring - Stay updated with the latest trends and news in the automotive world." />
        <meta property="og:title" content="Blogs - 0-60 Motoring" />
        <meta property="og:description" content="Read our latest blogs at 0-60 Motoring - Stay updated with the latest trends and news in the automotive world." />
        <meta property="og:url" content="https://www.0-60motoring.com/blogs" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      <main className="mt-28">
        <BlogPage />
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   try {
//     const { data } = await axios.get(`${BASEURL}/blogs`);

//     const {responseEntity:blogs} = data

//     return  {
//         props: {blogs}
//     }
//   } catch (error) {
//     return {
//         props: { error: 'Failed to fetch products' },
//       };
//   }
// };
