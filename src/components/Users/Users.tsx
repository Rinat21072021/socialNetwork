import React from 'react'
import styles from './Users.module.css'
import {OwnUsersType} from "./UsersContainer";
import axios from 'axios'


export class Users extends React.Component<OwnUsersType, Users> {

	componentDidMount() {
		axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}` )
			.then((response) => {
			console.log(response.data.items)
			this.props.setUsers(response.data.items)
				this.props.setCurrentPage(response.data.totalCount)

		})
	}

	render() {
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
		let pages = []
		for (let i = 1; i<=pagesCount;i++){
			pages.push(i)
		}
		let onCurrentPage=(page:number)=>{
			this.props.setCurrentPage(page);
			axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}` )
				.then((response) => {
					console.log(response.data.items)
					this.props.setUsers(response.data.items)

				})

		}

		return (<div>
			<div>

				{pages.map(page =>{
					let ActivePageClass = this.props.currentPage === page ? styles.selectedPage : ''
						return <span

							className= {ActivePageClass}
							onClick={()=>onCurrentPage(page)}>{page}</span>
				}
					)}

			</div>
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