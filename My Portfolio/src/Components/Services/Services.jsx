import React from 'react'
import './Services.css'
import Resume from './Resume.pdf'
import { motion } from 'framer-motion';//this is the motion object that will be used MOTION object
import Heartemoji from '../../images/img/heartemoji.png'
import Glasses from '../../images/img/glasses.png'
import Humble from '../../images/img/humble.png'

const Services = () => {
  const transition={duration :2, type:'spring'}
  return (
    <div className='services' id='Services'>
    {/* left side content */}
    <div className='awesome'>
    <span>My awesome</span>
    <span>services</span>
    <span>
    My Awesome Services offers expert web development solutions, <br/>including website design, front-end and back-end development,<br/> e-commerce, and maintenance. Our team ensures your site is <br/>responsive, user-friendly, and visually appealing, using the <br/>latest technologies to enhance your digital presence and <br/>achieve your business goals.
    </span>
    <a href={Resume} download>
    <button className='button s-button'>Download CV</button>
    </a>
    {/* <div className='blur s-blur2' style={{background:'#ABF1FF94'}}></div> */}

    </div>
    {/* Right side content */}
    <motion.div 
    initial={{left:'-20%',top:'40rem',right:'30px'}}
    whileInView={{left:'-5%'}}
    transition={transition}
    
    className='cards-1'>
      <div>
       <img src={Heartemoji} alt="icon is missing" className='heatemoji'/>
         <span>Detail</span><br/>
         
         <span>Figma, Sketch, photoshop, Adobe, Adobe xd </span>

         
          <a href='https://www.w3schools.com/quiztest/'><button className='c-button'>LEARN MORE</button></a>
         </div>
         {/* <div className='blur s-blur2' style={{background:'var(--purple)'}}></div> */}

    </motion.div>

    <motion.div 
     initial={{ left: '10rem', top: '1.5rem'}}
          whileInView={{ left: '-5rem' }}
          transition={transition}
    
    
    className='cards-2'>
      <div>
       <img src={Glasses} alt="icon is missing" className='Glasses'/>
         <span>Developer</span><br/>
         
         <span>Html, Css, JavaScript, React</span>
         <a href='https://cheatsheets.shecodes.io/react'><button className='c-button'>LEARN MORE</button></a>
         </div>
         {/* <div className='blur s-blur2' style={{background:'var(--purple)'}}></div> */}

    </motion.div>
    {/* card -3 */}
    <motion.div 
    initial={{left:'-20%',top:'35rem',right:'30px'}}
    whileInView={{left:'13%'}}
    transition={transition}
    
    
    className='cards-3'>
      <div>
       <img src={Humble} alt="icon is missing" className='Humble'/>
         <span>UI/UX</span><br/>
         
         <span> Dummy text are usually use.</span>
        
          <a href='https://bootstrap-cheatsheet.themeselection.com/'> <button className='c-button'>LEARN MORE</button></a>
        
  
         </div>
         {/* <div className='blur s-blur2' style={{background:'var(--purple)'}}></div> */}

    </motion.div>
   
    </div>
  )
}

export default Services
