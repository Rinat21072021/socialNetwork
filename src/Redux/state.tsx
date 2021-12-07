import React from "react";

// let rerenderEntireTree = () => {
//     console.log('change render')
// }

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
    sidebar: {}
}

// export let state: stateType = {
//     ProfilePage: {
//         message: '',
//         posts: [
//             {id: 1, message: 'Hi, how are you?', likesCount: 15},
//             {id: 2, message: 'Hi, message', likesCount: 20},
//             {id: 3, message: 'Hi, Serg', likesCount: 30},
//             {id: 4, message: 'Hi, Nikola', likesCount: 10}],
//
//     },
//     DialogPage: {
//         dialogsData: [
//             {id: 1, name: 'Dimych'},
//             {id: 2, name: 'Andrye'},
//             {id: 3, name: 'Sveta'},
//             {id: 4, name: 'Sasha'},
//             {id: 5, name: 'Viktor'},
//             {id: 6, name: 'Valera'},
//         ],
//         messageData: [
//             {id: 1, message: 'hi'},
//             {id: 2, message: 'How is your it-incubator'},
//             {id: 3, message: 'number tree'},
//             {id: 4, message: 'What to learn?'},
//         ],
//         newDialogMessage: 'string'
//     },
//     sidebar: {},
//
// }

// export let addPost = () => {
//     let newPost = {
//         id: 5,
//         message: state.ProfilePage.message,
//         likesCount: 0,
//     }
//     state.ProfilePage.posts.push(newPost);
//     state.ProfilePage.message = ''
//     rerenderEntireTree();
// }


// export let changeNewText = (newText: string) => {
//     state.ProfilePage.message = newText;
//     rerenderEntireTree();
// }
// export const addDialogMessage = () => {
//     let newMessage = {
//         id: 5,
//         message: state.DialogPage.newDialogMessage,
//     }
//     state.DialogPage.messageData.push(newMessage);
//     state.DialogPage.newDialogMessage = '';
//     rerenderEntireTree();
// }
// export const changeDialogMessage = (newMessage: string) => {
//     state.DialogPage.newDialogMessage = newMessage;
//     rerenderEntireTree();
// }
// export const subscribe = (observe: ()=>void) => {
//     rerenderEntireTree = observe
// }
type AddPostType = {
    type: 'ADD-POST'
    newPost: string

}
type AddDialogMessageType = {
    type: 'ADD-DIALOG-MESSAGE',
    newMessage: string
}
type ChangeNewTextType={
    type: 'CHANGE-NEW-TEXT'
    newText:string
}

export type ActionTypes = AddPostType | AddDialogMessageType | ChangeNewTextType

export type TypeStore = {
    _state: stateType
    //addPost: () => void
    changeNewText: (newText: string) => void
    //addDialogMessage: () => void
    changeDialogMessage: (newMessage: string) => void
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
            newDialogMessage: 'string'
        },
        sidebar: {},

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
        if (action.type === 'ADD-POST') {
            const newPost = {
                id: 5,
                message: this._state.ProfilePage.postMessage,
                likesCount: 0,
            }
            this._state.ProfilePage.posts.push(newPost);
            this._state.ProfilePage.postMessage = ''
            this.callSubscriber();

        } else if (action.type === 'ADD-DIALOG-MESSAGE') {
            let newMessage = {
                id: 5,
                message: this._state.DialogPage.newDialogMessage,
            }
            this._state.DialogPage.messageData.push(newMessage);
            this._state.DialogPage.newDialogMessage = '';
            this.callSubscriber();
        }else if(action.type === 'CHANGE-NEW-TEXT'){
            this._state.ProfilePage.postMessage = action.newText;
            this.callSubscriber();
        }
    },


    changeNewText(newText: string) {

    },


    changeDialogMessage(newMessage: string) {
        this._state.DialogPage.newDialogMessage = newMessage;
        this.callSubscriber();
    },


}
//dispatch
//dispatch