import React from 'react'
import {Users} from "./Users";
import {AppStateType} from "../../Redux/Redux-store";
import {connect} from "react-redux";
import {followAC, setUsersAC, StateType, unfollowAC, UserType} from "../../Redux/Users-reduce";
import {Dispatch} from "redux";

type mapStateToPropsType = {
	users: Array<UserType>
}
type MapDispatchToPropsType = {
	follow: (userID: number) => void
	unfollow: (userID: number) => void
	setUsers: (user: Array<UserType>) => void
}
export type OwnUsersType = mapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		users: state.UsersPage.users
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
		}

	}
}
const UsersContainer = connect(mapStateToProps, MapDispatchToProps)(Users)
export default UsersContainer;
