import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
//import FrequencyAskedPage from '../../components/faqpage'
import BlogPage from "../../components/blogPage/index.js";

//const { GHOST_BLOG_URL, GHOST_CONTENT_API_KEY } = process.env;

// async function getPosts() {
//   const res = await fetch(
//     `${GHOST_BLOG_URL}/ghost/api/content/posts/?key=${GHOST_CONTENT_API_KEY}&include=tags,authors`
//   ).then((res) => res.json());

//   const posts = res.posts;
//   return posts;
// }

// export const getStaticProps = async ({ params }) => {
//   const posts = await getPosts();
//   return {
//     props: { posts },
//     revalidate: 10,
//   };
// };

export default function BlogPageDesign(props) {
  //const { posts } = props;
  //console.log("posts...", posts);

  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Navbar />
      {/* <h1>Raw GHOST Blog list</h1>
      <h1>------------------------------------------------------------</h1>
      <ul>
        {posts.map((post, index) => {
          return (
            <li key={post.slug}>
              <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul> */}
      <BlogPage />

      <Footer />
    </>
  );
}
