import React, {ChangeEvent} from 'react';
import {
    updateNewMessageBodyCreator,
    changeDialogMessageActionCreator,
} from "../../Redux/Dialog-reduce";
import {dialogAndMessage} from "../../Redux/state";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import { Dispatch } from 'redux';

// type DialogsPropsType = {
    // store: ReduxStoreType
    // // dialogsData: Array<dialogsData>
    // // messageData: Array<messageData>
    // dispatch: (action: ActionTypes) => void
    // newDialogMessage: string

// }

// export const DialogsContainer = (props: DialogsPropsType) => {
//     let state = props.store.getState().DialogPage
//
//     let addMessageHandler = (id: number, message: string) => {
//         props.store.dispatch(updateNewMessageBodyCreator(message))
//
//     };
//
//     const dialogsChangeHandler = (textBody: string) => {
//         props.store.dispatch(changeDialogMessageActionCreator(textBody))
//     }
//
//     return <Dialogs updateNewMessageBody={addMessageHandler} dialogsChange={dialogsChangeHandler} state={state}/>
//
// }
type MSTPropsType={
    DialogsPage:dialogAndMessage
}

type MDTPropsType={
    updateNewMessageBody:(id: number, message: string)=>void
    changeDialogMessage:(textBody:string)=>void
}
//type
export type OwnType = MSTPropsType & MDTPropsType

const mapStateToProps=(state:AppStateType):MSTPropsType=>{
    return {DialogsPage:state.DialogPage}
}

const mapDispatchToProps=(dispatch:Dispatch):MDTPropsType=>{
    return{
        updateNewMessageBody:(id: number, message: string)=>{
            dispatch(updateNewMessageBodyCreator(message))
        },
        changeDialogMessage:(textBody:string)=>{
            dispatch(changeDialogMessageActionCreator(textBody))
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer