import React from 'react';
import s from "./Profile.module.css"
import MyPost from "./My post/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postsType, ProfilePageType} from "../../Redux/state";

type ProfilePropsType = {
    ProfilePage: ProfilePageType
    post: Array<postsType>
    addPost: (postMessage: string) => void
    message:string
    changeNewTextCallback:(newText:string)=>void
}


const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPost post={props.post}
                    posts={props.ProfilePage.posts}
                    addPost={props.addPost}
                    message={props.ProfilePage.postMessage}
                    changeNewTextCallback={props.changeNewTextCallback}
            />
        </div>
    )
}
export default Profile;