import React from 'react'
import '../styles/Suggestions.scss'

import Profile from './Profile'
import instagramIcon from '../images/instagramIcon.png'

export default function Suggestions() {
  return(
    <div className="suggestions">
      <div className="titleContainer">
        <div className="title">Suggestions For You</div>
        <a href="/">See All</a>
      </div>

      <Profile 
        username="instagram"
        caption="Instagram official account" 
        urlText="Follow" 
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
        image={instagramIcon}
      />
      
      <Profile 
        caption="Instagram recommendation" 
        urlText="Follow" 
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      
      <Profile 
        caption="Instagram recommendation" 
        urlText="Follow" 
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile 
        caption="Instagram recommendation" 
        urlText="Follow" 
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
    </div>
  )
}
