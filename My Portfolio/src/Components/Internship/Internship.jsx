import React from 'react';
// import { PDFDownloadLink } from '@react-pdf/renderer';
import Internship1 from '../Internship/Internship1.pdf';
import Internship2 from '../Internship/Internship2.pdf';
import './Internship.css'
const PDFViewerComponent = () => {
  return (
    <div style={{ textAlign: 'center' }} id='Internship'>
      <h2 className='pdf-preview'>Internship <span className='pdf-preview'style={{color:'#FCA61F'}}>& Certificate </span></h2>
      
      {/* Embed PDF inside a div with A4 aspect ratio */}
      <div style={{ width: '795px', height: '842px', border: '1px solid #ccc', margin: 'auto' }}>
        <iframe
          src={Internship1}
          width="100%"
          height="100%"
          style={{ border: 'none'}}
        ></iframe>
      </div>
      <hr/>
      <div style={{ width: '795px', height: '842px', border: '1px solid #ccc', margin: 'auto' }}>
        <iframe
          src={Internship2}
          width="100%"
          height="100%"
          style={{ border: 'none'}}
        ></iframe>
      </div>
    </div>
  );
};

export default PDFViewerComponent;
