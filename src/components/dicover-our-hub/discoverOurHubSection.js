import React from 'react';
import './discoverOurHubSection.scss';
import CreamIcon from './icon/cream.svg';
import BlogCard from './blogCard/blogCard';
import FirstPersonPhoto from './img/p1.png';
import SecondPersonPhoto from './img/p2.png';
import BannerPhoto from './img/big.png';

export const DiscoverOurHub = () => {
  const cardInfo = {
    firstPhoto: FirstPersonPhoto,
    secondPhoto: SecondPersonPhoto,
    bannerPhoto: BannerPhoto
  }

  return (
    <div className="discover-our-hub-section">
     <div className="discover-our-hub-container">

       <div className="discover-our-hub-header">
         <div className="discover-our-hub-header__title">
          <img src={CreamIcon} alt=""/>
          <div className="text-block">
            <p className="header__title">Discover our Hub</p>
            <p className="header__description">Study online, continue your professional growth</p>
          </div>
         </div>
         <button className="discover-our-hub-header__button">View all</button>
       </div>

       <div className="discover-our-hub-blog">
        <BlogCard cardInfo={cardInfo} />
        <BlogCard cardInfo={cardInfo} />
        <BlogCard cardInfo={cardInfo} />
        <BlogCard cardInfo={cardInfo} />
       </div>
     </div>
    </div>
  )
}

export default DiscoverOurHub;