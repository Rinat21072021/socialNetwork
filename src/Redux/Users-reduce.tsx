import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'


export type ActionsType =
	 ReturnType<typeof unfollowSuccess>
	| ReturnType<typeof followSuccess>
	| ReturnType<typeof setUsers>
	| ReturnType<typeof setCurrentPage>
	| ReturnType<typeof setUsersTotalCount>
	| ReturnType<typeof seToggleIsFetching>
	| ReturnType<typeof seToggleIsFollowing>

type LocationType = {
	city: string
	country: string

}
export type UserType = {
	id: number
	photos: {

		small: string
		large: string
	}
	followed: boolean
	name: string
	status: string
	// location: LocationType

}
export type StateType = {
	users: Array<UserType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: []
}

const initialState: StateType = {
	users: [],
	pageSize: 5,
	totalUsersCount: 20,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []

}

export const UsersReduce = (state: StateType = initialState, action: ActionsType): StateType => {

	switch (action.type) {
		case FOLLOW:
			return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)}
		case UNFOLLOW:
			return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)}
		case SET_USERS:
			return {...state, users: action.users}
		case SET_CURRENT_PAGE:
			return {...state, currentPage: action.currentPage}
		case SET_USERS_TOTAL_COUNT:
			return {...state, currentPage: action.totalCount}
		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching}
		case TOGGLE_IS_FOLLOWING:
			return {
				...state,

				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userID]
					: state.followingInProgress.filter(id => id !== action.userID)
			} as StateType
		default: {
			return state
		}
	}
}
export const followSuccess = (userID: number) => {
	return {
		type: FOLLOW,
		userID
	} as const
}
export const unfollowSuccess = (userID: number) => {
	return {
		type: UNFOLLOW,
		userID
	} as const
}
export const setUsers = (users: Array<UserType>) => {
	return {
		type: SET_USERS,
		users
	} as const
}
export const setCurrentPage = (currentPage: number) => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage
	} as const

}
export const setUsersTotalCount = (totalCount: number) => {
	return {
		type: SET_USERS_TOTAL_COUNT,
		totalCount
	} as const

}
export const seToggleIsFetching = (isFetching: boolean) => {
	return {
		type: TOGGLE_IS_FETCHING,
		isFetching
	} as const

}
export const seToggleIsFollowing = (isFetching: boolean, userID: number) => {
	return {
		type: TOGGLE_IS_FOLLOWING,
		isFetching, userID
	} as const

}

//DAL
export const getUsers = (currentPage:number, pageSize:number) => {
	return (dispatch:Dispatch<ActionsType>) => {
		dispatch(seToggleIsFetching(true))
		usersAPI.getUsers(currentPage, pageSize)
			.then((data) => {
				dispatch(seToggleIsFetching(false))
				dispatch(setUsers(data.items))
				dispatch(setCurrentPage(data.totalCount))
			})
	}
}


export const follow = (userID:number)=>{
	return (dispatch:Dispatch<ActionsType>)=>{
		dispatch(seToggleIsFollowing(true,userID))
		usersAPI.followFriend(userID).then(data => {
			if (data.resultCode === 0) {
				dispatch(followSuccess(userID))
			}
			dispatch(seToggleIsFollowing(false,userID))
		})
	}
}

export const unfollow = (userID:number)=>{
	return (dispatch:Dispatch<ActionsType>)=>{
		dispatch(seToggleIsFollowing(true,userID))
		usersAPI.unfollowFriend(userID)
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(unfollowSuccess(userID))
				}
				dispatch(seToggleIsFollowing(false,userID))
			})
	}
}