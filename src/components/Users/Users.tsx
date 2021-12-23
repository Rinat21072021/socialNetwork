import React from 'react'
import styles from './Users.module.css'
import {OwnUsersType} from "./UsersContainer";
import axios from 'axios'


export class Users extends React.Component<OwnUsersType, Users> {

	componentDidMount() {
		axios.get<any>("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
			console.log(response.data.items)
			this.props.setUsers(response.data.items)
		})
	}

	render() {
		return (<div>
			{/*<button onClick={this.getUsers}>GetUsers</button>*/}
			{(this.props.users).map(u => <div key={u.id}>
			<span>
				<div>
					<img src={u.photos.large} className={styles.userPhoto}/>
				</div>

				<div>
					{u.followed
						? <button onClick={() => {
							this.props.unfollow(u.id)
						}}>Unfollow</button>
						: <button onClick={() => {
							this.props.follow(u.id)
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
}