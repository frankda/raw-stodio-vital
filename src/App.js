import React from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import './fonts/Sofia Pro Regular.ttf';
import LandingSection from './components/landingSection/landingSection';
import HowVitalWorkSection from './components/how-vital-work/howVitalWorkSection';
import PractitionersSection from './components/practitioners/practitioners';
import Comments from './components/comment/comments';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <LandingSection />
        <HowVitalWorkSection />
        <PractitionersSection />
        <hr />
        <Comments />
      </main>
    </div>
  );
}

export default App;
