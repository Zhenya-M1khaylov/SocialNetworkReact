import profileReducer, {ProfileReducerType} from './profile-reducer';
import dialogsReducer, {DialogsReducerType} from './dialogs-reducer';

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
    newMessageBody: string
}
export type ProfilePagePropsType = {
    posts: Array<PostsPropsType>
    newPostsText: string
}
export type RootStatePropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPagePropsType
}

export type ActionsTypes = ProfileReducerType | DialogsReducerType


export type StorePropsType = {
    _state: RootStatePropsType
    updateNewPostsText: (newText: string) => void
    // addPost: (postMessage: string) => void
    _rerenderEntireTree: () => void
    subscribe: (callBack: () => void) => void
    getState: () => RootStatePropsType
    dispatch: (action: ActionsTypes) => void
}

const store: StorePropsType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you it-kamasutra?', likesCount: 12},
                {id: 2, message: 'How are you? u are fine?', likesCount: 11}
            ],
            newPostsText: ''

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
            ],
            newMessageBody: ''
        }
    },
    subscribe(callBack: () => void) {
        this._rerenderEntireTree = callBack
    },
    _rerenderEntireTree() {
        console.log('state was changed')
    },
    getState() {
        return this._state
    },
    updateNewPostsText(newText: string) {
        this._state.profilePage.newPostsText = (newText)
        this._rerenderEntireTree()
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action as ProfileReducerType)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action as DialogsReducerType)
        this._rerenderEntireTree()
    },
}


export default store;