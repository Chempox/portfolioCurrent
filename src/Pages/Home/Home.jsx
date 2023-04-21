import AnimatedText from '../../Components/AnimatedText/AnimatedText';
import AnimatedTextCharacter from '../../Components/AnimatedTextCharacters/AnimatedTextCharacter';
import './Home.css'
import { motion, useScroll} from 'framer-motion';

export default function Home() {

    const cardVariants = {
        offscreen: {
            opacity: 0,
            x: 100,
          transition: {
            delay: 0
          }
        },
        onscreen: {
            opacity: 1,
            x: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: .4
          }
        }
      };
    
    return (
      <>
        <div className='HomeContainer'>
            <div className='HomeCopy'>
                <h1 className='Homeh1 Homeh1Ghost'><AnimatedText text='Hi ,' delay={0.04}/></h1>
                <div className='CopyWrapper'>
                    <h1 className='Homeh1 HiHidden'><AnimatedText text='Hi ,' delay={0.04}/></h1>
                    <h1 className='Homeh1'><AnimatedText text='my ' delay={0.24}/></h1>
                    <h1 className='Homeh1'><AnimatedText text='name ' delay={0.44}/></h1>
                    <h1 className='Homeh1'><AnimatedText text='is ' delay={0.66}/></h1>
                    <h1 className='Homeh1 red'><AnimatedTextCharacter text={'Juan.'} delay={1} letterDelay={0.08}/></h1>    
                </div>
                <motion.ul
                initial={{ x: -1000, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 0.5,delay: 1.6}}
                // initial="offscreen"
                // whileInView="onscreen"
                // variants={cardVariants}
                // viewport={{ once: false, amount: 1 }}
                className='HomeOl'>
                    <li className='Homeli hover-underline-animation'><h3>ABOUT ME</h3></li>
                    <li className='Homeli hover-underline-animation'><h3>EXPERIENCE</h3></li>
                    <li className='Homeli hover-underline-animation'><h3>CONTACT</h3></li>
                </motion.ul>
            </div>
      </div>
      {/* <article>
      </article> */}
      </>
    );
}