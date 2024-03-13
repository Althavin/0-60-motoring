import { BlogPage } from "@/components";
import Head from "next/head";

export default function Blogs() {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="0-60 Motoring blogs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpeg"/>
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
