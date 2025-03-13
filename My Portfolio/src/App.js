import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import Works from './Components/Works/Works';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonial from './Components/Testimonial/Testimonial';
import CoverLetter from './Components/CoverLetter/CoverLetter';
import Email from './Components/Email&Contact/Email';
import Footer from './Components/Footer/Footer';
import { themeContext } from './Context';
import { useContext } from 'react';
import Resume from './Components/Resume/Resume';
import Certificate from './Components/Certificate/CertificateGallery'
// import ProjectGallery from './Components/ProjectGallery/ProjectGallery';
import Internship from './Components/Internship/Internship';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    
      <div className='App' style={{ background: darkMode ? 'gray' : '', color: darkMode ? 'white' : '' }}>
             <Navbar />
             <Intro />
              <Services />
              <Experience />
              <Works />
              <Portfolio />
              <Testimonial />
              <CoverLetter />
              <Resume/>
              <Certificate/>
              {/* <ProjectGallery/> */}
              <Internship/>
              <Email />
              <Footer />
        
      </div>
    
  );
}

export default App;
