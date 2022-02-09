import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {auth} from "../../Redux/Auth-reduce";
import {AppStateType} from "../../Redux/Redux-store";


export type MapStatePropsType = {
	isAuth: boolean,
	login: string
	userId:number,
	email:string,


}



class HeaderContainer extends React.Component<any, any> {
	componentDidMount() {

		this.props.auth()
			// usersAPI.auth().then((response) => {
			// 	if (response.data.resultCode === 0) {
			// 		let {id, email, login} = response.data.data.login
			// 		this.props.setAuthUserData(id, email, login)
			// 	}
			// })
	}

	render() {

		return (
			<Header {...this.props} login={this.props.login}
					isAuth={this.props.isAuth}
			/>)
	}
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
	isAuth: state.Auth.isAuth,
	login: state.Auth.login,
	userId:state.Auth.userId,
	email:state.Auth.email,


})
export default connect(mapStateToProps, {auth})(HeaderContainer);