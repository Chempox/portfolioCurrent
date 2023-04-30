import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import Experience from "../Experience/Experience";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../../Components/Footer/Footer";
import {useRef} from 'react';


export default function LandingPage() {

    // const refAbout = useRef(null);
    // const refExperience = useRef(null);
    // const refContact = useRef(null);

    // const props = 
    // {
    //     aboutMe: refAbout,
    //     experience: refExperience,
    //     contact: refContact,
    // }

    return (
        <div>
            <Home/>
            <AboutMe/>
            <Experience/>
            <ContactMe/>
            <Footer/>
        </div>
    );
}