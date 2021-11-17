export type dialogAndMessage={
    dialogsData:Array<dialogsData>
    messageData: Array<messageData>
}
export type messageData={
    id:number
    message:string
}
export type dialogsData={
    id:number
    name: string

}

export type ProfilePageType={
    posts:Array<postsType>
}
export type postsType= {
    id: number
    message: string
    likesCount: number
}


export type stateType = {
    ProfilePage: ProfilePageType
    DialogPage:dialogAndMessage
}

export let state: stateType = {
    ProfilePage: {
        posts:[
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
            {id: 2, message: 'How is your it-incubator\''},
            {id: 3, message: 'YO'},
            {id: 4, message: 'YO'},
        ],
    },

}