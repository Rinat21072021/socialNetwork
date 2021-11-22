import React from 'react';
import s from "./MyPost.module.css"
import Post from "./Post/Post";
import {postsType, state} from "../../../Redux/state";

type MyPostPropsType = {
    posts: Array<postsType>
    addPost: (postMessage: string) => void

}

// test
const MyPost = (props: MyPostPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        if (newPostElement.current?.value) {
            const newPost = newPostElement.current.value
            props.addPost(newPost)
        }

    }
    let postElement =
        state.ProfilePage.posts.map(p => <div>{p.message}<p>{p.likesCount}</p></div>)
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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