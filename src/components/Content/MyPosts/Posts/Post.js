import React, { useState } from 'react' 
import Class from './Post.module.css'


const Post = (props) => {
    let like = 1;
    return(
        
        <div className={Class.item}> 
            <img src='https://i.pinimg.com/originals/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg'/>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post