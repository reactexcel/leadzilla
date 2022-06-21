import '../styles/globals.css';
import "tailwindcss/tailwind.css";
import Meta from "./meta";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300&display=swap" rel="stylesheet" />
    </Head>
      <Meta />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
