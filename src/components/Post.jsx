import React, { forwardRef } from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import SendIcon from '@material-ui/icons/Send';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray' />
                <InputOption Icon={CommentOutlinedIcon} title='Comment' color='gray' />
                <InputOption Icon={RepeatOutlinedIcon} title='Repost' color='gray' />
                <InputOption Icon={SendIcon} title='Send' color='gray' />
            </div>
        </div>
    )
});

export default Post