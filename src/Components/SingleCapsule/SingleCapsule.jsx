import { useEffect, useRef } from 'react';
import './SingleCapsule.css'
import { motion, useInView, useScroll} from 'framer-motion';

export default function SingleCapsule(props) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const variants = {
        offscreen: {
            x: '100vw',
            transition: 
            {
                duration: .4 ,
            }
        },
        onscreen: {
            x: 0,
            transition: 
            {
                duration: .4 ,
            }
        }
      };

    return (
        <div className='SCMain' ref={ref}>
            <motion.div
            style={{
                transform: isInView ? "none" : `translateX(${props.side})`,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
                background: props.color
              }}
            className= 'SCWrapper'>
                {props.children}
            </motion.div>
        </div>
    );
}