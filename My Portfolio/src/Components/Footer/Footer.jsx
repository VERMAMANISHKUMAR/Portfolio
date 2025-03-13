import React from 'react'
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Fessbook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedln  from '@iconscout/react-unicons/icons/uil-linkedin'
import Wave  from "../../images/img/wave.png"

const Footer = () => {
  return (

    <div className='footer'>

                <img src={Wave} alt=' ' style={{width:'100%',height:'400px'}}/>

                    <div className='f-container'>
                     <span>Manish.sviet02@gmail.com</span>
                     <div className='f-icons'>
                        <a href="https://www.instagram.com/manish.kumarverma.90663894/"><Insta color='white' size='3rem'/></a>
                        <a href="https://www.facebook.com/profile.php?id=100085522317268&mibextid=ZbWKwL"><Fessbook color='white' size='3rem'/></a> 
                        <a href="https://github.com/VERMAMANISHKUMAR"> <Github color='white' size='3rem'/></a>   
                        <a href="https://www.linkedin.com/in/manishverma25/"> <Linkedln color='white' size='3rem'/></a> 
                          
                    </div>
                  
                    </div>
    </div>
  )
}

export default Footer
