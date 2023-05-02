import './Experience.css'
import SingleCapsule from '../../Components/SingleCapsule/SingleCapsule';
import { useRef } from 'react';
import { motion, useInView} from 'framer-motion';
import {FaReact} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiSvelte, SiTypescript, SiJavascript, SiKotlin, SiAndroid} from 'react-icons/si'
import { Link, useNavigate } from 'react-router-dom';
import GridSquare from '../../Components/GridSquare/GridSquare';


export default function Experience() {


    const handleNavigation = (url) =>
    {
        var win = window.open(url, '_blank');
        win.focus();
    }

    const props = {
        imageUrl: '/images/FanguestLogo.png',
        technologies: [<FaReact/>,<TbBrandNextjs/>,<SiJavascript/>],
        projectUrl: '/experience/fanguest',
        gridArea: 'a',

    }

    const props2 = {
        imageUrl: '/images/kindorseLogo.png',
        technologies: [<SiSvelte/>,<SiJavascript/>],
        projectUrl: '/experience/kindorse',
        gridArea: 'b',
    }
    
    const props3 = {
        imageUrl: '/images/CityOfFestivals.png',
        technologies: [<SiSvelte/>,<SiTypescript/>],
        projectUrl: '/experience/city-of-festivals',
        gridArea: 'c',
    }

    const props4 = {
        imageUrl: '/images/BAMX.png',
        technologies: [<FaReact/>,<SiKotlin/>,<SiAndroid/>, <SiTypescript/>],
        projectUrl: '/experience/bamx',
        gridArea: 'd',
    }

    return (
        <div className='ExperienceWrapper' id='ExperienceSection'>
            <div className='ExperienceTitle'>
                    <div className='EtPad'>
                        <h1>Experience.</h1>
                    </div>
                    {/* <div className='markersDiv'/> */}
            </div>
            <div className='ExperienceContainer'>
                <GridSquare {...props}/>
                <GridSquare {...props2}/>
                <GridSquare {...props3}/>
                <GridSquare {...props4}/>
            </div>
        </div>
    );
}