const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'


export type FollowActionsType =
	| ReturnType<typeof followAC>
	| ReturnType<typeof unfollowAC>
	| ReturnType<typeof setUsersAC>
	| ReturnType<typeof setCurrenPageAC>
	| ReturnType<typeof setUsersTotalCountAC>

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
}

const initialState: StateType = {
	users: [],
	pageSize: 5,
	totalUsersCount: 20,
	currentPage: 1,
}

export const UsersReduce = (state: StateType = initialState, action: FollowActionsType): StateType => {

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
export const setUsersAC = (users: Array<UserType>) => {
	return {
		type: SET_USERS,
		users
	} as const
}
export const setCurrenPageAC = (currentPage: number) => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage
	} as const

}
export const setUsersTotalCountAC = (totalCount: number) => {
	return {
		type: SET_USERS_TOTAL_COUNT,
		totalCount
	} as const

}