import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/css';
import 'swiper/css/autoplay'; // Import Swiper's autoplay CSS
import './Portfolio.css';

import MogoDB from '../../images/img/mongo-db.png';
import Express from '../../images/img/express-js.png';
import ReactJS from '../../images/img/react-js.png';
import Node from '../../images/img/node-js.png';


const Portfolio = () => {
  return (
    <div>
      <div className='portfolio' id="Portfolio">
        {/* heading */}
        <span className='Project-heding'>React Project + JavaScript Project</span>
        <br />
        <span>Portfolio</span>
        {/* Slider */}
        <Swiper
      modules={[Autoplay]} // Enable Autoplay module
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      loop={true} // Ensures continuous looping
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className='portfolio-slider'
    >
      <SwiperSlide>
        <img src={MogoDB} alt="MongoDB" className='mongo-db' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Express} alt="Express" className='express' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ReactJS} alt="ReactJS" className='react' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Node} alt="NodeJS" className='node' />
      </SwiperSlide>
    </Swiper>
      </div>
      <div className='project-link'>
        <table>
          <tr>
            <th>S.N.P</th>
            <th>Project Name</th>
            <th>GitHub link</th>
            <th>Live Project link</th>
          </tr>
          <tr>
            <td>1</td>
            <td>E Commerce Project-1</td>
            <td><a href='https://github.com/VERMAMANISHKUMAR/Ecommerc-project-Html-CSS-JavaScript/tree/main'>E Commerce Project GitHub link</a><i className="fa-solid fa-paperclip"></i></td>
            <td><a href='https://vermamanishkumar.github.io/Ecommerc-project-Html-CSS-JavaScript/'>E Commerce Project Live Project</a><i className="fa-solid fa-paperclip"></i></td>
          </tr>
          <tr>
            <td>2</td>
            <td>E Commerce Project-2</td>
            <td><a href='https://inquisitive-kulfi-4f126f.netlify.app/'>E Commerce Project GitHub link</a><i className="fa-solid fa-paperclip"></i></td>
            <td><a href='https://inquisitive-kulfi-4f126f.netlify.app/'>E Commerce Project Live Project</a><i className="fa-solid fa-paperclip"></i></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Healthcare Project</td>
            <td><a href='https://github.com/VERMAMANISHKUMAR/Healthcare-Management-System'>HMS GitHub link</a><i className="fa-solid fa-paperclip"></i></td>
            <td><a href='https://myprojecthealthcare.netlify.app/'>Healthcare Management System</a><i className="fa-solid fa-paperclip"></i></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Crypto Tracker App</td>
            <td><a href='https://github.com/VERMAMANISHKUMAR/Crypto-Tracker-App-1'>Crypto Tracker GitHub link</a><i className="fa-solid fa-paperclip"></i></td>
            <td><a href='https://gleaming-hotteok-3ee78d.netlify.app/'>Crypto Tracker Live Project</a><i className="fa-solid fa-paperclip"></i></td>
          </tr>
          <tr>
            <td>5</td>
            <td>Food Appliction</td>
            <td><a href='https://github.com/VERMAMANISHKUMAR/Food-Menu-App'>Food Application GitHub link</a><i className="fa-solid fa-paperclip"></i></td>
            <td><a href='https://vermamanishkumar.github.io/Food-Menu-App/'>Food Application Live Project</a><i className="fa-solid fa-paperclip"></i></td>
          </tr>
          <tr>
            <td>6</td>
            <td>My Portfolio Project</td>
            <td><a href='https://github.com/VERMAMANISHKUMAR/Portfolio-use-Html-CSS-and-JavaScript'>My portfolio GitHub link</a><i className="fa-solid fa-paperclip"></i></td>
            <td><a href='https://vermamanishkumar.github.io/Portfolio-use-Html-CSS-and-JavaScript/'>My Portfolio Live Project link</a><i className="fa-solid fa-paperclip"></i></td>
          </tr>
          <tr>
            <td>7</td>
            <td>Hotal Application</td>
            <td><a href='https://github.com/VERMAMANISHKUMAR/Hotel-Project'>Hotel App GitHub link</a><i className="fa-solid fa-paperclip"></i></td>
            <td><a href='https://luminous-pika-361ba8.netlify.app/'>Hotel App Live Project link</a><i className="fa-solid fa-paperclip"></i></td>
          </tr>
          <tr>
            <td>8</td>
            <td>Blog App Appliction</td>
            <td><a href='https://66d827cd7698c369a247ed07--charming-crepe-8f0288.netlify.app/'>Blog App GitHub link</a><i className="fa-solid fa-paperclip"></i></td>
            <td><a href='https://66d827cd7698c369a247ed07--charming-crepe-8f0288.netlify.app/'>Blog App Live Project</a><i className="fa-solid fa-paperclip"></i></td>
          </tr>
          <tr>
            <td>9</td>
            <td>To Do App</td>
            <td><a href='https://lucky-rabanadas-954b12.netlify.app/'>To Do App GitHub link</a><i className="fa-solid fa-paperclip"></i></td>
            <td><a href='https://lucky-rabanadas-954b12.netlify.app/'>ToDo App Live Project</a><i className="fa-solid fa-paperclip"></i></td>
          </tr>
          <tr>
            <td>10</td>
            <td>Photo-Albam Project</td>
            <td><a href='https://papaya-puffpuff-23fa78.netlify.app/'>Photo Albam GitHub link</a><i className="fa-solid fa-paperclip"></i></td>
            <td><a href='https://papaya-puffpuff-23fa78.netlify.app/'>Photo Albam Live Project </a><i className="fa-solid fa-paperclip"></i></td>
          </tr>
          <tr>
            <td>11</td>
            <td>Qusie Game Project</td>
            <td><a href='https://glowing-bunny-5fa9b2.netlify.app/'>Qusie Game GitHub link</a><i className="fa-solid fa-paperclip"></i></td>
            <td><a href='https://glowing-bunny-5fa9b2.netlify.app/'>Qusie Game Live Project</a><i className="fa-solid fa-paperclip"></i></td>
          </tr>
          <tr>
            <td>12</td>
            <td>Weather Temperature App</td>
            <td><a href='https://splendid-paprenjak-82d3ab.netlify.app/'>Weather Temperature GitHub link</a><i className="fa-solid fa-paperclip"></i></td>
            <td><a href='https://splendid-paprenjak-82d3ab.netlify.app/'>Weather Temperature Live Project</a><i className="fa-solid fa-paperclip"></i></td>
          </tr>
          <tr>
            <td>13</td>
            <td>Expence Tracker Project</td>
            <td><a href='https://fantastic-semifreddo-6ee7ac.netlify.app/'>Expence Tracker GitHub link</a><i className="fa-solid fa-paperclip"></i></td>
            <td><a href='https://fantastic-semifreddo-6ee7ac.netlify.app/'>Expence Tracker Live Project</a><i className="fa-solid fa-paperclip"></i></td>
          </tr>
          <tr>
            <td>14</td>
            <td>Calculator Project</td>
            <td><a href='https://famous-ganache-6175af.netlify.app/'>Calculator Project GitHub link</a><i className="fa-solid fa-paperclip"></i></td>
            <td><a href='https://famous-ganache-6175af.netlify.app/'>Calculator Project Live Project</a><i className="fa-solid fa-paperclip"></i></td>
          </tr>
          <tr>
            <td>15</td>
            <td>Joke Generator project</td>
            <td><a href='https://cozy-moxie-59280c.netlify.app/'>Joke Generator GitHub link</a><i className="fa-solid fa-paperclip"></i></td>
            <td><a href='https://cozy-moxie-59280c.netlify.app/'>Joke Generator Live Project</a><i className="fa-solid fa-paperclip"></i></td>
          </tr>
          <tr>
            <td>16</td>
            <td>Music Project-1</td>
            <td><a href='https://ephemeral-pothos-4c2604.netlify.app/'>Music Project-1 GitHub link</a><i className="fa-solid fa-paperclip"></i></td>
            <td><a href='https://ephemeral-pothos-4c2604.netlify.app/'>Music Project-1 Live Project</a><i className="fa-solid fa-paperclip"></i></td>
          </tr>
          <tr>
            <td>17</td>
            <td>Network Speed Test</td>
            <td><a href='https://vermamanishkumar.github.io/Network-Speed-test/'>Music Project-2 GitHub link</a><i className="fa-solid fa-paperclip"></i></td>
            <td><a href='https://vermamanishkumar.github.io/Network-Speed-test/'>Music Project-2 Live Project</a><i className="fa-solid fa-paperclip"></i></td>
          </tr>
          <tr>
            <td>18</td>
            <td>Music Project-2</td>
            <td><a href='https://funny-lokum-f1fa43.netlify.app/'>Music Project-2 GitHub link</a><i className="fa-solid fa-paperclip"></i></td>
            <td><a href='https://funny-lokum-f1fa43.netlify.app/'>Music Project-2 Live Project</a><i className="fa-solid fa-paperclip"></i></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Portfolio;
