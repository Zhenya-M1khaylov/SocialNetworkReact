import {DialogsPagePropsType} from './store';

export type DialogsReducerType = NewMessageBodyActionType | SendMessageActionType

export type NewMessageBodyActionType = ReturnType<typeof newMessageBodyAC>
export type SendMessageActionType = ReturnType<typeof sendMessageAC>

export const newMessageBodyAC = (newBody: string) => {
    console.log("BODY", newBody)
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newBody: newBody
    } as const
}
export const sendMessageAC = (newSendMessageText: string) => {
    return {
        type: 'SEND-MESSAGE',
        newSendMessageText: newSendMessageText
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
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            return {
                ...state,
                newMessageBody: action.newBody
            }
           // state.newMessageBody = action.newBody
           // return state
        }
        case 'SEND-MESSAGE': {
            let body = state.newMessageBody
            state.messages.push( {id: 6, message: body})
            return state
        }
        default:
            return state
    }

}

export default dialogsReducer