import {ActionTypes, ProfilePageType} from "./state";

const addPost = 'ADD-POST';
const changeNewText = 'CHANGE-NEW-TEXT';

//
// type ActionsType =
//     | ReturnType<typeof AddPostActionCreator>
//     | ReturnType<typeof newPostChangeActionCreator>
const initialState = {
    postMessage: '',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'Hi, message', likesCount: 20},
        {id: 3, message: 'Hi, Serg', likesCount: 30},
        {id: 4, message: 'Hi, Nikola', likesCount: 10}],

}

export const ProfileReduce = (state: ProfilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case addPost: {
            const newPost = {
                id: 5,
                message: state.postMessage,
                likesCount: 0,
            }
            let stateCopy = {...state,posts:[...state.posts, newPost]}
                 stateCopy.postMessage = ''
            return stateCopy
        }
        case changeNewText: {
            let stateCopy = {...state}
            stateCopy.postMessage = action.newText;
            return stateCopy
        }
        default: {
            return state
        }
    }
}
export const AddPostActionCreator = () => {
    return {
        type: addPost,
    } as const
}
export const newPostChangeActionCreator = (newText: string) => {
    return {
        type: changeNewText,
        newText: newText
    } as const
}