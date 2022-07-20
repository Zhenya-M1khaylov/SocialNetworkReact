

export type UsersReducerType = followACActionType | unFollowACActionType | setUsersACActionType


export type followACActionType = ReturnType<typeof followAC>
export type unFollowACActionType = ReturnType<typeof unFollowAC>
export type setUsersACActionType = ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId: userId // ??
    } as const
}
export const unFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId: userId // ??
    } as const
}
export const setUsersAC = (users: any) => {
    return {
        type: 'SET-USERS',
        users: users // ??
    } as const
}

let initialState: UsersReducerType = {
    users: []
}

export const usersReducer = (state = initialState, action: UsersReducerType) => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'SET-USERS':
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export default usersReducer
