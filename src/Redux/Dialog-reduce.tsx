import {ActionTypes} from "./state";

const addDialogMessage = 'ADD-DIALOG-MESSAGE';
const changeDialogMessage = 'CHANGE-DIALOG-MESSAGE'

export type messageData = {
    id: number
    message: string
}
export type dialogsData = {
    id: number
    name: string

}

export type dialogAndMessage = {
    dialogsData: Array<dialogsData>
    messageData: Array<messageData>
    newDialogMessage: string
}

const initialState: dialogAndMessage = {
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrye'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ],
    messageData: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'How is your it-incubator'},
        {id: 3, message: 'number tree'},
        {id: 4, message: 'What to learn?'},
    ],
    newDialogMessage: ''
}
export const DialogReduce = (state: dialogAndMessage = initialState, action: ActionTypes): dialogAndMessage => {

    switch (action.type) {
        case addDialogMessage: {
            let newMessage = {
                id: 5,
                message: state.newDialogMessage,
            }
            return {...state, messageData: [...state.messageData, newMessage,],newDialogMessage: ''}
            // stateCopy.newDialogMessage = '';
            // return stateCopy;
        }
        case changeDialogMessage: {
            return {...state,newDialogMessage: action.newMessage}
            // stateCopy.newDialogMessage = action.newMessage;
            // return stateCopy
        }
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