import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/Header/HeaderContainer";


type AppType = {
	//store: ReduxStoreType
}

const App = (props: AppType) => {
	return (
		<BrowserRouter>

			<div className={'app-wrapper'}>
				<HeaderContainer />
				<Navbar/>
				<div className={'app-wrapper-content'}>
					<Route path={'/Profile/:userId?'} render={() => <ProfileContainer/>}/>

					<Route path={'/Dialogs'} render={() => <DialogsContainer/>}/>
					<Route path={'/Users'} render={() => <UsersContainer/>}/>
					<Route path={'/News'} component={News}/>
					<Route path={'/Music'} component={Music}/>
					<Route path={'/Setting'} component={Setting}/>
					<Route path={'/Friends'} component={Friends}/>
				</div>
			</div>
		</BrowserRouter>
	)
}


export default App;
