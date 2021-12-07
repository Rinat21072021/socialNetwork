import React, {ChangeEvent} from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'
import {ActionTypes, dialogsData, messageData} from "../../Redux/state";

type DialogsPropsType = {
    dialogsData: Array<dialogsData>
    messageData: Array<messageData>
    //addDialogMessage: (newDialogMessage: string) => void
    dispatch: (action: ActionTypes) => void
    newDialogMessage: string
    changeDialogMessage: (newMessage: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {
    // let newMessageElement = React.createRef<HTMLTextAreaElement>();

    // let addMessageHandler = (id: number, message:string) => {
    //     if (newMessageElement.current) {
    //         alert(message)
    //     }
    //     props.addDialogMessage()
    // };
    let addMessageHandler = (id: number, message: string) => {
        props.dispatch({type: "ADD-DIALOG-MESSAGE", newMessage: message})

    };

    const dialogsChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeDialogMessage(e.currentTarget.value)
    }

    return (
        <div className={s.diologs}>
            <div className={s.dialogItem}>
                {props.dialogsData.map(m => <p><a href='' key={m.id}>{m.name}</a></p>)}
            </div>

            <div className={s.massages}>
                {props.messageData.map(m => {

                    return (
                        <div>
                            <p>{m.message}</p>


                        </div>
                    )
                })}
                <textarea
                    value={props.newDialogMessage}
                    onChange={dialogsChangeHandler}
                />
                <button onClick={() => addMessageHandler(new Date().getTime(), props.newDialogMessage)}>ok</button>
            </div>
        </div>
    )
}
export default Dialogs