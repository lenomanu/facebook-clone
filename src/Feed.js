import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import Post from './Post'
import { useState, useEffect } from 'react'
import db from './firebase'

function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot)=>{
      setPosts((snapshot.docs.map((doc)=>({ id: doc.id , data : doc.data()}))))
    })
  
  }, [])
  return (

    <div className='feed'>
        {/*StortReel*/}
        <StoryReel/>
        {/*MessageSender*/}
        <MessageSender/>

      {
        posts.map((post)=>{
          return < Post
          key={post.id}
          message = {post.data.message}
          profilePic = {post.data.profilePic}
          username = {post.data.username}
          image = {post.data.image}
          timestamp = {post.data.timestamp}
          />
        })
      }

      
    </div>
  )
}

export default Feed
