import HomePageContainer from "../components/homepage";
import Meta from "./meta";
import Navbar from "../components/navbar";

export default function App() {
  return (
    <>
      <Meta />
      <main>
        <Navbar />
        <HomePageContainer />
      </main>
    </>
  )
}