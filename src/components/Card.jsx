import React from 'react'
import '../styles/Card.scss'

import Profile from './Profile'
import CardMenu from './CardMenu'
import Comment from './Comment'
import {ReactComponent as CardButton} from '../images/cardButton.svg'

export default function Card(props) {
  const {
    storyBorder,
    image,
    comments,
    likedByText,
    likedByNumber,
    hours
  } = props

  return(
    <div className="card">
      <header>
        <Profile iconSize="medium" storyBorder={storyBorder} />
        <CardButton className="cardButton" />
      </header>
      <img src={image} alt="card content  " className="cardImage" />
      <CardMenu />
      <div className="likedBy">
        <Profile iconSize="small" hideAccountName={true}/>
        <span>
          Liked by <strong>{likedByText}</strong> and <strong>{likedByNumber} others</strong>
        </span>
      </div>
      <div className="comments">
        {comments.map(comment => {
          return(
            <Comment key={comment.id} accountName={comment.user} comment={comment.text}/>
          )
        })}
      </div>
      <div className="timePosted">{hours} HOURS AGO</div>
      <div className="addComment">
        <div className="commentText">Add a comment...</div>
        <a href='/' className="postText">POST</a>
      </div>
    </div>
  )
}
