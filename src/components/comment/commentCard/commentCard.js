import React from 'react';
import './commentCard.scss';
import StarIcon from './Mask.svg';

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
    <div className="comment-card">
      <img className="comment-photo" src={props.image} alt=""/>
      <div className="comment-information">
        <div className="comment-rate">
          {renderStar(props.rate)}
        </div>
        <p className="comment-name">{props.name}</p>
        <p className="comment-content">{props.comment}</p>
      </div>
    </div>
  )
}