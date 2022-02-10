import React from 'react';
import {StateType, UserType} from "../../Redux/Users-reduce";
import Profile from "./Profile";
import {connect} from 'react-redux';
import {  UserProfile} from "../../Redux/Profile-reduce";
import {AppStateType} from "../../Redux/Redux-store";
import {ProfilePageType} from "../../Redux/state";
import {withRouter} from "react-router-dom";

type mapStateToPropsType = {
	profile: ProfilePageType

}


class ProfileContainer extends React.Component<any, StateType> {

	componentDidMount() {

		let userId = this.props.match.params.userId
		console.log(this.props)
		console.log(this.props.match.params.userId)
		if (!userId) {
			userId = 2
		}
		this.props.UserProfile(userId)
	}

	render() {
		return (
			<div>

				<Profile {...this.props} profile={this.props.profile}/>

			</div>
		)
	}
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
	profile: state.ProfilePage.profile
})
const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {UserProfile})(WithUrlDataContainerComponent);