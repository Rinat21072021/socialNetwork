import React from 'react';
import {AddPostActionCreator, newPostChangeActionCreator} from "../../../Redux/Profile-reduce";
import { TypeStore} from "../../../Redux/state";
import MyPost from "./MyPost";
import {ReduxStoreType} from "../../../Redux/Redux-store";


type MyPostPropsType = {
    store:ReduxStoreType

}

const MyPostContainer = (props: MyPostPropsType) => {

    const addPostHandler = (message:string) => {
        props.store.dispatch(AddPostActionCreator(message))
    }


    const newPostChangeHandler = (newText: string) => {
        props.store.dispatch(newPostChangeActionCreator(newText))
    }
    return <MyPost message={props.store.getState().ProfilePage.postMessage}
                   onAddPostHandler={addPostHandler}
                   newPostChange={newPostChangeHandler}
                   posts={props.store.getState().ProfilePage.posts}/>
}
export default MyPostContainer;