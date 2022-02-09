import {ActionTypes, postsType} from "./state";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {ActionsType} from "./Users-reduce";

const addPost = 'ADD-POST';
const changeNewText = 'CHANGE-NEW-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


export type ProfilePageType = {
	posts: Array<postsType>
	postMessage: string
	profile:null | {}

}
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
	profile:null,

}

export const ProfileReduce = (state: ProfilePageType = initialState, action: ActionTypes) => {

	switch (action.type) {

		case addPost: {
			let id = new Date()
			const newPost = {
				id: id.getTime(),
				message: state.postMessage,
				likesCount: 0,
			}
			console.log(state)
			return {...state, posts: [...state.posts, newPost], postMessage: ''}

			//      stateCopy.postMessage = ''
			// return stateCopy
		}
		case changeNewText: {
			return {...state, postMessage: action.newText}
			// stateCopy.postMessage = action.newText;
			// return stateCopy
		}
		case SET_USER_PROFILE:
			return {...state, profile:action.profile}
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
export const setUserProfile = (profile:any) => {
	return {
		type: SET_USER_PROFILE, profile
	} as const
}
export const newPostChangeActionCreator = (newText: string) => {
	return {
		type: changeNewText,
		newText: newText
	} as const
}

//DAL
export const UserProfile=(userId:number)=>{
	return (dispatch:Dispatch<ActionTypes>)=>{
		usersAPI.UserProfile(userId).then((data) => {
			dispatch(setUserProfile(data))
		})
	}
}