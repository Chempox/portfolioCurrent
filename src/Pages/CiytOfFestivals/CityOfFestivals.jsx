import ProjectPage from "../../Components/ProjectPage/ProjectPage";
import { FaReact } from "react-icons/fa";
import {TbBrandNextjs} from 'react-icons/tb'
import {SiSvelte, SiTypescript, SiJavascript, SiKotlin, SiAndroid} from 'react-icons/si'

export default function CityOfFestivals() {


    const props = 
    {
        title: 'City of Festivals',
        summary: 'The City of Festival was a form creation and management application developed for the government of Sacramento, California.',
        slideImages: [
            {
                url: '/images/cof-1.png'
            },
            {
                url: '/images/cof-2.png'
            },
            {
                url: '/images/cof-3.png'
            },
        ],
        info: 'I was part of a small development team of 10 developers, and my primary focus was on the frontend development of the application. I contributed to the development of main components, such as the form creator wizard.',
        technologies: [{
            name: 'Svelte',
            value: <SiSvelte className="icon"/>
            },
            {name: 'TypeScript', 
            value: <SiTypescript className="icon"/>
            },],
        url: 'https://sacramentofestivals.com/',

    }


    return (
        <div>
            <ProjectPage {...props}/>
        </div>
    );
}