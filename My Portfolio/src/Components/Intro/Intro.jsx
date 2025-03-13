import React from 'react'
import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import {motion} from 'framer-motion'
// left side image
import Github from '../../images/img/github.png'
import Linkedin from '../../images/img/linkedin.png'
import Instagram from '../../images/img/instagram.png'
import Naukri    from '../../images/img/naukri.png'
import Coding_Ninja from '../../images/img/coding logo.png'
//right side image
import Vector1 from '../../images/img/Vector1.png'
import Vector2 from '../../images/img/Vector2.png'
import Boy from '../../images/img/boy.png'
import Glassesimoji from '../../images/img/glassesimoji.png'
import Thumbup from '../../images/img/thumbup.png'

const Intro = () => {
  const transition={duration :2, type:'spring'}
  return (
    <div className='intro'>
    {/* left side section */}
    <div className='i-left'>
    <div className='i-name leSnake'>
          <span>Hy! I Am</span>
          <span>Manish Kumar Verma</span>
         
          <span>Frontend and Backend Developer with high level of experience in web designing and development, <br/>producting the Quality work in <br/>Seeking Full Stack Web Developer Role Proficient in HTML5, CSS, Bootstrap, Tailwind CSS, <br/>JavaScript, React, Node.js, Express, MogoDB, RESTFull API, WordPress, GitHub and ChatGpt.</span>
    </div>
    <button className=' button i-button'>Hire me</button>
    <div className='i-icons'>
    
    <a href="https://github.com/VERMAMANISHKUMAR"><img src={Github} alt="icon is missing"/></a>
    <a href="https://www.linkedin.com/in/manishverma25/"> <img src={Linkedin} alt="icon is missing"/></a>
    <a href="https://www.instagram.com/manish.kumarverma.90663894/"><img src={Instagram} alt="icon is missing"/></a>
    <a href="https://www.naukri.com/mnjuser/profile?id=&altresid"><img src={Naukri} alt="icon is missing" /></a>
    <a href="https://www.naukri.com/code360/profile/manishverma"><img src={Coding_Ninja} alt="icon is missing" /></a>

    </div>
    </div>
    {/* left side section exit */}

    {/* right side section */}

    <div className='i-right'>
    <img src={Vector1} alt="icon is missing"/>
    <img src={Vector2} alt="icon is missing"/>
    <img src={Boy} alt="icon is missing"/>
    <motion.img 
    initial={{left:'-36%'}}
    whileInView={{left:'-24%'}}
    transition={transition}
    
    src={Glassesimoji} alt="icon is missing" className='glassesimoji'/>
         <div>
          <FloatingDiv/>
          </div>
          <motion.div 
         initial={{ left: '20rem', top: '18rem' }}
          whileInView={{ left: '14rem' }}
          transition={transition}
          className='thumbup'>
       <img src={Thumbup} alt="icon is missing" className='thum'/>
       <span>
          Best Desing <br/>
          Award
      </span>

     </motion.div>
     
    </div>
    {/* right side section exit */}
    </div>
  )
}

export default Intro
