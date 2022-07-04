import '../styles/globals.css';
import "tailwindcss/tailwind.css";
import Meta from "./meta";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
     <Head>
      <link rel="shortcut icon" href="/favicon.svg" />
    </Head>
      <Meta />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
