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


            </div>
            <div className={s.massages}>



            </div>
        </div>
    )
}
export default Dialogs