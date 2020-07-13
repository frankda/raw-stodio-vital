import React, {useState, useEffect} from 'react';
import './practitioners.scss';
import StartIcon from './icon/practitioners.svg';
import LeftArrow from './icon/leftArrow.svg';
import RightArrow from './icon/rightArrow.svg';
import PractitionerCard from './card/practitionerCard';
import EmmaPhoto from './img/emma.png';
import NathanPhoto from './img/nathan.png';
import BrookPhoto from './img/brook.png';

const PractitionersSection = () => {
  const [practitioners, setPractitioners] = useState([
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
  ])

  // useEffect(() => {
  // }, [practitioners])

  const practitionersTypes = [
    'All',
    'Naturopath',
    'Chiropracter',
    'Nutritionist',
    'Physiotherapist'
  ]

  const shiftLeft = (arr) => {
    const leftShifted = Array.from(arr);
    let firstElement = leftShifted.shift();
    leftShifted.push(firstElement);
    setPractitioners(leftShifted);
  }

  const shiftRight = (arr) => {
    const rightShifted = Array.from(arr);
    let lastElement = rightShifted.pop();
    rightShifted.unshift(lastElement);
    setPractitioners(rightShifted);
  }

  const renderCard = () => {
    return (
      <React.Fragment>
        {practitioners.map((practitioner, i) => {
          return (<div key={i}  className="practitioners-card">
            <PractitionerCard image={practitioner.image} name={practitioner.name} type={practitioner.type} rate={practitioner.rate} />
          </div>)
        })}
      </React.Fragment>
    )
  }

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

          <img className="img-button" src={LeftArrow} onClick={() => shiftLeft(practitioners)} alt=""/>
          <div className="presentation-board">
            {renderCard()}
          </div>
          <img className="img-button" src={RightArrow} onClick={() => shiftRight(practitioners)} alt=""/>

        </div>

        <button className="view-all">View All</button>
      </div>
    </div>
  )
}

export default PractitionersSection;