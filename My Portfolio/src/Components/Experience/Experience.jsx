import React from 'react'

import './Experience.css'
const Experience = () => {
    
  return (
      <>
      <h1 className='Experience-heding'>Experience</h1>
       <div className='experience' id="Experience">
    <div className='achievement'>
          <div className='circle'>1+</div>
          <span className='experience-text'>Years</span>
          <span  style={{textAlign:'center',color:'#FCA61F', marginLeft:'16px', fontWeight:'700'}}>Experience</span>
    </div>
    <div achievement>
          <div className='circle'>60+</div>
          <span  className='experience-text'>Completed</span><br/>
          <span  style={{textAlign:'center',color:'#FCA61F', marginLeft:'15px', fontWeight:'700'}}>Projects</span>
    </div>
    <div achievement>
          <div className='circle'>01+</div>
          <span  className='experience-text'>Companies</span><br/>
          <span style={{textAlign:'center',color:'#FCA61F', marginLeft:'20px', fontWeight:'700'}}>Work</span>
    </div>
    <div achievement>
          <div className='circle'>02+</div>
          <span  className='experience-text'>Internship</span><br/>
          <span  style={{textAlign:'center',color:'#FCA61F', marginLeft:'20px', fontWeight:'700'}}>Work</span>
    </div>
      
    </div>
    </>
  )
}

export default Experience
