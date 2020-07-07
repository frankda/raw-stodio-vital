import React, {useState, useEffect} from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import './fonts/Sofia Pro Regular.ttf';
import LandingSection from './components/landingSection/landingSection';
import HowVitalWorkSection from './components/how-vital-work/howVitalWorkSection';
import PractitionersSection from './components/practitioners/practitioners';
import Comments from './components/comment/comments';
import DiscoverOurHub from './components/dicover-our-hub/discoverOurHubSection';
import Footer from './components/footer/footer';


function App() {
  const [currentScrollPosState, setCurrentScrollPosState] = useState(0);
  const [currentInnerWidthState, setCurrentInnerWidthState] = useState(0);
  const [isSidebarActiveState, setIsSidebarActiveState] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const MOBILE_THRESHOLD = 1070;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();
    handleScroll();
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (currentInnerWidthState > MOBILE_THRESHOLD) {
      setIsSidebarActiveState(false);
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [currentInnerWidthState]);

  const handleScroll = () => {
    setCurrentScrollPosState(window.pageYOffset);
  };

  const handleResize = () => {
    setCurrentInnerWidthState(window.innerWidth);
  };

  return (
    <div className="App">
      <Navigation
        currentScrollPos={currentScrollPosState}
        isMobile={isMobile}
        setIsSidebarActiveState={setIsSidebarActiveState}
        isSidebarActiveState={isSidebarActiveState}
      />
      <main>
        <LandingSection />
        <HowVitalWorkSection />
        <PractitionersSection />
        <hr />
        <Comments />
        <DiscoverOurHub />
      </main>
      <Footer />
    </div>
  );
}

export default App;
