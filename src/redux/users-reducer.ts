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


export type followACActionType = ReturnType<typeof follow>
export type unFollowACActionType = ReturnType<typeof unFollow>
export type setUsersACActionType = ReturnType<typeof setUsers>
export type setCurrentPageACActionType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountACActionType = ReturnType<typeof setTotalUsersCount>
export type setIsFetchingACActionType = ReturnType<typeof setIsFetching>
export type setIsFollowingACActionType = ReturnType<typeof setIsFollowing>

export const follow = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}
export const unFollow = (userId: number) => {
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
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}
export const setIsFollowing = (isFollowing: boolean, userID: number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING',
        payload: {
            isFollowing,
            userID
        }
    } as const
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
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.payload.isFetching}
        }
        case 'TOGGLE-IS-FOLLOWING': {
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
