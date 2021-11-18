import React from 'react';
import s from "./MyPost.module.css"
import Post from "./Post/Post";
import {postsType, state} from "../../../Redux/state";

type MyPostPropsType={
    posts:Array<postsType>
}

// test
const MyPost=(props: MyPostPropsType)=> {

let newPostElement = React.createRef();

const addPost=()=>{
    alert(newPostElement)
}
    let postElement=
        state.ProfilePage.posts.map(p=><div>{p.message}<p>{p.likesCount}</p></div>)
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ></textarea> // добавить в атрибют ref let newPostElement
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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