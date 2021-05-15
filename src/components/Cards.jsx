import React from 'react'
import '../styles/Cards.scss'

import Stories from './Stories'
import Card from './Card'
import comments from '../data/comments'

export default function Cards() {
  const baseUrl = 'https://picsum.photos/800/'

  return(
    <div className="cards">
      <Stories/>
      <Card
        accountName="rafagrassetti"
        storyBorder={true}
        image={baseUrl + '900'}
        comments={comments[0]}
        likedByText="dadatlacak"
        likedByNumber={89}
        hours={16}
      />
      <Card
        accountName="mapvault"
        image={baseUrl}
        comments={comments[1]}
        likedByText="therealadamsavage"
        likedByNumber={47}
        hours={12}
      />
      <Card
        accountName="dadatlacak"
        storyBorder={true}
        image={baseUrl + '1000'}
        comments={comments[2]}
        likedByText="mapvault"
        likedByNumber={90}
        hours={4}
      />
    </div>
  )
}
