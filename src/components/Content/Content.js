import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import Class from './Content.module.css';
import MyPostsContaner from './MyPosts/MyPostsContaner';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const Content = ({profile, status, updateUserStatus, store}) => {
    if(!profile) {
        return <Preloader/>
    }

    return (
        <div className={Class.content}>
         {/*<div>
            <img src='https://www.swiftdigital.com.au/wp-content/uploads/2020/05/Frenchie1-min-1024x576-1.png'/>
         </div>*/}
         <div className={Class.profileDescription}>
             <img src={profile.photos.large}/>
             <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
         </div>
         <div className={Class.cont}>
            <MyPostsContaner store={store}/>
         </div>
          
        </div>
    )
}

export default Content