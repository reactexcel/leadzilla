import HomePageContainer from "../components/homepage";
import Meta from "./meta";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function App() {
  return (
    <>
      <Meta />
      <main>
        <Navbar />
        <HomePageContainer />
        <Footer />
      </main>
    </>
  )
}