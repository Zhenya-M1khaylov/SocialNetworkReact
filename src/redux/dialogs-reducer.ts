import {DialogsPagePropsType} from './state';

export type DialogsReducerType = NewMessageBodyActionType | SendMessageActionType

export type NewMessageBodyActionType = ReturnType<typeof newMessageBodyAC>
export type SendMessageActionType = ReturnType<typeof sendMessageAC>

export const newMessageBodyAC = (newBody: string) => {
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

export const dialogsReducer = (state: DialogsPagePropsType, action: DialogsReducerType) => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            state.newMessageBody = action.newBody
            return state
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