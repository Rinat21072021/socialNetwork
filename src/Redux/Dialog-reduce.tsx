import {dialogAndMessage, dialogsData} from "./state";

const addDialogMessage = 'ADD-DIALOG-MESSAGE';
const changeDialogMessage = 'CHANGE-DIALOG-MESSAGE'

export const DialogReduce=(state:dialogAndMessage, action:any)=>{

    switch (action.type){
        case addDialogMessage:
            let newMessage = {
                id: 5,
                message: state.newDialogMessage,
            }
            state.messageData.push(newMessage);
            state.newDialogMessage = '';
            return state;
        case changeDialogMessage:
            state.newDialogMessage = action.newMessage;
            return state
        default:
            return state
    }


}
export const updateNewMessageBodyCreator = (newMessage: string) => {
    return {
        type: addDialogMessage,
        newMessage: newMessage
    } as const
}
export const changeDialogMessageActionCreator = (newMessage: string) => {
    return {
        type: changeDialogMessage,
        newMessage: newMessage
    } as const
}