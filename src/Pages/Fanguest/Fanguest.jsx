import { FaReact } from "react-icons/fa";
import {TbBrandNextjs} from 'react-icons/tb'
import {SiSvelte, SiTypescript, SiJavascript, SiKotlin, SiAndroid} from 'react-icons/si'
import ProjectPage from "../../Components/ProjectPage/ProjectPage";

export default function Fanguest() {

    const props = 
    {
        title: 'Fanguest',
        summary: 'Fanguest is a marketing application that focuses on SMS and email campaigns for businesses. It enables you to create a client user base and launch marketing campaigns.',
        slideImages: [
            {
                url: '/images/Fanguest-1.png'
            },
            {
                url: '/images/Fanguest-2.png'
            },
            {
                url: '/images/Fanguest-3.png'
            },
            {
                url: '/images/Fanguest-4.png'
            },
        ],
        info: 'This has been one of the biggest projects I have been involved in, where I was responsible for both the design and frontend programming of the entire administrator panel. This project had several requirements, such as validations, datatables, reactive forms, connections to various APIs, server side rendering and many more. The project was developed using React and Next.js as frameworks.',
        technologies: [{
            name: 'React',
            value: <FaReact className="icon"/>
            },
            {name: 'Next.js', 
            value: <TbBrandNextjs className="icon"/>
            },
            {name: 'JavaScript', 
            value:<SiJavascript className="icon"/> }],
        url: 'https://fanguest.com/',

    }

    return (
        <div>
            <ProjectPage {...props}/>
        </div>
    );
}