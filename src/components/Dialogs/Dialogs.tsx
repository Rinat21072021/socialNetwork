import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'
import {dialogsData, messageData} from "../../Redux/state";

type DialogsPropsType = {
    dialogsData: Array<dialogsData>
    messageData: Array<messageData>
}

export const Dialogs = (props: DialogsPropsType) => {
    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    let addMessageHandler = (id: number, message:string) => {
        if (newMessageElement.current) {
            alert(message)
        }
    };

    return (
        <div className={s.diologs}>
            <div className={s.dialogItem}>
                {props.dialogsData.map(m => <p><a href='' key={m.id}>{m.name}</a></p>)}
            </div>

            <div className={s.massages}>
                {props.messageData.map(m => {

                    return (
                        <p><textarea
                            key={m.id}
                            ref={newMessageElement}>{m.message}</textarea>
                            <button onClick={() => addMessageHandler(m.id,m.message)}>ok</button>
                        </p>
                    )
                })}

            </div>
        </div>
    )
}
export default Dialogs