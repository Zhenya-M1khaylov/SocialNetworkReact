import {userAPI} from '../api/api';

export type UserDataType = {
    id: number
    name: string
    photos: PhotosType
    followed: boolean
    status: string | null
}

type PhotosType = {
    small: string | null
    large: string | null
}

export type UsersStateType = {
    users: Array<UserDataType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgressList: Array<number>
}

export type UsersReducerType = followACActionType
    | unFollowACActionType
    | setUsersACActionType
    | setCurrentPageACActionType
    | setTotalUsersCountACActionType
    | setIsFetchingACActionType
    | setIsFollowingACActionType


export type followACActionType = ReturnType<typeof followSuccess>
export type unFollowACActionType = ReturnType<typeof unFollowSuccess>
export type setUsersACActionType = ReturnType<typeof setUsers>
export type setCurrentPageACActionType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountACActionType = ReturnType<typeof setTotalUsersCount>
export type setIsFetchingACActionType = ReturnType<typeof setIsFetching>
export type setIsFollowingACActionType = ReturnType<typeof setIsFollowing>

export const followSuccess = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId

        }
    } as const
}
export const unFollowSuccess = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}
export const setUsers = (users: Array<UserDataType>) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            currentPage
        }
    } as const
}
export const setTotalUsersCount = (count: number) => {
    return {
        type: 'SET-USERS-COUNT',
        payload: {
            count
        }
    } as const
}
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: 'SET-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}
export const setIsFollowing = (isFollowing: boolean, userID: number) => {
    return {
        type: 'SET-IS-FOLLOWING',
        payload: {
            isFollowing,
            userID
        }
    } as const
}

export const getUsers = (currentPage:number, pageSize:number) => {
    return (dispatch: any) => {
        dispatch(setIsFetching(true))
        userAPI.getUsers(currentPage, pageSize).then(data => {
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
                dispatch(setIsFetching(false))
            })
    }
}

export const follow = (id:number) => (dispatch:any) => {
    dispatch(setIsFollowing(true,id))
    userAPI.followUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(id))
            }
            dispatch(setIsFollowing(false,id))
        })
}

export const unfollow = (id:number) => (dispatch:any) => {
    dispatch(setIsFollowing(true, id))
    userAPI.unfollowUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollowSuccess(id))
            }
            dispatch(setIsFollowing(false,id))
        })
}

let initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgressList: []
}

export const usersReducer = (state = initialState, action: UsersReducerType): UsersStateType => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'SET-USERS':
            return {
                // ...state, users: [...state.users, ...action.payload.users]
                ...state, users: action.payload.users
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state, currentPage: action.payload.currentPage
            }
        case 'SET-USERS-COUNT':
            return {
                ...state, totalUsersCount: action.payload.count
            }
        case 'SET-IS-FETCHING': {
            return {...state, isFetching: action.payload.isFetching}
        }
        case 'SET-IS-FOLLOWING': {
            return {
                ...state,
                followingInProgressList: action.payload.isFollowing ?
                    [...state.followingInProgressList, action.payload.userID]
                    : state.followingInProgressList.filter(id => id !== action.payload.userID)}
        }
        default:
            return state
    }
}
