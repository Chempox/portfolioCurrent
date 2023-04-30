import './ContactMe.css'
import {AiOutlineMail, AiFillLinkedin} from 'react-icons/ai'

export default function ContactMe() {
    return (
        <div className="contactMeWrapper" id='ContactSection'>
            <div className="contactMeContainer">
                <h1>Don't be shy, say hi {'(◠﹏◠)'}</h1>
                <button><a href="mailto:pablo.yanez@proton.me">Contact me</a></button>
                {/* <div className='markers'/> */}
            </div>
            <div className='extraInfo'>
                <a href="https://www.linkedin.com/in/juanpabloyanez/" target='__blank'><h1><AiFillLinkedin/></h1></a>
                <h1><AiOutlineMail/></h1>
                <h1>pablo.yanez@proton.me</h1>
            </div>
        </div>
    );
}