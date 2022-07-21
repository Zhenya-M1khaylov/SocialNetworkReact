export type UserDataType = {
    id: number
    name: string
    // photos: PhotosType
    followed: boolean
    status: string | null
}

export type UsersStateType = {
    users: Array<UserDataType>
}

export type UsersReducerType = followACActionType | unFollowACActionType | setUsersACActionType


export type followACActionType = ReturnType<typeof followAC>
export type unFollowACActionType = ReturnType<typeof unFollowAC>
export type setUsersACActionType = ReturnType<typeof setUsersAC>

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

let initialState: UsersStateType = {
    users: []
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
                ...state, users: [...state.users, ...action.payload.users]
            }
        default:
            return state
    }
}

