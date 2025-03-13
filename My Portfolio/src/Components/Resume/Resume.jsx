import React from 'react';
// import { PDFDownloadLink } from '@react-pdf/renderer';
import resume from '../Resume/resume.pdf';
import './Resume.css'
const PDFViewerComponent = () => {
  return (
    <div style={{ textAlign: 'center' }} id='Resume'>
      <h2 className='pdf-preview'>PDF Preview <span className='pdf-preview'style={{color:'#FCA61F'}}>& PDF Download </span></h2>
      
      {/* Embed PDF inside a div with A4 aspect ratio */}
      <div style={{ width: '795px', height: '842px', border: '1px solid #ccc', margin: 'auto' }}>
        <iframe
          src={resume}
          width="100%"
          height="100%"
          style={{ border: 'none'}}
        ></iframe>
      </div>
    </div>
  );
};

export default PDFViewerComponent;
