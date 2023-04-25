import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import Experience from "../Experience/Experience";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../../Components/Footer/Footer";

export default function LandingPage() {
    return (
        <div>
            <Home/>
            <AboutMe/>
            {/* <Experience/>
            <ContactMe/>
            <Footer/> */}
        </div>
    );
}