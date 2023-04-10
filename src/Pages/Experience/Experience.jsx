import Capsule from '../../Components/CapsuleComponent/Capsule';
import SingleCapsule from '../../Components/SingleCapsule/SingleCapsule';
import './Experience.css'
import { AboutMeText } from '../AboutMe/AboutMeTexts';


export default function Experience() {

    return (
        <div className="ExperienceWrapper">
            <div className='SingleCapsuleTitle'>
                <SingleCapsule color={'#FF90E8'} side={'100vw'}>
                    <div className='ATDecoration'>
                        <h1>.01</h1>
                        <div>
                            <h1>This side up</h1>
                            <img src={"/src/assets/Images/this-side-up.png"} alt="" />
                        </div>
                    </div>
                    <h1 style={{textAlign: "center"}} >ABOUT ME.</h1>
                </SingleCapsule>
            </div>
            <div className='SCInfo'>
                <SingleCapsule side={'-100vw'}>
                    <div className='ATDecoration'>
                        <h1>.03</h1>
                    </div>
                    <div className='SCInfoText'>
                        <p style={{textAlign: "justify"}} >{AboutMeText.text1}</p>
                        <p style={{textAlign: "justify"}} >{AboutMeText.text2}</p>
                    </div>
                </SingleCapsule>
            </div>
            <div className='SCImageWrapper'>
                <SingleCapsule color={'#2900E8'} side={'100vw'}>
                        <h1>.02</h1>
                        <img className='fillM' src={"/src/assets/Images/aboutMePic.jpg"} alt="me" />
                </SingleCapsule>
            </div>
            <div className='SCSkills'>
                <SingleCapsule color={'#23A094'} side={'100vw'}>
                    <h3>Recent technologies I have worked with</h3>
                    <ul className='SkillsUl'>
                            <li>TypeScript</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Next.js</li>
                            <li>Svelte</li>
                            <li>Angular</li>
                    </ul>
                </SingleCapsule>
            </div>
            <div className='SCDowload'>
                <SingleCapsule color={'#FFC900'} side={'-100vw'}>
                    <div className='dowloadbtn'>
                    <h1>.04</h1>
                        <h1 id='dowloadTxt'>Dowload CV</h1>
                        <img className='dowloadIcon' src={"/src/assets/Images/box-arrow-down.svg"} alt="me" />
                    </div>
                </SingleCapsule>
            </div>
        </div>
    );
}