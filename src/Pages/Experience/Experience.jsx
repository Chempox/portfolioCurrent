import './Experience.css'
import SingleCapsule from '../../Components/SingleCapsule/SingleCapsule';
import { useRef } from 'react';
import { motion, useInView} from 'framer-motion';
import {FaReact} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'


export default function Experience() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: .5 });

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


    return (
        <div ref={ref} className='ExperienceWrapper'>
            <div className='ExperienceContainer'>
                <motion.div 
                animate={isInView ? 'onscreen':'offscreen'} 
                transition={{duration: .7}}
                variants={variants}
                className='gridItem item1'>
                    <div style={{display: 'flex', justifyContent:'space-between'}}>
                        <h1>.01</h1>
                        <div style={{display: 'flex', gap: '1rem'}}>
                            <h1><FaReact/></h1>
                            <h1><TbBrandNextjs/></h1>
                        </div>
                    </div>
                    <div style={{flex: '1 1 auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src={"/src/assets/Images/FanguestLogo.png"} alt="" />  
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h1>Launch Project</h1>
                        <h1>-{'>'}</h1>
                    </div>
                </motion.div>
                <motion.div
                animate={isInView ? 'onscreen':'offscreen'}
                transition={{duration: 1}}
                variants={variants} className='gridItem item2'>
                    <div style={{display: 'flex', justifyContent:'space-between'}}>
                        <h1>.02</h1>
                        <h1>SAAS</h1>
                    </div>
                    <div style={{flex: '1 1 auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src={"/src/assets/Images/kindorseLogo.png"} alt="" />  
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h1>Launch Project</h1>
                        <h1>-{'>'}</h1>
                    </div>
                </motion.div>
                <motion.div
                animate={isInView ? 'onscreen':'offscreen'}
                transition={{duration: 1.5}}
                variants={variants} className='gridItem item3'>
                    <div style={{display: 'flex', justifyContent:'space-between'}}>
                        <h1>.02</h1>
                        <h1>SAAS</h1>
                    </div>
                    <div style={{flex: '1 1 auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src={"/src/assets/Images/CityOfFestivals.png"} alt="" />  
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h1>Launch Project</h1>
                        <h1>-{'>'}</h1>
                    </div>
                </motion.div>
                <motion.div 
                animate={isInView ? 'onscreen':'offscreen'}
                transition={{duration: 1.3}}
                variants={variants} className='gridItem item4'>
                    <div style={{display: 'flex', justifyContent:'space-between'}}>
                        <h1>.02</h1>
                        <h1>SAAS</h1>
                    </div>
                    <div style={{flex: '1 1 auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src={"/src/assets/Images/BAMX.png"} alt="" />  
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h1>Launch Project</h1>
                        <h1>-{'>'}</h1>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}