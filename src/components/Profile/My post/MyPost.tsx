import React, {ChangeEvent} from 'react';
import s from "./MyPost.module.css"
import {postsType} from "../../../Redux/state";

type MyPostPropsType = {
    posts: Array<postsType>
    message: string
    onAddPostHandler: (message: string) => void
    newPostChange: (newText: string) => void

}

const MyPost = (props: MyPostPropsType) => {

    const onAddPostHandler = () => {
        props.onAddPostHandler(props.message)
    }

    let postElement =
        props.posts.map(p => <div>{p.message}<p>{p.likesCount}</p></div>)

    const newPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.newPostChange(e.currentTarget.value)
    }
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea value={props.message}
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