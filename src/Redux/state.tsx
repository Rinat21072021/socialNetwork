import React from "react";
import {AddPostActionCreator, newPostChangeActionCreator, ProfileReduce} from "./Profile-reduce";
import {changeDialogMessageActionCreator, DialogReduce, updateNewMessageBodyCreator} from "./Dialog-reduce";
import {SidebarReduce} from "./Sidebar-reduce";

export type dialogAndMessage = {
    dialogsData: Array<dialogsData>
    messageData: Array<messageData>
    newDialogMessage: string
}
export type messageData = {
    id: number
    message: string
}
export type dialogsData = {
    id: number
    name: string

}

export type ProfilePageType = {
    posts: Array<postsType>
    postMessage: string
}
export type postsType = {
    id: number
    message: string
    likesCount: number

}


export type stateType = {
    ProfilePage: ProfilePageType
    DialogPage: dialogAndMessage
    Sidebar: {}
}

type AddPostType = ReturnType<typeof AddPostActionCreator>
type ChangeNewTextType = ReturnType<typeof newPostChangeActionCreator>
type AddDialogMessageType = ReturnType<typeof updateNewMessageBodyCreator>
type ChangeDialogMessageType = ReturnType<typeof changeDialogMessageActionCreator>

export type ActionTypes = AddPostType | AddDialogMessageType | ChangeNewTextType | ChangeDialogMessageType

export type TypeStore = {
    _state: stateType
    callSubscriber: () => void
    subscribe: (callback: () => void) => void
    getState: () => stateType
    dispatch: (action: ActionTypes) => void

}

export const store: TypeStore = {
    _state: {
        ProfilePage: {
            postMessage: '',
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'Hi, message', likesCount: 20},
                {id: 3, message: 'Hi, Serg', likesCount: 30},
                {id: 4, message: 'Hi, Nikola', likesCount: 10}],

        },
        DialogPage: {
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
        },
        Sidebar:{},

    },
    getState() {
        return this._state
    },
    callSubscriber() {
        console.log('change render')
    },
    subscribe(callback) {
        this.callSubscriber = callback
    },
    dispatch(action) {
        this._state.ProfilePage = ProfileReduce(this._state.ProfilePage, action)
        this._state.DialogPage = DialogReduce(this._state.DialogPage, action)
        this._state.Sidebar = SidebarReduce(this._state.Sidebar, action)
        this.callSubscriber();

    },

}
