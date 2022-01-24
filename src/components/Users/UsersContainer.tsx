import React from 'react'
import {AppStateType} from "../../Redux/Redux-store";
import {connect} from "react-redux";
import {
	follow,
	setCurrenPage,
	seToggleIsFetching,
	setUsers,
	setUsersTotalCount,
	StateType,
	unfollow,
	UserType
} from "../../Redux/Users-reduce";

import axios from "axios";
import {Users} from "./Users";

import {Preloader} from "../../common/Preloader/Preloader";

type mapStateToPropsType = {
	users: Array<UserType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: Boolean

}
type MapDispatchToPropsType = {
	follow: (userID: number) => void
	unfollow: (userID: number) => void
	setUsers: (user: Array<UserType>) => void
	setCurrentPage: (pageNumber: number) => void
	setTotalUsersCount: (totalCount: number) => void
	seToggleIsFetching: (isFetching: boolean) => void
}
export type OwnUsersType = mapStateToPropsType & MapDispatchToPropsType
const instatce = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0',
	headers: {"API-KEY": "ff93b3ea-e4dd-4fd8-99af-ef77ec15da18"}
})

export class UsersContainer extends React.Component<OwnUsersType, StateType> {
	componentDidMount() {
		this.props.seToggleIsFetching(true)
		axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then((response) => {
				this.props.seToggleIsFetching(false)
				this.props.setUsers(response.data.items)
				this.props.setCurrentPage(response.data.totalCount)
			})
	}

	onCurrentPage = (page: number) => {
		console.log(page)
		console.log(this.props.currentPage)
		console.log(this.props.pageSize)
		this.props.setCurrentPage(page);
		this.props.seToggleIsFetching(true)
		instatce.get<any>(`/users?page=${page}&count=${this.props.pageSize}`)
			.then((response) => {
				this.props.seToggleIsFetching(false)
				this.props.setUsers(response.data.items)
				console.log(response.data)
			})
	}

	render() {


		return <>
			{this.props.isFetching && <Preloader/>}
			<Users users={this.props.users}
				   follow={this.props.follow}
				   onCurrentPage={this.onCurrentPage}
				   currentPage={this.props.currentPage}
				   pageSize={this.props.pageSize}
				   unfollow={this.props.unfollow}
				   totalUsersCount={this.props.totalUsersCount}/>
		</>


	}
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		users: state.UsersPage.users,
		pageSize: state.UsersPage.pageSize,
		totalUsersCount: state.UsersPage.totalUsersCount,
		currentPage: state.UsersPage.currentPage,
		isFetching: state.UsersPage.isFetching
	}
}
// const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
// 	return {
// 		follow: (userID: number) => {
// 			dispatch(followAC(userID))
// 		},
// 		unfollow: (userID: number) => {
// 			dispatch(unfollowAC(userID))
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsersAC(users))
// 		},
// 		setCurrentPage:(pageNumber:number)=>{
// 			dispatch(setCurrenPageAC(pageNumber))
// 		},
// 		setTotalUsersCount:(totalCount:number)=>{
// 			dispatch(setUsersTotalCountAC(totalCount))
// 		},
// 		seToggleIsFetching:(isFetching:boolean)=>{
// 			dispatch(seToggleIsFetchingAC(isFetching))
// 		}
// 	}
// }

export default connect(mapStateToProps, {
	follow: follow,
	unfollow: unfollow,
	setUsers: setUsers,
	setCurrentPage: setCurrenPage,
	setTotalUsersCount: setUsersTotalCount,
	seToggleIsFetching: seToggleIsFetching,
})(UsersContainer);
