import './AboutMe.css'
import { useRef } from 'react';
import { AboutMeText } from './AboutMeTexts';
import { motion, useInView} from 'framer-motion';
import HorizontalText from '../../Components/HorizontalText/HorizontalText';

export default function AboutMe() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    const cardVariants = {
        offscreen: {
            scale: .7,
        },
        onscreen: {
            scale: 1,
            transition: 
            {
                duration: .4 ,
            }
        }
      };
      
    return (
        <div className="AboutMeWrapper">
            <motion.div
            // initial="offscreen"
            // whileInView="onscreen"
            // variants={cardVariants}
            // viewport={{ once: true, amount: .5 }}
            className='AboutMeCard'>
                <div className='AboutMeInfo'>
                    <div className='AboutMeImgContainer'>
                            <img src={"/src/assets/Images/aboutMePic.jpg"} alt="me" />
                            <div className='AboutMeSkills'>
                                <h3>Skills :</h3>
                                <ul className='SkillsUl'>
                                        <li>TypeScript</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                        <li>Next.js</li>
                                        <li>Svelte</li>
                                        <li>Angular</li>
                                </ul>
                            </div>
                    </div>
                    <div className='AboutMeInfoText'>
                        <h1>About</h1>
                        <p>{AboutMeText.text1}</p>
                        <p>{AboutMeText.text2}</p>
                        <div className='AboutMeSkillsResponsive'>
                                <h3>Skills :</h3>
                                <ul className='SkillsUl'>
                                        <li>TypeScript</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                        <li>Next.js</li>
                                        <li>Svelte</li>
                                        <li>Angular</li>
                                </ul>
                            </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}