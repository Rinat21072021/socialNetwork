import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';


type AppType = {
	//store: ReduxStoreType
}

const App = (props: AppType) => {
	return (
		<BrowserRouter>

			<div className={'app-wrapper'}>
				<Header/>
				<Navbar/>
				<div className={'app-wrapper-content'}>
					<Route path={'/Profile'} render={() => <Profile/>}/>

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
