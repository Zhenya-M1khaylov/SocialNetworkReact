import {authAPI} from '../api/api';

export type AuthStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

let initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: AuthReducerType): AuthStateType => {

    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }

        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            id,
            email,
            login,
        }
    } as const
}

export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}

export type AuthReducerType = setUserDataACActionType

export type setUserDataACActionType = ReturnType<typeof setAuthUserData>
