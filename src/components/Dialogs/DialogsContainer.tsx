import React, {ChangeEvent} from 'react';

import s from './Dialogs.module.css'
import {
    updateNewMessageBodyCreator,
    changeDialogMessageActionCreator,
} from "../../Redux/Dialog-reduce";
import {ActionTypes, dialogsData, messageData, TypeStore} from "../../Redux/state";
import Dialogs from "./Dialogs";
import {ReduxStoreType} from "../../Redux/Redux-store";

type DialogsPropsType = {
    store: ReduxStoreType
    // dialogsData: Array<dialogsData>
    // messageData: Array<messageData>
    // dispatch: (action: ActionTypes) => void
    // newDialogMessage: string

}

export const DialogsContainer = (props: DialogsPropsType) => {
    let state = props.store.getState().DialogPage

    let addMessageHandler = (id: number, message: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(message))

    };

    const dialogsChangeHandler = (textBody: string) => {
        props.store.dispatch(changeDialogMessageActionCreator(textBody))
    }

    return <Dialogs updateNewMessageBody={addMessageHandler} dialogsChange={dialogsChangeHandler} state={state}/>

}
export default DialogsContainer