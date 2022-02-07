import axios from "axios";

const instatce = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0',
	headers: {"API-KEY": "ff93b3ea-e4dd-4fd8-99af-ef77ec15da18"},
})
export const usersAPI = {
	getUsers(currentPage: number, pageSize: number) {
		return instatce.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	unfollowFriend(id:number){
		return instatce.delete<any>(`/follow/${id}`).then(response=>response.data)
	},
	followFriend(id:number){
		return instatce.post<any>(`/follow/${id}`,{},).then((response=>response.data))
	}

}


