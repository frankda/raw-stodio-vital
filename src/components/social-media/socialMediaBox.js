import React, {useState} from 'react';
import './socialMediaBox.scss';
import GoogleIcon from './icons/google-icon.svg';
import FacebookIcon from './icons/facebook-icon.svg';
import StarIcon from './icons/star-icon.svg'

export default () => {
  const [mediaPlatforms, setMediaPlatforms] = useState(
    [
      {
        name: 'Google',
        logo: GoogleIcon,
        stars: 5,
        score: 4.9,
        reviews: 325,
        reviewLink: '/'
      },
      {
        name: 'Facebook',
        logo: FacebookIcon,
        stars: 5,
        score: 4.9,
        reviews: 325,
        reviewLink: '/'
      }
    ]
  )

  const renderStar = (num) => {
      const keys = [];
      for (let i = 0; i < num; i ++) {
        keys.push(i);
      }
      return (
        <React.Fragment>
            {keys.map((key) => {
              return (
                <img key={key} src={StarIcon} />
              )
            } )}
        </React.Fragment>
      )
  }

  return (
    <div className="social-media-box">
      {mediaPlatforms.map((media, i) => {
        return (
          <div key={i} className="media">
            <img src={media.logo} alt={media.name} className="logo"/>
            <div className="stars">
              {renderStar(media.stars)}
            </div>
            <div className="reviews">
              <a href={media.reviewLink}>
                <p className="score">{media.score}</p>
                <p> - {media.reviews} </p>
                <p className="light-review-text">reviews</p>
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}