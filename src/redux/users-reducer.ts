export type UserDataType = {
    id: number
    name: string
    // photos: PhotosType
    followed: boolean
    status: string | null
}

export type UsersStateType = {
    users: Array<UserDataType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type UsersReducerType = followACActionType
    | unFollowACActionType
    | setUsersACActionType
    | setCurrentPageACActionType
    | setTotalUsersCountACActionType
    | setIsFetchingACActionType


export type followACActionType = ReturnType<typeof followAC>
export type unFollowACActionType = ReturnType<typeof unFollowAC>
export type setUsersACActionType = ReturnType<typeof setUsersAC>
export type setCurrentPageACActionType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountACActionType = ReturnType<typeof setTotalUsersCountAC>
export type setIsFetchingACActionType = ReturnType<typeof setIsFetchingAC>

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}
export const unFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}
export const setUsersAC = (users: Array<UserDataType>) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            currentPage
        }
    } as const
}
export const setTotalUsersCountAC = (count: number) => {
    return {
        type: 'SET-USERS-COUNT',
        payload: {
            count
        }
    } as const
}
export const setIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}
    let initialState: UsersStateType = {
        users: [],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false
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
                            return {...u, followed: true}
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
            default:
                return state
        }
    }
