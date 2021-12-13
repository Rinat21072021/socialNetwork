import React, {ChangeEvent} from 'react';
import s from "./MyPost.module.css"
import {postsType} from "../../../Redux/state";
import {OwnType} from "./MyPostContainer";

// type MyPostPropsType = {
//     posts: Array<postsType>
//     message: string
//     onAddPostHandler: () => void
//     newPostChange: (newText: string) => void
//
// }

const MyPost = (props: OwnType) => {

    const onAddPostHandler = () => {
        props.addPost()
    }

    let postElement =
        props.posts.map(p => <div>{p.message}<p>{p.likesCount}</p></div>)

    const newPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea value={props.postMessage}
                              onChange={newPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPostHandler}>Add post</button>
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