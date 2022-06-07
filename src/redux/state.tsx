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
    newPostsText: string
}
export type RootStatePropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPagePropsType
}

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewTextActionType = ReturnType<typeof onPostChangeAC>

export type ActionsTypes = AddPostActionType | UpdateNewTextActionType


export const addPostAC = (postMessage: string) => {
    return {
        type: 'ADD-POST',
        postMessage: postMessage
    } as const
}
export const onPostChangeAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}

export type StoreType = {
    _state: RootStatePropsType
    updateNewPostsText: (newText: string) => void
    addPost: (postMessage: string) => void
    _rerenderEntireTree: () => void
    subscribe: (callBack: () => void) => void
    getState: () => RootStatePropsType
    dispatch: (action: ActionsTypes) => void
}

const store: StoreType = {
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
            ]
        }
    },
    updateNewPostsText(newText: string) {
        this._state.profilePage.newPostsText = (newText)
        this._rerenderEntireTree()
    },
    addPost(postMessage: string) {
        const newPost: PostsPropsType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostsText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostsText = ''
        this._rerenderEntireTree()
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
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostsPropsType = {
                id: new Date().getTime(),
                // message: action.this._state.profilePage.newPostsText,
                message: action.postMessage,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostsText = ''
            this._rerenderEntireTree()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostsText = (action.newText)
            this._rerenderEntireTree()
        }
    }
}


export default store;