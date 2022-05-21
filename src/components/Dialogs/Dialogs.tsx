import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPagePropsType} from '../../redux/state';

export type PropsType = {
    dialogsPage: DialogsPagePropsType

}

const Dialogs: React.FC<PropsType> = (props) => {

    let state = props.dialogsPage

    const dialogsElement = state.dialogs.map(d => <DialogItem id={d.id} name={d.name} />)
    const messagesElement = state.messages.map(m => <Message id={m.id} message={m.message} />)


    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>

    )
}

export default Dialogs;