import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {ActionsTypes, DialogsPagePropsType, newMessageBodyAC, sendMessageAC} from '../../redux/state';

export type PropsType = {
    dialogsPage: DialogsPagePropsType
    dispatch: (action: ActionsTypes) => void
    newSendMessageText: string

}

const Dialogs: React.FC<PropsType> = (props) => {

    let state = props.dialogsPage

    const dialogsElement = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    const messagesElement = state.messages.map(m => <Message id={m.id} message={m.message}/>)
    const newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC(props.newSendMessageText))
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        // props.store.dispatch()
        props.dispatch(newMessageBodyAC(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            placeholder='Enter your message'
                            onChange={onNewMessageChange}
                        >
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}></button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;