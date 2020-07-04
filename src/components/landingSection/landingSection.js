import React from 'react';
import './landingSection.scss';
import './searchIcon';
import SearchIcon from './searchIcon';
// import SideImg from './sideImg.js';
import SideImg from './landingSection.svg';
import SocialMediaBox from '../social-media/socialMediaBox';

const LandingSection = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="landing-section">

      <div className="search-part">
        <p className="title">Find trusted practitioners that best suit your needs</p>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <div className="search-icon">
              <SearchIcon height={17} width={17} />
            </div>
            <div className="divide"></div>
            <input placeholder="Search by specialities or postcode" type="text" />
          </div>
          <button type="submit">Search pratitioners</button>
          </form>
        <a className="supplementary">Become a Practitioner</a>
      </div>

      <div className="img-part">
        {/* <SideImg width={635} height={448} /> */}
        <img src={SideImg} />
      </div>

      <div className="social-media">
        <SocialMediaBox />
      </div>
    </div>
  )
}

export default LandingSection;