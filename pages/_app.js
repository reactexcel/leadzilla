import '../styles/globals.css';
import "tailwindcss/tailwind.css";
import Meta from "./meta";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
