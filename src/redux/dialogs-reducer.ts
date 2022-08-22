import {DialogsPagePropsType} from './store';

export type DialogsReducerType = SendMessageActionType

export type SendMessageActionType = ReturnType<typeof sendMessageAC>

export const sendMessageAC = (newMessageBodyText: string) => {
    return {
        type: 'SEND-MESSAGE',
        newMessageBodyText: newMessageBodyText
    } as const
}

let initialState: DialogsPagePropsType = {
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
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state = initialState, action: DialogsReducerType) => {


    switch (action.type) {
        case 'SEND-MESSAGE': {
            let body = action.newMessageBodyText
            return  {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        }
        default:
            return state
    }
}

export default dialogsReducer