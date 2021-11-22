import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'
import {dialogsData, messageData} from "../../Redux/state";

type DialogsPropsType = {
    dialogsData: Array<dialogsData>
    messageData: Array<messageData>
}

export const Dialogs = (props: DialogsPropsType) => {
    let newMassageElement = React.createRef<HTMLTextAreaElement>();

    let addMassage = (id: number) => {
        console.log(id)
        if (newMassageElement.current) {
            alert(newMassageElement.current.value)
        }
    };

    return (
        <div className={s.diologs}>
            <div className={s.dialogItem}>
                {props.dialogsData.map(m => <p><a href='' key={m.id}>{m.name}</a></p>)}
            </div>

            <div className={s.massages}>
                {props.messageData.map(m => {
                    // let addMassage = (id: number) => {
                    //     console.log(id)
                    //     if (newMassageElement.current) {
                    //         alert(newMassageElement.current.value)
                    //     }
                    //
                    // };
                    return (
                        <p><textarea
                            key={m.id}
                            ref={newMassageElement}>{m.message}</textarea>
                            <button onClick={() => addMassage(m.id)}>ok</button>
                        </p>
                    )
                })}

            </div>
        </div>
    )
}
export default Dialogs