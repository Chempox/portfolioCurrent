import './ProjectPage.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {FaReact} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiSvelte, SiTypescript, SiJavascript, SiKotlin, SiAndroid} from 'react-icons/si'

export default function ProjectPage() {

    const slideImages = [
        {
            url: "/images/Fanguest-1.png",
            // caption: 'Slide 1'
        },
        {
            url: '/images/Fanguest-2.png',
            // caption: 'Slide 2'
        },
        {
            url: '/images/Fanguest-3.png',
            // caption: 'Slide 3'
        },
        {
            url: '/images/Fanguest-4.png',
            // caption: 'Slide 3'
        },
        ];
    
        // <FaReact/> <TbBrandNextjs/> <SiJavascript/>

    
    return (
        <div className='ppWrapper'>
            <div className='ppContainer'>
                <div className='ppTitle'>
                    <h1>Fanguest</h1>
                    <h2>Fanguest is a marketing application that focuses on SMS and email campaigns for businesses. It enables you to create a client user base and launch marketing campaigns.</h2>
                </div>
                <Slide>
                        {slideImages.map((slideImage, index)=> (
                            <div key={index}>
                            <div className='SlideShow'>
                                <img className='fillM' src={slideImage.url} alt="me" />
                            </div>
                            </div>
                        ))} 
                </Slide>
                <div className='technologiesDiv'>
                    <h2>Technologies</h2>
                    <div className='tCards'>
                        <div className='tCard'>
                            <FaReact className='icon'/>
                            <p>React</p>
                        </div>
                        <div className='tCard'>
                            <TbBrandNextjs className='icon'/>
                            <p>Next.js</p>
                        </div>
                        <div className='tCard'>
                            <SiJavascript className='icon'/>
                            <p>JavaScript</p>
                        </div>
                    </div>
                </div>
                <div className='endText'>
                    <h2>Which section of the project did I work on?:</h2>
                    <p>This has been one of the biggest projects I have been involved in, where I was responsible for both the design and frontend programming of the entire administrator panel. This project had several requirements, such as validations, datatables, reactive forms, connections to various APIs, server side rendering and many more. The project was developed using React and Next.js as frameworks.</p>
                </div>
            </div>
        </div>
    );
}