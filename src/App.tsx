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
import Friends from "./components/Friends/Friends";
import {ActionTypes, stateType} from "./Redux/state";


/*export type massageDataType={
    id:number
    message:string
}
export type dialogsDataType={
    id: number
    name:string
}*/
type AppType = {
    state: stateType
    //addPost: (postMessage: string) => void
    //changeNewText:(newText: string)=>void
    changeDialogMessage: (newMessage: string)=>void
    //addDialogMessage:()=>void
    dispatch:(action:ActionTypes)=>void



}

const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/Profile'} render={() => <Profile ProfilePage={props.state.ProfilePage}

                                                                    dispatch={props.dispatch.bind(props.state)}
                                                                    post={props.state.ProfilePage.posts}
                                                                    message={props.state.ProfilePage.postMessage}
                                                                    //changeNewTextCallback={props.changeNewText}
                        />}/>

                    <Route path={'/Dialogs'} render={() => <Dialogs dialogsData={props.state.DialogPage.dialogsData}
                                                                    messageData={props.state.DialogPage.messageData}
                                                                    newDialogMessage = {props.state.DialogPage.newDialogMessage}
                                                                    changeDialogMessage = {props.changeDialogMessage}
                                                                    dispatch = {props.dispatch.bind(props.state)}/>}/>
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
