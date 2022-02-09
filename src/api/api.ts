import axios from "axios";


const instatce = axios.create({
	withCredentials: true, // настройки параметра запроса, т.е. настройки куки
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {"API-KEY": "ff93b3ea-e4dd-4fd8-99af-ef77ec15da18"},
})
export const usersAPI = {
	getUsers(currentPage: number, pageSize: number) {
		return instatce.get<any>(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	unfollowFriend(userId:number){
		return instatce.delete<any>(`follow/${userId}`).then(response=>response.data)
	},
	followFriend(userId:number){
		return instatce.post<any>(`follow/${userId}`,{},).then((response=>response.data))
	},
	auth(){
		return instatce.get<any>(`auth/me`).then((response=>response.data))
	},
	UserProfile(userId:number){
		return instatce.get<any>(`profile/${userId}`).then((response=>response.data))

	}

}


