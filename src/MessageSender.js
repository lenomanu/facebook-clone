import { Avatar } from '@mui/material'
import React from 'react'
import './MessageSender.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { useState } from 'react';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase/compat/app';

function MessageSender() {
  const [{user}, dispatch] = useStateValue();
  const [input, setInput] = useState('')
  const [imageUrl, setImageUrl] = useState('')
    const handleSubmit = e =>{
        e.preventDefault()
        db.collection('posts').add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          profilePic: user.photoURL,
          username: user.displayName,
          image: imageUrl,
        })
        setImageUrl('')
        setInput('')
    }
  return (
    <div className ='messageSender'>
        <div className="messageSender__top">
        <Avatar src = {user.photoURL}/>
        <form >
            <input className='messageSender__input' placeholder ={` What in in your mind ${user.displayName} ?`} value={input} onChange= {(e)=>setInput(e.target.value)}/>
            <input placeholder='Image URL (Optional)' value={imageUrl} onChange = {(e)=>setImageUrl(e.target.value)}/>
            <button type="submit" onClick={handleSubmit}>Hidden Button</button>
        </form>
        </div>
        <div className="messageSender__bottom">
          <div className="messageSender__options">
            <VideocamIcon style={{color: 'red'}}/>
            <h3>Live Video</h3>
          </div>
          <div className="messageSender__options">
            <PhotoLibraryIcon style={{color: 'green'}}/>
            <h3>Photo/Video</h3>
          </div>
          <div className="messageSender__options">
            <SentimentSatisfiedAltIcon style={{color: 'yellow'}}/>
            <h3>Feeling/Activity</h3>
          </div>

        </div>
    </div>
  )
}

export default MessageSender