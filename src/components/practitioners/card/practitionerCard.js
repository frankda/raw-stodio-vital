import React from 'react';
import StarIcon from './star.svg';
import './practitionerCard.scss';

export default (props) => {
  const renderStar = (num) => {
    const keys = [];
    for (let i = 0; i < num; i ++) {
      keys.push(i);
    }
    return (
      <React.Fragment>
          {keys.map((key) => {
            return (
              <img key={key} src={StarIcon} alt="√" />
            )
          } )}
      </React.Fragment>
    )
}

  return (
    <div className="card">
      <img src={props.image} alt=""/>
      <div className="card-information">
        <p className="card-title">{props.name}</p>
        <p className="card-description">{props.type}</p>
        <div className="card-rate">
          {renderStar(props.rate)}
        </div>
      </div>
      <button>Book now</button>
    </div>
  )
}