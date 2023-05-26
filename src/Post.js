import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import SendIcon from '@mui/icons-material/Send';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Post({profilePic, image, username, timestamp, message}) {
  return (
    <div className='post'>
        <div className="post__top">
            <Avatar src={profilePic} className = 'post__avatar'/>
            <div className="post__topInfo">
                <h3>{username}</h3>
                <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>

        </div>
        <div className="post__bottom">
            {message}
        </div>
        <div className='post__image'>
            <img src={image} alt="" />
        </div>
        <div className="post__options">
            <div className="post__option">
                <ThumbUpOffAltIcon/>
                <p>Like</p>
            </div>
            <div className="post__option">
                <ChatBubbleOutlineIcon/>
                <p>Comment</p>
            </div>
            <div className="post__option">
                <SendIcon/>
                <p>Send</p>
            </div>
            <div className="post__option">
                <MoreVertIcon/>
            </div>
        </div>
    </div>
  )
}

export default Post