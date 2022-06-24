import HomePageContainer from "../components/homepage";
import Meta from "./meta";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SignInPage from "../components/Signup Page/SignInPage";
import Features from "../components/Features/index";
export default function App() {
  return (
    <>
      <Meta />
      <main>
        {/* <Navbar />
        <HomePageContainer />
        <Footer /> */}
        <SignInPage/>
        {/* <Features/> */}

      </main>
    </>
  )
}