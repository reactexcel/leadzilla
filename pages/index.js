import HomePageContainer from "../components/homepage";
import Meta from "./meta";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SignInPage from "../components/signup_page/signInpage";
import Features from "../components/features/index";
export default function App() {
  return (
    <>
        <Navbar />
        <HomePageContainer />
        <Footer />
    </>
  )
}