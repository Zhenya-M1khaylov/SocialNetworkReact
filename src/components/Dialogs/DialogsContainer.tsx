import React from 'react';
import s from './Dialogs.module.css'
import {newMessageBodyAC, sendMessageAC} from '../../redux/dialogs-reducer';
import {DialogsPagePropsType} from '../../redux/store';
import Dialogs from './Dialogs';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';

// export type DialogsContainerPropsType = {
//     dialogsPage: DialogsPagePropsType
//     newSendMessageText: string
//     dispatch: Dispatch
//     store: Store
//
// }

// const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const onSendMessageClick = () => {
//                     // props.dispatch(sendMessageAC(props.newSendMessageText))
//                     store.dispatch(sendMessageAC(props.newSendMessageText))
//                 }
//                 const onNewMessageChange = (body: string) => {
//                     // let body = e.currentTarget.value
//                     // props.dialogsPage.newMessageBody(body)
//                     store.dispatch(newMessageBodyAC(body))
//                 }
//
//                 return <Dialogs
//                     // dialogsPage={props.dialogsPage}
//                     // dispatch={props.dispatch}
//                     // newSendMessageText={props.newSendMessageText}
//
//                     newMessageBody={onNewMessageChange}
//                     sendMessageCallback={onSendMessageClick}
//                     // dialogsPage={props.dialogsPage}
//                     dialogsPage={store.getState().dialogsPage}
//                 />
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

///////////////

export type mapStateToPropsType = {
    dialogsPage: DialogsPagePropsType // ?????????????
}

export type mapDispatchToPropsType = {
    onSendMessageClick: (newSendMessageText: string) => void
    newMessageBody: (body: string) => void

}

export type DialogsContainerType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onSendMessageClick: (newSendMessageText: string) => {
            dispatch(sendMessageAC(newSendMessageText))
        },
        newMessageBody: (body: string) => {
            dispatch(newMessageBodyAC(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;