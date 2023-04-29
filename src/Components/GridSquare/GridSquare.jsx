import { useRef } from 'react';
import { motion, useInView} from 'framer-motion';
import {FaReact} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiSvelte, SiTypescript, SiJavascript, SiKotlin, SiAndroid} from 'react-icons/si'
import { Link, useNavigate } from 'react-router-dom';

import './GridSquare.css'


export default function GridSquare (props) {

    const variants = {
        offscreen: {
            scale: 0,
            opacity: 0,
            transition: 
            {
                duration: 1 ,
            }
        },
        onscreen: {
            scale: 1,
            opacity: 1,
        }
    };


    const navigate = useNavigate();

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true, amount: 1 });


    const handleNavigation = (url) =>
    {
        var win = window.open(url, '_blank');
        win.focus();
    }

    const technologies = props.technologies.map((item, index)=>
    <h1 key={index}>{item}</h1>
    )

    return (
        <div style={{gridArea: props.gridArea}} className='gs-main' ref={ref}>
            <motion.div
            onClick={()=> handleNavigation('/experience/fanguest')} 
            animate={isInView ? 'onscreen':'offscreen'} 
            transition={{duration: .7}}
            variants={variants}
            className='gridItem'
            >
                <div style={{display: 'flex', justifyContent:'space-between'}}>
                    <h1>.01</h1>
                    <div style={{display: 'flex', gap: '1rem'}}>
                        {technologies}
                    </div>
                </div>
                <div style={{flex: '1 1 auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={props.imageUrl} alt="Fanguest" />  
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h1>Launch Project</h1>
                    <h1>-{'>'}</h1>
                </div>
            </motion.div>
        </div>
    );
}