import React from 'react'
import {AppStateType} from "../../Redux/Redux-store";
import {connect} from "react-redux";
import {
	follow,
	setCurrenPage,
	seToggleIsFetching, seToggleIsFollowing,
	setUsers,
	setUsersTotalCount,
	StateType,
	unfollow,
	UserType
} from "../../Redux/Users-reduce";

import {Users} from "./Users";

import {Preloader} from "../../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


type mapStateToPropsType = {
	users: Array<UserType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress:[]

}
type MapDispatchToPropsType = {
	follow: (userID: number) => void
	unfollow: (userID: number) => void
	setUsers: (user: Array<UserType>) => void
	setCurrentPage: (pageNumber: number) => void
	setTotalUsersCount: (totalCount: number) => void
	seToggleIsFetching: (isFetching: boolean) => void
	seToggleIsFollowing: (isFetching: boolean,userID:number) => void
}
export type OwnUsersType = mapStateToPropsType & MapDispatchToPropsType


export class UsersContainer extends React.Component<OwnUsersType, StateType> {
	componentDidMount() {
		this.props.seToggleIsFetching(true)
		usersAPI.getUsers(this.props.currentPage,this.props.pageSize)
			.then((data) => {
				this.props.seToggleIsFetching(false)
				this.props.setUsers(data.items)
				this.props.setCurrentPage(data.totalCount)
			})
	}

	onCurrentPage = (page: number) => {
		console.log(page)
		console.log(this.props.currentPage)
		console.log(this.props.pageSize)
		this.props.setCurrentPage(page);
		this.props.seToggleIsFetching(true)
		usersAPI.getUsers(page,this.props.pageSize)
			.then((data) => {
				this.props.seToggleIsFetching(false)
				this.props.setUsers(data.items)
				console.log(data)
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
				   totalUsersCount={this.props.totalUsersCount}
				   followingInProgress={this.props.followingInProgress}
				   seToggleIsFollowing={this.props.seToggleIsFollowing}
			/>
		</>


	}
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		users: state.UsersPage.users,
		pageSize: state.UsersPage.pageSize,
		totalUsersCount: state.UsersPage.totalUsersCount,
		currentPage: state.UsersPage.currentPage,
		isFetching: state.UsersPage.isFetching,
		followingInProgress: state.UsersPage.followingInProgress
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
	seToggleIsFollowing:seToggleIsFollowing
})(UsersContainer);
