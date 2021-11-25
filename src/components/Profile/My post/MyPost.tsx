import React, {ChangeEvent} from 'react';
import s from "./MyPost.module.css"
import Post from "./Post/Post";
import {postsType} from "../../../Redux/state";

type MyPostPropsType = {
    posts: Array<postsType>
    addPost: (postMessage: string) => void
    post: Array<postsType>
    message: string
    changeNewTextCallback: (newText: string) => void

}

// test
const MyPost = (props: MyPostPropsType) => {

    const addPostHandler = () => {
        props.addPost(props.message)
    }

    let postElement =
        props.posts.map(p => <div>{p.message}<p>{p.likesCount}</p></div>)

    const newPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextCallback(e.currentTarget.value)
    }
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea value={props.message}
                              onChange={newPostChangeHandler}/>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                New post
            </div>
            <div>

                {postElement}

            </div>
        </div>


    )
}
export default MyPost;