import {PostsPropsType, ProfilePagePropsType} from './state';

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

export const profileReducer = (state: ProfilePagePropsType, action: ProfileReducerType) => {

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
