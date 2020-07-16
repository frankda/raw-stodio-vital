import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './discoverOurHubSection.scss';
import CreamIcon from './icon/cream.svg';
import BlogCard from './blogCard/blogCard';
import FirstPersonPhoto from './img/p1.png';
import SecondPersonPhoto from './img/p2.png';
import BannerPhoto from './img/big.png';
import Slider from 'react-slick';
// import './slicker.scss';
// import './slickerTheme.scss';

export const DiscoverOurHub = () => {
  const cardInfo = {
    firstPhoto: FirstPersonPhoto,
    secondPhoto: SecondPersonPhoto,
    bannerPhoto: BannerPhoto
  }

  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

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
        <Slider {...settings}>
          <BlogCard cardInfo={cardInfo} />
          <BlogCard cardInfo={cardInfo} />
          <BlogCard cardInfo={cardInfo} />
          <BlogCard cardInfo={cardInfo} />
        </Slider>
       </div>
     </div>
    </div>
  )
}

export default DiscoverOurHub;