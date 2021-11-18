import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'


import {dialogsData, messageData} from "../../Redux/state";

/*
 type DialogsType={
    dialogsData:Array<dialogsDataType>
     messageData:Array<massageDataType>
}
*/
type DialogsPropsType={
    dialogsData: Array<dialogsData>
    messageData: Array <messageData>
}

export const Dialogs = (props:DialogsPropsType) => {


    return (
        <div className={s.diologs}>
            <div className={s.dialogItem}>
                {props.dialogsData.map(m=><p><a href = '' key={m.id}>{m.name}</a></p>)}

            </div>
            <div className={s.massages}>
                {props.messageData.map(m=><p><textarea key={m.id}>{m.message}</textarea></p>)}


            </div>
        </div>
    )
}
export default Dialogs