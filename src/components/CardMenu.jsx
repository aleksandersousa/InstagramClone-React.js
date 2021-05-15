import React from 'react'
import '../styles/CardMenu.scss'

import { ReactComponent as Direct } from "../images/direct.svg";
import { ReactComponent as Comments } from "../images/comments.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";
import { ReactComponent as Bookmark } from "../images/bookmark.svg";

export default function CardMenu() {
  return(
    <div className="cardMenu">
      <div className="interactions">
        <Notifications className="icon" />
        <Comments className="icon" />
        <Direct className="icon" />
      </div>
      <Bookmark className="icon" />
    </div>
  )
}
