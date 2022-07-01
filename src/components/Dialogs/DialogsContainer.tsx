import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import {newMessageBodyAC, sendMessageAC} from '../../redux/dialogs-reducer';
import {DialogsPagePropsType} from '../../redux/store';
import Dialogs from './Dialogs';
import {Dispatch, Store} from 'redux';
import StoreContext from '../../StoreContext';

export type DialogsContainerPropsType = {
    dialogsPage: DialogsPagePropsType
    newSendMessageText: string
    // dispatch: Dispatch
    // store: Store

}

const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const onSendMessageClick = () => {
                    // props.dispatch(sendMessageAC(props.newSendMessageText))
                    store.dispatch(sendMessageAC(props.newSendMessageText))
                }
                const onNewMessageChange = (body: string) => {
                    // let body = e.currentTarget.value
                    // props.dialogsPage.newMessageBody(body)
                    store.dispatch(newMessageBodyAC(body))
                }

                return <Dialogs
                    // dialogsPage={props.dialogsPage}
                    // dispatch={props.dispatch}
                    // newSendMessageText={props.newSendMessageText}

                    newMessageBody={onNewMessageChange}
                    sendMessageCallback={onSendMessageClick}
                    // dialogsPage={props.dialogsPage}
                    dialogsPage={store.getState().dialogsPage}
                />
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;