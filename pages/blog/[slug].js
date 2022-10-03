import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const { GHOST_BLOG_URL, GHOST_CONTENT_API_KEY } = process.env;

async function getPost(slug) {
  const res = await fetch(
    `${GHOST_BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${GHOST_CONTENT_API_KEY}&fields=title,slug,html`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts[0];
}

// Ghost CMS Request
export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    props: { post },
    revalidate: 10,
  };
};

// hello-world - on first request = Ghost CMS call is made (1)
// hello-world - on other requests ... = filesystem is called (1M)
export const getStaticPaths = () => {
  // paths -> slugs which are allowed
  // fallback ->
  return {
    paths: [],
    fallback: true,
  };
};

export default function Post(props) {
  const { post } = props;
  console.log("Post data...", post);

  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Navbar />
      <h1>Raw GHOST Blog</h1>
      <h1>------------------------------------------------------------</h1>
      <div>
        <p>
          <Link href="/blog">
            <a>Go back</a>
          </Link>
        </p>
        <h1>------------------------------------------------------------</h1>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>\{" "}
      </div>
      <Footer />
    </>
  );
}
