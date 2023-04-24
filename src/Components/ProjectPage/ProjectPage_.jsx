import './ProjectPage.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {FaReact} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiSvelte, SiTypescript, SiJavascript, SiKotlin, SiAndroid} from 'react-icons/si'

export default function ProjectPage() {

    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
    }

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '500px'
    }

    const slideImages = [
    {
        url: "/src/assets/Images/Fanguest-1.png",
        // caption: 'Slide 1'
    },
    {
        url: '/src/assets/Images/Fanguest-2.png',
        // caption: 'Slide 2'
    },
    {
        url: '/src/assets/Images/Fanguest-3.png',
        // caption: 'Slide 3'
    },
    {
        url: '/src/assets/Images/Fanguest-4.png',
        // caption: 'Slide 3'
    },
    ];



    return (
        <div className="ppWrapper">
            <div className="ppContainer">
                <div className="ppCard">
                    <div className='ppCardTitle'>
                        <h1>Fanguest</h1>
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
                    <button id='gtp'>Go to proyect</button>
                    <div className='ppCardText' style={{color: '#C6FF2D'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h2 style={{fontSize: '2.5rem'}}>Type: SAAS WebApp</h2>
                            <h2 style={{fontSize: '2.5rem', display: 'flex', alignItems: 'center', gap: '.5rem'}}>Technologies: <FaReact/> <TbBrandNextjs/> <SiJavascript/> </h2>
                        </div>
                        <h2 style={{fontSize: '2.5rem'}}>{'>'}What is this project about?:</h2>
                        <p style={{fontSize: '2rem'}}>Fanguest is an SMS and email marketing application that generates a database for each account using the information collected from users. This feature enables users to launch email or SMS campaigns with a range of filters that they can select.</p>
                        <h2 style={{fontSize: '2.5rem'}}>{'>'}Which section of the project did I work on?:</h2>
                        <p style={{fontSize: '2rem'}}>This has been one of the biggest projects I have been involved in, where I was responsible for both the design and frontend programming of the entire administrator panel. This project had several requirements, such as validations, datatables, reactive forms, connections to various APIs, server side rendering and many more. The project was developed using React and Next.js as frameworks.</p>
                    </div>
                    {/* <div className='ppCardImg'>
                        <img className='fillM' src={"/src/assets/Images/Fanguest-1.png"} alt="me" />
                    </div> */}
                </div>
            </div>
        </div>
    );
}