import {ActionTypes, ProfilePageType} from "./state";

const addPost = 'ADD-POST';
const changeNewText = 'CHANGE-NEW-TEXT';

//
// type ActionsType =
//     | ReturnType<typeof AddPostActionCreator>
//     | ReturnType<typeof newPostChangeActionCreator>

export const ProfileReduce = (state: ProfilePageType, action: ActionTypes) => {
    switch (action.type) {
        case addPost:
            const newPost = {
                id: 5,
                message: state.postMessage,
                likesCount: 0,
            }
            state.posts.push(newPost);
            state.postMessage = ''
            return state

        case changeNewText:
            state.postMessage = action.newText;
            return state

        default:
            return state
    }
}
export const AddPostActionCreator = (newPost: string) => {
    return {
        type: addPost,
        newPost: newPost
    } as const
}
export const newPostChangeActionCreator = (newText: string) => {
    return {
        type: changeNewText,
        newText: newText
    } as const
}