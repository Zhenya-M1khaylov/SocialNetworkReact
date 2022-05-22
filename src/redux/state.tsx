import {rerenderEntireTree} from '../render';

export type MessagesPropsType = {
    id: number
    message: string
}
export type DialogsPropsType = {
    id: number
    name: string
}
export type PostsPropsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsPagePropsType = {
    messages: Array<MessagesPropsType>
    dialogs: Array<DialogsPropsType>
}
export type ProfilePagePropsType = {
    posts: Array<PostsPropsType>
}
export type RootStatePropsType = {
        profilePage: ProfilePagePropsType
        dialogsPage: DialogsPagePropsType
}

export const state: RootStatePropsType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you it-kamasutra?', likesCount: 12},
            {id: 2, message: 'How are you? u are fine?', likesCount: 11}
        ]

    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'YoYo'}
        ],
        dialogs: [
            {id: 1, name: 'Zhenya'},
            {id: 2, name: 'Liza'},
            {id: 3, name: 'Slava'},
            {id: 4, name: 'Vanya'},
            {id: 5, name: 'Pasha'}
        ]
    }
}

export const addPost = (postMessage: string) => {
    const newPost: PostsPropsType = {
        id: new Date().getTime(),
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}


export default state;