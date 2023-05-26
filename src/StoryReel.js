import React from 'react'
import Story from './Story'
import'./StoryReel.css'

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story 
      title= 'Emmanuel Mutai' 
      profileSrc = 'https://picsum.photos/id/231/200/302'
      image = 'https://picsum.photos/id/217/200/340'
      />
        <Story 
      title= 'Daniel Kiplagat' 
      profileSrc = 'https://picsum.photos/id/227/200/440'
      image = 'https://picsum.photos/id/232/200/320'
      />
        <Story 
      title= 'Kigen Toony' 
      profileSrc = 'https://picsum.photos/id/235/200/390'
      image = 'https://picsum.photos/id/234/200/360'
      />
        <Story 
      title= 'Collins Logombe' 
      profileSrc = 'https://picsum.photos/id/236/200/360'
      image = 'https://picsum.photos/id/137/200/310'
      />
      <Story 
      title= 'Ian Kiprop' 
      profileSrc = 'https://picsum.photos/id/131/200/302'
      image = 'https://picsum.photos/id/287/200/340'
      />
     
    </div>
  )
}

export default StoryReel
