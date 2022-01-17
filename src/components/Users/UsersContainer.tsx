import React from 'react'
import {Users} from "./Users";
import {AppStateType} from "../../Redux/Redux-store";
import {connect} from "react-redux";
import {followAC, setCurrenPageAC, setUsersAC, setUsersTotalCountAC, StateType, unfollowAC, UserType} from "../../Redux/Users-reduce";
import {Dispatch} from "redux";

type mapStateToPropsType = {
	users: Array<UserType>
	pageSize:number
	totalUsersCount: number
	currentPage:number
}
type MapDispatchToPropsType = {
	follow: (userID: number) => void
	unfollow: (userID: number) => void
	setUsers: (user: Array<UserType>) => void
	setCurrentPage:(pageNumber:number) =>void
	setTotalUsersCount:(totalCount:number)=>void
}
export type OwnUsersType = mapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		users: state.UsersPage.users,
		pageSize: state.UsersPage.pageSize,
		totalUsersCount: state.UsersPage.totalUsersCount,
		currentPage: state.UsersPage.currentPage
	}
}
const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
	return {
		follow: (userID: number) => {
			dispatch(followAC(userID))
		},
		unfollow: (userID: number) => {
			dispatch(unfollowAC(userID))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		setCurrentPage:(pageNumber:number)=>{
			dispatch(setCurrenPageAC(pageNumber))
		},
		setTotalUsersCount:(totalCount:number)=>{
			dispatch(setUsersTotalCountAC(totalCount))
		},

	}
}
const UsersContainer = connect(mapStateToProps, MapDispatchToProps)(Users)
export default UsersContainer;
