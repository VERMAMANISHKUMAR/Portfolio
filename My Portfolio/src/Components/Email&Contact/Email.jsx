import React, { useRef, useState } from 'react';
import './Email.css';
import emailjs from '@emailjs/browser';
import { QRCodeSVG } from "qrcode.react";
const Email = () => {
  const form = useRef();
  const [toSend, setToSend] = useState({
    from_name: '',
    reply_to: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_b300wke', 'template_yt3cgvr', form.current, 'iETzvIKjIb2GGlxyG')
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true); // Set submitted status to true on success
          setToSend({ from_name: '', reply_to: '', message: '' }); // Clear form
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setToSend((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const email = "manish.sviet02@gmail.com";
  return (
    <>
      {/* <div className='awesome'>
          <span>Get in touch</span><span>Contact me</span>
        </div> */}
        <div className='heading'>
        <span>Get in touch</span><span>Contact me</span>
     </div>
    <div className='contact-form'>
      <div className='w-left'>
        {/* <div className='awesome'>
          <span>Get in touch</span><span>Contact me</span>
        </div> */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* <h1>QR Code for Email</h1> */}
      <QRCodeSVG
        value={`mailto:${email}`}
        size={200}
        fgColor="#000000"
        bgColor="#ffffff"
        level="H"
      />
    </div>
        
      </div>

      <div className='c-right'>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            className="user"
            placeholder="Name"
            value={toSend.from_name}
            onChange={handleChange}
            required
          />
          {/* <input
            type="text"
            name="from_number"
            className="user"
            placeholder="Contact Number"
            value={toSend.from_number}
            onChange={handleChange}
            required
          /> */}
          <input
            type="email"
            name="reply_to"
            className="user"
            placeholder="Email"
            value={toSend.reply_to}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            className='user'
            placeholder="Message"
            value={toSend.message}
            onChange={handleChange}
            required
          ></textarea>
          {isSubmitted && <span>Thanks for contacting me!</span>}
          <input type="submit" value="Send" className='button s-button' />
          {/* <div className='blur c-blur1' style={{ background: 'var(--purple)' }}></div> */}
        </form>
      </div>
    </div>
    </>
  );
};

export default Email;
