import React from 'react';
import s from "./Profile.module.css"
import MyPost from "./My post/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType } from "../../Redux/state";
type ProfilePropsType={
    ProfilePage:ProfilePageType
    addPost: (postMessage:string) => void
}



const Profile = (props:ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={props.ProfilePage.posts}
                    addPost={props.addPost}
            />
        </div>
    )
}
export default Profile;