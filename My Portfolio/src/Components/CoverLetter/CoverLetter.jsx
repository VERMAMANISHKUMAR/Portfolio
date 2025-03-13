// CoverLetter.jsx
import React from "react";
import "./CoverLetter.css"; 

const Coverletter = () => {
  return (
    <div className="cover-letter-container" id="CoverLetter">
      <h1 className="title">Cover Letter</h1>

      <div className="content">
        <p>Dear Sir/Meam,</p>

        <p>
        I am excited to apply for the <span style={{color:'#FCA61F'}}>Full Stack Developer role.</span> With expertise in software development, <span style={{color:'#24f'}}>HTML, CSS, JavaScript, Bootstrap, React, Redux, Node.js, Express.js, MongoDB, MySQL,</span> and authentication systems, I am eager to contribute to your mission of delivering secure and innovative solutions.
        </p>

        <p>
        I completed the <span style={{color:'#24f'}}>Full Stack Developer Bootcamp from Coding Ninjas,</span> where I honed my skills in building end-to-end web applications and integrating secure authentication mechanisms.
        </p>
        <p>
        I am confident my skills in building RESTful APIs, implementing secure authentication systems, and managing databases like MongoDB and MySQL align with your team’s needs. I look forward to contributing to Authenticate’s success.
        </p>

        <p>
         Thank you for considering my application.
        </p>

        <p>
          Name:- Manish Kumar Verma
        </p>
          <p>
          Contact Number: 8521837619
          </p>
        <p>
         <a href="https://www.linkedin.com/in/manishverma25"><span style={{fontSize:'20px'}}>LinkedIn Profile:</span><span style={{color:'green', textDecoration:"underline"}}>https://www.linkedin.com/in/manishverma25</span></a>
        </p>

       <p>
       <a href="https://vermamanishkumar.github.io/My-Portfolio/"><span style={{fontSize:'20px'}}>Portfolio Link:</span><span style={{color:"green", textDecoration:'underline'}}>https://vermamanishkumar.github.io/My-Portfolio/</span></a>
       </p>

      </div>
    </div>
  );
};

export default Coverletter;
