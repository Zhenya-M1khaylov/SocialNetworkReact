import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPagePropsType} from '../../redux/store';
import {DialogsContainerType} from './DialogsContainer';

// export type DialogsPropsType = {
//     dialogsPage: DialogsPagePropsType
//     sendMessageCallback: () => void
//     newMessageBody: (body: string) => void // ?????????????
// }

const Dialogs: React.FC<DialogsContainerType> = (props) => {

    let state = props.dialogsPage

    const dialogsElement = state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const messagesElement = state.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)
    const newMessageBodyText = state.newMessageBody

    const onUpdateNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // let body = e.currentTarget.value
        // props.store.dispatch()
        // props.dispatch(newMessageBodyAC(body))

        let body = e.currentTarget.value
        props.newMessageBody(body)
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
                            value={newMessageBodyText}
                            placeholder='Enter your message'
                            onChange={onUpdateNewMessageChange}
                        >
                        </textarea>
                    </div>
                    <div>
                        <button onClick={props.onSendMessageClick} className={s.buttonSendMessageDialog}>Send</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;