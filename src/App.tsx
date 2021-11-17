import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import {stateType} from "./Redux/state";


/*export type massageDataType={
    id:number
    message:string
}
export type dialogsDataType={
    id: number
    name:string
}*/
type AppType={
  state:stateType
}

const App = (props:AppType) => {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/Profile'} render={ ()=> <Profile ProfilePage={props.state.ProfilePage}/> } />
                    <Route path={'/Dialogs'} render={ ()=> <Dialogs dialogsData={props.state.DialogPage.dialogsData} messageData={props.state.DialogPage.messageData}/>}/>
                    <Route path={'/News'} component={News} />
                    <Route path={'/Music'} component={Music} />
                    <Route path={'/Setting'} component={Setting} />
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
