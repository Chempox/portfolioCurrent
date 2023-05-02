import './ProjectPage.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// import {FaReact} from 'react-icons/fa'
// import {TbBrandNextjs} from 'react-icons/tb'
// import {SiSvelte, SiTypescript, SiJavascript, SiKotlin, SiAndroid} from 'react-icons/si'

export default function ProjectPage(props) {
    

        const technologies = props.technologies.map((item, index) =>
        {
            return(<div className='tCard' key={index}>
                <h1>{item.value}</h1>
                <p>{item.name}</p>
            </div>)
        })

        const newTab = (url) =>
        {
            var win = window.open(url, '_blank');
        }

    
    return (
        <div className='ppWrapper'>
            <div className='ppContainer'>
                <div className='ppTitle'>
                    <h1>{props.title}</h1>
                    <h2>{props.summary}</h2>
                </div>
                <Slide>
                        {props.slideImages.map((slideImage, index)=> (
                            <div key={index}>
                            <div className='SlideShow'>
                                <img onClick={()=>newTab(slideImage.url)} className='fillM' src={slideImage.url} alt="me" />
                            </div>
                            </div>
                        ))} 
                </Slide>
                <div className='projectButton'>
                    <button onClick={ ()=> newTab(props.url)}>Go to project</button>
                </div>
                <div className='technologiesDiv'>
                    <h2>Technologies</h2>
                    <div className='tCards'>
                        {technologies}
                    </div>
                </div>
                <div className='endText'>
                    <h2>Which section of the project did I work on?:</h2>
                    <p>{props.info}</p>
                </div>
            </div>
        </div>
    );
}