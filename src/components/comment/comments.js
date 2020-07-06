import React from 'react';
import './comments.scss';
import SocialMedia from '../social-media/socialMediaBox';
import CommentCard from './commentCard/commentCard';
import VickiPhoto from './img/vicky.png';
import ZackPhoto from './img/zack.png';
import ScarlettPhoto from './img/scarlett.png';
import DebraPhoto from './img/debra.png';
import JorgePhoto from './img/george.png';
import LilyPhoto from './img/lily.png';
import RalphPhoto from './img/ralph.png';
import AnnettePhoto from './img/annette.png';
import GregoryPhoto from './img/george.png';

const Comments = () => {
  const comments = [
    {
      image: VickiPhoto,
      rate: 5,
      name: 'Vicki Hamilton',
      comment: 'The entire process was so easy. Ordering, payment etc amazing & delivered on given date. Fast & excellent service. Job well done'
    },
    {
      image: ZackPhoto,
      rate: 5,
      name: 'Zack Pena',
      comment: 'The entire process was so easy. Ordering, payment etc amazing & delivered on given date. Fast & excellent service. Job well done'
    },
    {
      image: ScarlettPhoto,
      rate: 5,
      name: 'Scarlett Alexandern',
      comment: 'The entire process was so easy. Ordering, payment etc amazing & delivered on given date. Fast & excellent service. Job well done'
    },
    {
      image: DebraPhoto,
      rate: 5,
      name: 'Debra Henry',
      comment: 'The entire process was so easy. Ordering, payment etc amazing & delivered on given date'
    },
    {
      image: JorgePhoto,
      rate: 5,
      name: 'Jorge Edwards',
      comment: "These people are helpful, efficient have a great range it's perfect. I order 12 months supply each year when I'm in Australia. The items get delivered more quickly than I expect and never a mistake. On a few occasions I have called them"
    },
    {
      image: LilyPhoto,
      rate: 5,
      name: 'Lily Steward',
      comment: 'The entire process was so easy. Ordering, payment etc amazing & delivered on given date. Fast & excellent service. Job well done'
    },
    {
      image: RalphPhoto,
      rate: 5,
      name: 'Ralph Russell',
      comment: 'The entire process was so easy. Ordering, payment etc amazing & delivered on given date. Fast & excellent service. Job well done'
    },
    {
      image: AnnettePhoto,
      rate: 5,
      name: 'Annette Fox',
      comment: 'The entire process was so easy. Ordering, payment etc amazing & delivered on given date. Fast & excellent service. Job well done'
    },
    {
      image: GregoryPhoto,
      rate: 5,
      name: 'Gregory Richards',
      comment: 'The entire process was so easy. Ordering, payment etc amazing & delivered on given date. Fast & excellent service. Job well done'
    },
  ]
  return (
    <div className="comments-section">
      <div className="comments-container">

        <div className="comment-header">
          <div className="comment-header__title">
            <p className="title">What people say about us</p>
            <p className="description">No lies, just straight reviews from our customers.</p>
          </div>

          <div className="comment-header__social-media">
            <SocialMedia />
          </div>
        </div>

        <div className="comments-board">

          <div className="comments-board__coloumn">
            <div className="comments-board__card-container">
              <CommentCard image={comments[0].image} rate={comments[0].rate} name={comments[0].name} comment={comments[0].comment} />
            </div>
            <div className="comments-board__card-container">
              <CommentCard image={comments[1].image} rate={comments[1].rate} name={comments[1].name} comment={comments[1].comment} />
            </div>
            <div className="comments-board__card-container">
              <CommentCard image={comments[2].image} rate={comments[2].rate} name={comments[2].name} comment={comments[2].comment} />
            </div>
          </div>
          <div className="comments-board__coloumn">
            <div className="comments-board__card-container">
              <CommentCard image={comments[3].image} rate={comments[3].rate} name={comments[3].name} comment={comments[3].comment} />
            </div>
            <div className="comments-board__card-container">
              <CommentCard image={comments[4].image} rate={comments[4].rate} name={comments[4].name} comment={comments[4].comment} />
            </div>
            <div className="comments-board__card-container">
              <CommentCard image={comments[5].image} rate={comments[5].rate} name={comments[5].name} comment={comments[5].comment} />
            </div>
          </div>
          <div className="comments-board__coloumn">
            <div className="comments-board__card-container">
              <CommentCard image={comments[6].image} rate={comments[6].rate} name={comments[6].name} comment={comments[6].comment} />
            </div>
            <div className="comments-board__card-container">
              <CommentCard image={comments[7].image} rate={comments[7].rate} name={comments[7].name} comment={comments[7].comment} />
            </div>
            <div className="comments-board__card-container">
              <CommentCard image={comments[8].image} rate={comments[8].rate} name={comments[8].name} comment={comments[8].comment} />
            </div>
          </div>

          <div className="hidden-comments">
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default Comments;