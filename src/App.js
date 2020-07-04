import React from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import './fonts/Sofia Pro Regular.ttf';
import LandingSection from './components/landingSection/landingSection';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <LandingSection />
      </main>
    </div>
  );
}

export default App;
