import React from "react";
import styles from "./Users.module.css";
import {UserType} from "../../Redux/Users-reduce";
import userPhoto from "../../assets/images//users.png"
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";


export type UsersType = {
	totalUsersCount: number
	pageSize: number
	currentPage: number
	onCurrentPage: (page: number) => void
	users: Array<UserType>
	unfollow: (userID: number) => void
	follow: (userID: number) => void

}

export const Users = (props: UsersType) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	const instatce = axios.create({
		withCredentials: true,
		baseURL: 'https://social-network.samuraijs.com/api/1.0',
		headers: {"API-KEY": "ff93b3ea-e4dd-4fd8-99af-ef77ec15da18"}
	})
	return (
		<div>
			<div>

				{pages.map(page => {
						let ActivePageClass = props.currentPage === page ? styles.selectedPage : ''
						return <span

							className={ActivePageClass}
							onClick={() => props.onCurrentPage(page)}>{page}</span>
					}
				)}

			</div>
			{/*<button onClick={this.getUsers}>GetUsers</button>*/}
			{(props.users).map(u => <div key={u.id}>
			<span>
				<div>
					<NavLink to={`/profile/${u.id}`}>
					 <img src={u.photos.small !== null ? u.photos.small : userPhoto}
						  className={styles.userPhoto}/>
						</NavLink>
				</div>

				<div>
					{u.followed
						? <button onClick={() => {
							usersAPI.unfollowFriend(u.id)
								.then(data => {
									if (data.resultCode === 0) {
										props.unfollow(u.id)
									}
								})
						}}>Unfollow</button>

						: <button onClick={() => {
							usersAPI.followFriend(u.id).then(data => {
								if (data.resultCode === 0) {
									props.follow(u.id)
								}
							})
						}}>Follow</button>}

				</div>
			</span>

				<span>
				<span>
					<div>{u.name}</div>
					<div>{u.status}</div>
				</span>
				<span>
					<div>{'u.location.country'}</div>
					<div>{'u.location.city'}</div>
				</span>
			</span>
			</div>)}
		</div>)
}