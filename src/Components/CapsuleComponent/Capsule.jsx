import { motion, useInView} from 'framer-motion';
import './Capsule.css'

export default function Capsule({}) {

    const rightCapsule = {
        offscreen: {
            x: 250,
            transition: 
            {
                duration: .4 ,
            }
        },
        onscreen: {
            x: 10,
            transition: 
            {
                duration: .4 ,
            }
        }
      };

      const leftCapsule = {
        offscreen: {
            x: -250,
            transition: 
            {
                duration: .4 ,
            }
        },
        onscreen: {
            x: -10,
            transition: 
            {
                duration: .4 ,
            }
        }
      };

    return (
        <motion.div className='CapsuleWrapper'>
                <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={rightCapsule}
                viewport={{ once: true, amount: 1 }} 
                className='CapsuleLeft'>
                    <h2>Right Tittle</h2>
                </motion.div>
                <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={leftCapsule}
                viewport={{ once: true, amount: 1 }} 
                 className='CapsuleRight'>
                    <h2>Right Tittle</h2>
                </motion.div>
        </motion.div>
    );
}