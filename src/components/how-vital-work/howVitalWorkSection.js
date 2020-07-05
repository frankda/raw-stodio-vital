import React from 'react';
import './howVitalWorkSection.scss';
import SearchImage from './img/1.search.svg';
import BookImage from './img/2.book.svg';
import TreatmentImage from './img/3.final.svg';
import SideBackGround from './img/SideBackGround.svg';

const HowVitalWorkSection = () => {
  return (
    <div className="how-vital-work-section">
      <div className="how-vital-work-container">
        
        <p className="section-title">How vital.ly works?</p>
        <p className="section-description">With 5,000+ Health Professionals across 120 specialisations, Vital.ly is the number one health and wellness site in Australia </p>

        <div className="process">

          <div className="process-step">
            <img src={SearchImage} alt="Search"/>
            <p className="process-step-title">1. Search</p>
            <p className="process-step-description">From our 5000+ Australian practitionners accross [145] specialties.</p>
          </div>

          <div className="process-step">
            <img src={BookImage} alt="BookImage"/>
            <p className="process-step-title">2. Connect and book</p>
            <p className="process-step-description">Book the best health professional for you in your local area, or remotely via an online consultation.</p>
          </div>

          <div className="process-step">
            <img src={TreatmentImage} alt="TreatmentImage"/>
            <p className="process-step-title">3. Get your treatment</p>
            <p className="process-step-description">Get your treatments delivered straight to your doorstep in 1 business day.</p>
          </div>

        </div>

        <div className="side-background">
          <img src={SideBackGround} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HowVitalWorkSection;