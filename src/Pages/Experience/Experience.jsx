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
        technologies: {
            react: <FaReact/>,
            next: <TbBrandNextjs/>,
            js: <SiJavascript/>
        },
        projectUrl: '/experience/fanguest'

    }

    return (
        <div className='ExperienceWrapper'>
            <div className='ExperienceTitle'>
                    <div className='EtPad'>
                        <h1>Experience.</h1>
                    </div>
                    {/* <div className='markersDiv'/> */}
            </div>
            <div className='ExperienceContainer'>
                <GridSquare {...props}/>
            </div>
        </div>
    );
}