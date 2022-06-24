import React from 'react';
import s from './../Dialogs.module.css'

type MessagePropsType = {
    message: string
    id: number // ?
}

const Message: React.FC<MessagePropsType> = (props) => {

    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        let textMessage = newMessageElement.current?.value
        alert(textMessage)
    }

    return (
        <div>
            <div className={s.message}>{props.message}</div>
            <div><textarea ref={newMessageElement}></textarea></div>
            <button onClick={addMessage}>add</button>
        </div>
    )

}


export default Message;