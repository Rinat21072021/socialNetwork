

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'


export type FollowActionsType =
	| ReturnType<typeof followAC>
	| ReturnType<typeof unfollowAC>
	| ReturnType<typeof setUsersAC>

type LocationType = {
	city: string
	country: string

}
export type UserType = {
	id: number
	photos:{
		small:string
		large:string
	}
	followed: boolean
	name: string
	status: string
	// location: LocationType

}
export type StateType = {
	users: Array<UserType>
}

const initialState: StateType = {
	users: [
		// {
		// 	id: 1,
		// 	photoUrl:'https://2x2tv.ru/upload/setka-editor/3d7/3d71249fd2a309448ee61914fa923e1d.jpg',
		// 	followed: true,
		// 	fullName: 'Rinat',
		// 	status: "Learn to React",
		// 	location: {city: 'Moscow', country: 'Russia'}
		// },
		// {
		// 	id: 2,
		// 	photoUrl:'https://2x2tv.ru/upload/setka-editor/3d7/3d71249fd2a309448ee61914fa923e1d.jpg',
		// 	followed: true,
		// 	fullName: 'Ruslan',
		// 	status: "Sponsor",
		// 	location: {city: 'Moscow', country: 'Russia'}
		// },
		// {
		// 	id: 3,
		// 	photoUrl:'https://2x2tv.ru/upload/setka-editor/3d7/3d71249fd2a309448ee61914fa923e1d.jpg',
		// 	followed: true,
		// 	fullName: 'Sergei',
		// 	status: "Learn to JS",
		// 	location: {city: 'Kazan', country: 'Russia'}
		// },
	]
}

export const UsersReduce = (state: StateType = initialState, action: FollowActionsType): StateType => {

	switch (action.type) {
		case FOLLOW:
			return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)}
		case UNFOLLOW:
			return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)}
		case SET_USERS:
			return {...state, users:  action.users}
		default: {
			return state
		}
	}
}
export const followAC = (userID: number) => {
	return {
		type: FOLLOW,
		userID
	} as const
}
export const unfollowAC = (userID: number) => {
	return {
		type: UNFOLLOW,
		userID
	} as const
}
export const setUsersAC = (users:Array<UserType> ) => {
	return {
		type: SET_USERS,
		users
	} as const
}