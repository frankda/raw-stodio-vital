import React from 'react';
import './discoverOurHubSection.scss';
import CreamIcon from './icon/cream.svg';
import BlogCard from './blogCard/blogCard';
import FirstPersonPhoto from './img/p1.png';
import SecondPersonPhoto from './img/p2.png';
import BannerPhoto from './img/big.png';
import Slider from 'react-slick';
// import './slicker.scss';
// import './slickerTheme.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          <BlogCard cardInfo={cardInfo} />
          <BlogCard cardInfo={cardInfo} />
          <BlogCard cardInfo={cardInfo} />
          <BlogCard cardInfo={cardInfo} />
       </div>
       <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
     </div>
    </div>
  )
}

export default DiscoverOurHub;