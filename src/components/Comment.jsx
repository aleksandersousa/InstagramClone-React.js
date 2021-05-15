import React from 'react'
import '../styles/Comment.scss'

import {ReactComponent as Like} from '../images/like.svg'

export default function Comment(props) {
  const { accountName, comment } = props

  return(
    <div className="commentContainer">
      <div className="textContainer">
        <span className="accountName">{accountName}</span>
        <span className="comment">{comment}</span>
      </div>
      <Like className="icon"/>
    </div>
  )
}
