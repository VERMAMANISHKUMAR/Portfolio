import React from 'react';
import './Testimonial.css';
import profilePic1 from '../../images/img/profile1.jpg';
import profilePic2 from '../../images/img/profile2.jpg';
import profilePic3 from '../../images/img/profile3.jpg';
import profilePic4 from '../../images/img/profile4.jpg';
import profilePic5 from '../../images/img/profile5.jpg';
import profilePic6 from '../../images/img/profile6.jpg';
import { Pagination, A11y, Autoplay } from 'swiper/modules'; // Removed Navigation & Scrollbar
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay styles

const Testimonial = () => {
  const clients = [
    { img: profilePic1, review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' },
    { img: profilePic2, review: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' },
    { img: profilePic3, review: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' },
    { img: profilePic4, review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { img: profilePic5, review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { img: profilePic6, review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  ];

  return (
    <div className='t-wrapper' id="Testimonials">
      <div className='t-heading'>
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      </div>

      {/* Swiper with Autoplay & Pagination */}
      <Swiper
        modules={[Pagination, A11y, Autoplay]} // Removed Navigation & Scrollbar
        spaceBetween={50}
        slidesPerView={1}
        loop={true} // Ensures continuous sliding
        autoplay={{
          delay: 2000, // Change slide every 2 seconds
          disableOnInteraction: false, // Keeps autoplay running even after interaction
        }}
        pagination={{ clickable: true }} // Only pagination remains
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className='testimonial'>
              <img src={client.img} alt='profile' />
              <span>{client.review}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
