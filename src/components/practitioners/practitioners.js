import React from 'react';
import './practitioners.scss';
import StartIcon from './icon/practitioners.svg';
import LeftArrow from './icon/leftArrow.svg';
import RightArrow from './icon/rightArrow.svg';
import PractitionerCard from './card/practitionerCard';
import EmmaPhoto from './img/emma.png';
import NathanPhoto from './img/nathan.png';
import BrookPhoto from './img/brook.png';

const PractitionersSection = () => {
  const practitionersTypes = [
    'All',
    'Naturopath',
    'Chiropracter',
    'Nutritionist',
    'Physiotherapist'
  ]

  const practitioners = [
    {
      image: EmmaPhoto,
      name: 'Emma Zappia Chiropractor',
      type: 'Chiropracter',
      rate: 5
    },
    {
      image: NathanPhoto,
      name: 'Nathan Warren',
      type: 'Chiropracter',
      rate: 5
    },
    {
      image: BrookPhoto,
      name: 'Brooklyn Richards',
      type: 'Chiropracter',
      rate: 5
    },
    {
      image: EmmaPhoto,
      name: 'Aubrey Nguyen',
      type: 'Chiropracter',
      rate: 5
    }
  ]

  return (
    <div className="practitioners-section">
      <div className="practitioners-container">
        
        <div className="section-icon">
          <img src={StartIcon} alt=""/>
        </div>
        <p className="practitioners-title">Some of our best practitioners in your area</p>
        <nav className="practitioners-types">
          {practitionersTypes.map((practitioner, i) => {
            return (
              <React.Fragment key={i}>
                {practitioner === 'All'
                ? <React.Fragment>
                    <input type="radio" name='practitioner' id={practitioner + '-radio'} defaultChecked />
                    <label htmlFor={practitioner + '-radio'}>{practitioner}</label>
                  </React.Fragment>
                : <React.Fragment>
                    <input type="radio" name='practitioner' id={practitioner + '-radio'} />
                    <label htmlFor={practitioner + '-radio'}>{practitioner}</label>
                  </React.Fragment>
                }
              </React.Fragment>
            )
          })}
        </nav>

        <div className="practitioners-presentation">

          <img className="img-button" src={LeftArrow} alt=""/>
          <div className="presentation-board">
            {practitioners.map((practitioner, i) => {
              return (
                <div key={i}  className="practitioners-card">
                  <PractitionerCard image={practitioner.image} name={practitioner.name} type={practitioner.type} rate={practitioner.rate} />
                </div>
              )
            })}
          </div>
          <img className="img-button" src={RightArrow} alt=""/>

        </div>

        <button className="view-all">View All</button>
      </div>
    </div>
  )
}

export default PractitionersSection;