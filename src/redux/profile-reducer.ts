import {PostsPropsType, ProfilePagePropsType} from './store';

export type ProfileReducerType = AddPostActionType | UpdateNewTextActionType

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewTextActionType = ReturnType<typeof onPostChangeAC>

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

let initialState: ProfilePagePropsType = {
    posts: [
        {id: 1, message: 'Hi, how are you it-kamasutra?', likesCount: 12},
        {id: 2, message: 'How are you? u are fine?', likesCount: 11}
    ],
    newPostsText: ''

}

export const profileReducer = (state= initialState, action: ProfileReducerType) => {

    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostsPropsType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostsText = ''
            return state
        }
        case 'UPDATE-NEW-POST-TEXT': {
            state.newPostsText = (action.newText)
            return state
        }
        default:
            return state
        }
}

export default profileReducer
