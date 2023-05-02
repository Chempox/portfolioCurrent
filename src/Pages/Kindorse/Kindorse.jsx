import ProjectPage from "../../Components/ProjectPage/ProjectPage";
import {TbBrandNextjs} from 'react-icons/tb'
import {SiSvelte, SiTypescript, SiJavascript, SiKotlin, SiAndroid} from 'react-icons/si'

export default function() {

    const props = 
    {
        title: 'Kindorse',
        summary: 'Kindorse in a satisfaction survey application focused on restaurants.',
        slideImages: [
            {
                url: '/images/kindorse-4.png'
            },
            {
                url: '/images/kindorse-2.png'
            },
            {
                url: '/images/kindorse-3.png'
            },
            {
                url: '/images/kindorse-1.png'
            },
        ],
        info: 'I worked with a small development team to create new features in the application and maintain it by fixing bugs and restructuring code.',
        technologies: [{
            name: 'Svelte',
            value: <SiSvelte className="icon"/>
            },
            {name: 'JavaScript', 
            value: <SiJavascript className="icon"/>
            }],
        url: 'https://kindorse.com/',

    }


    return (
        <div>
            <ProjectPage {...props}/>
        </div>
    );
}