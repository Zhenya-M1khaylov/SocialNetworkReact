import {PostsPropsType} from './store';
import {profileAPI, userAPI} from '../api/api';

export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}
type ProfileContactsType = {
    'facebook': string | null
    'website': string | null
    'vk': string | null
    'twitter': string | null
    'instagram': string | null
    'youtube': string | null
    'github': string | null
    'mainLink': string | null
}
type ProfilePhotoType = {
    'small': string
    'large': string
}
export type ProfileType = {
    'aboutMe': string
    'contacts': ProfileContactsType
    'lookingForAJob': boolean
    'lookingForAJobDescription': string
    'fullName': string
    'userId': number
    'photos': ProfilePhotoType
}
export type ProfilePageType = {
    posts: Array<PostsDataType>
    newPostsText: string
    profile: null | ProfileType
    status: string
}

export type ProfileReducerType = AddPostActionType | setUserProfileActionType | setStatusActionType

export type AddPostActionType = ReturnType<typeof addPost>
export type setUserProfileActionType = ReturnType<typeof setUserProfile>
export type setStatusActionType = ReturnType<typeof setStatus>

export const addPost = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        newPostText: newPostText
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile: profile
    } as const
}

export const getUserProfile = (userID: string) => (dispatch: any) => {
    userAPI.getProfile(userID)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const setStatus = (status: string) => {
    return {
        type: 'SET-STATUS',
        status: status
    } as const
}

export const getStatus = (userID: string) => (dispatch: any) => {
    profileAPI.getStatus(userID)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you it-kamasutra?', likesCount: 12},
        {id: 2, message: 'How are you? u are fine?', likesCount: 11}
    ],
    newPostsText: '',
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action: ProfileReducerType): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostsPropsType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostsText: ''
            }
        }
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SET-STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export default profileReducer
