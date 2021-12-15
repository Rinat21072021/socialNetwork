import React from 'react';
import {AddPostActionCreator, newPostChangeActionCreator} from "../../../Redux/Profile-reduce";
import {postsType} from "../../../Redux/state";
import MyPost from "./MyPost";
import {AppStateType} from "../../../Redux/Redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type mapStateToPropsType={
    posts: Array<postsType>
    postMessage: string
}

type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export type OwnType = MapDispatchToPropsType & mapStateToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.ProfilePage.posts,
        postMessage: state.ProfilePage.postMessage
    }
}

const MapDispatchToProps = (dispatch:Dispatch): MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(newPostChangeActionCreator(text))
        },
        addPost: () => {
            dispatch(AddPostActionCreator())
        },
    }
}

const MyPostContainer = connect(mapStateToProps, MapDispatchToProps)(MyPost)
export default MyPostContainer;