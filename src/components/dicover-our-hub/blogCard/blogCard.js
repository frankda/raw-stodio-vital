import React from 'react';
import './blogCard.scss';

export default (props) => {
  return (
    <div className="blog-card">

      <div className="blog-card__header">
        <div className="blog-card__header__image">
          <img src={props.cardInfo.firstPhoto} alt='' />
          <img src={props.cardInfo.secondPhoto} alt='' />
        </div>
        <div className="blog-card__header__text">
          <p>Cheryl Le Roux & Jacqui Fahey</p>
          <span>23rd oct </span><a href="/">&nbsp;Case Studies</a>
          <a href="/" className="tag">ENHANCED</a>
        </div>
      </div>

      <div className="blog-card__content">
        <p className="blog-card__content__title">Understanding</p>
        <p className="blog-card__content__description">Determining the best available evidence to support clinical treatment decisions relies on understanding the different types of research and how to critically appraise each one.</p>
        <img src={props.cardInfo.bannerPhoto} alt='' />
      </div>
    </div>
  )
}