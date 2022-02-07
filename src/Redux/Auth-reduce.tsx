


const SET_USER_DATA = 'SET_USER_DATA'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'


export type AuthUsersType =
	| ReturnType<typeof setAuthUserData>


type LocationType = {
	city: string
	country: string

}
// export type UserType = {
// 	id: number
// 	photos: {
//
// 		small: string
// 		large: string
// 	}
// 	followed: boolean
// 	name: string
// 	status: string
// 	// location: LocationType
//
// }
export type StateType = {
	userId: number
	email:string
	login: string
	isAuth:boolean
}

const initialState: StateType = {
	userId: 0 ,
	email:'null',
	login:'null',
	isAuth: false
}

export const authReduce = (state: StateType = initialState, action: AuthUsersType): StateType => {

	switch (action.type) {
		case SET_USER_DATA:
			return {...state, ...action.data, isAuth: true}

		default: {
			return state
		}
	}
}

export const setAuthUserData = (userId:number,email:string, login:string) => {
	return {
		type: SET_USER_DATA,
		data:{userId,email,login}
	} as const

}