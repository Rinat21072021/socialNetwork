import React, {ChangeEvent} from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'

import {ActionTypes, dialogAndMessage, dialogsData, messageData} from "../../Redux/state";
import {OwnType} from "./DialogsContainer";

type DialogsPropsType = {
    // dialogsData: Array<dialogsData>
    // messageData: Array<messageData>
    // dispatch: (action: ActionTypes) => void
    // newDialogMessage: string

    // updateNewMessageBody: (id: number, message: string) => void
    // dialogsChange: (textBody: string) => void
    // state:dialogAndMessage

}

export const Dialogs = (props: OwnType) => {

    let addMessageHandler = (id: number, message: string) => {
        props.updateNewMessageBody(id,message)

    };

    const dialogsChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let textBody = e.currentTarget.value
        props.changeDialogMessage(textBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {props.DialogsPage.dialogsData.map(m => <p><a href='' key={m.id}>{m.name}</a></p>)}
            </div>

            <div className={s.massages}>
                {props.DialogsPage.messageData.map(m => {

                    return (
                        <div>
                            <p>{m.message}</p>
                        </div>
                    )
                })}
                <textarea
                    value={props.DialogsPage.newDialogMessage}
                    onChange={dialogsChange}
                />
                <button onClick={() => addMessageHandler(new Date().getTime(), props.DialogsPage.newDialogMessage)}>ok</button>
            </div>
        </div>
    )
}
export default Dialogs