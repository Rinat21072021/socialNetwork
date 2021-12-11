import React from 'react';
import s from "./Profile.module.css"
import MyPost from "./My post/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {TypeStore} from "../../Redux/state";
import MyPostContainer from './My post/MyPostContainer';
import {ReduxStoreType} from "../../Redux/Redux-store";

type ProfilePropsType = {
    // ProfilePage: ProfilePageType
    // post: Array<postsType>
    // dispatch: (action: ActionTypes) => void
    // message: string
    store:ReduxStoreType

}


const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer store={props.store}/>
            {/*<MyPost post={props.post}*/}
            {/*        posts={props.ProfilePage.posts}*/}
            {/*        dispatch={props.dispatch}*/}
            {/*        message={props.ProfilePage.postMessage}*/}


        </div>
    )
}
export default Profile;