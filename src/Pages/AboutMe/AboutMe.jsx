import Capsule from '../../Components/CapsuleComponent/Capsule';
import SingleCapsule from '../../Components/SingleCapsule/SingleCapsule';
import './AboutMe.css'
import { AboutMeText } from '../AboutMe/AboutMeTexts';
import {TbWorldDownload} from 'react-icons/tb'
import {ImArrowUp} from 'react-icons/Im'


export default function AboutMe() {

    return (
        <div className='AboutMeWrapper'>
            <div className="AboutMeContainer">
                <div className='SingleCapsuleTitle'>
                    <SingleCapsule color={'#D5FF40'} side={'100vw'}>
                        <div style={{padding: '1rem'}}>
                            <div className='ATDecoration'>
                                <h1 style={{color: '#C6FF2D'}}>.01</h1>
                                <div>
                                    <h1 style={{color: '#C6FF2D'}}>This side up</h1>
                                    <ImArrowUp style={{color: '#C6FF2D', fontSize: '1.5rem'}} />
                                </div>
                            </div>
                            <h1 style={{textAlign: "center", fontWeight: "bold", color: '#C6FF2D'}} >ABOUT ME.</h1>
                        </div>
                    </SingleCapsule>
                </div>
                <div className='AMFlexItems'>
                    <div className='DowloadAndInfo'>
                        <div className='SCInfo'>
                            <SingleCapsule color={'#1B1B1F'} side={'-100vw'}>
                                <div style={{padding: '1rem'}}>
                                    <div className='ATDecoration'>
                                        <h1 style={{color: '#C6FF2D'}}>.03</h1>
                                    </div>
                                    <div className='SCInfoText'>
                                        <p style={{textAlign: "justify", color: '#C6FF2D'}} >{AboutMeText.text1}</p>
                                        <p style={{textAlign: "justify", color: '#C6FF2D'}} >These days, I've been working as a <strong>front-end developer</strong> for a bunch of cool companies here in Mexico, as well as some international clients. But hey, I'm always up for a new challenge especially now that I'm just a few months away from finishing my degree! <strong>If you've got an interesting project, give me a shout.</strong></p>
                                    </div>
                                </div>
                            </SingleCapsule>
                        </div>
                        <div className='SCDowload'>
                            <SingleCapsule color={'#FF90E8'} side={'-100vw'}>
                                <div className='dowloadbtn'>
                                    <h1>.04</h1>
                                    <h1 id='dowloadTxt'>Dowload CV</h1>
                                    <TbWorldDownload style={{fontSize: '3.5rem'}}/>
                                </div>
                            </SingleCapsule>
                        </div>
                    </div>
                    <div className='ImageAndSkills'>
                        <div className='SCImageWrapper'>
                            <SingleCapsule color={'#2900E8'} side={'100vw'}>
                                    <h1>.02</h1>
                                    <div className='SCImage'>
                                        <img className='fillM' src={"/src/assets/Images/aboutMePic.jpg"} alt="me" />
                                    </div>
                            </SingleCapsule>
                        </div>
                        <div className='SCSkills'>
                            <SingleCapsule color={'#C6FF2D'} side={'100vw'}>
                                <div>
                                <h3>Recent technologies I have worked with:</h3>
                                </div>
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
                    </div>
                </div>
            </div>
        </div>
    );
}