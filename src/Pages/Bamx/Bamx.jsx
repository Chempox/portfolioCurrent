import ProjectPage from "../../Components/ProjectPage/ProjectPage";

import { FaReact } from "react-icons/fa";
import {TbBrandNextjs} from 'react-icons/tb'
import {SiSvelte, SiTypescript, SiJavascript, SiKotlin, SiAndroid} from 'react-icons/si'

export default function Bamx() {


    const props = 
    {
        title: 'BAMX',
        summary: 'BAMX is a web and mobile internal logistics application developed 100% altruistically for the Mexican Food Bank.',
        slideImages: [
            {
                url: '/images/bamx-1.png'
            },
            {
                url: '/images/bamx-2.png'
            },
            {
                url: '/images/bamx-3.png'
            },
            {
                url: '/images/bamx-4.png'
            },
            {
                url: '/images/bamx-5.png'
            },
        ],
        info: 'I made this application as a university project. I was part of a small group of developers consisting of my friends, and together, we designed, structured, and developed the application. I worked on both the web and mobile parts, but I mainly focused on the mobile aspect, developing the app natively using Kotlin in Android Studio.',
        technologies: [{
            name: 'Kotlin',
            value: <SiKotlin className="icon"/>
            },
            {name: 'AndroidS', 
            value: <SiAndroid className="icon"/>
            },
            {name: 'React', 
            value: <FaReact className="icon"/>
            },
            {name: 'TypeScript', 
            value: <SiTypescript className="icon"/>
            },
        ],
        url: 'https://bamx.org.mx/',

    }


    return (
        <div>
            <ProjectPage {...props}/>
        </div>
    );
}