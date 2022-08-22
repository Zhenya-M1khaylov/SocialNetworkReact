import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsType} from './DialogsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type FormDataType ={
    newMessageBodyText:string
}

const AddMessageForm :React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newMessageBodyText"} component={"textarea"} placeholder={'Enter your message'}/>
            </div>
            <div>
                <button className={s.buttonSendMessageDialog}>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)


const Dialogs: React.FC<DialogsType> = (props) => {

    let state = props.dialogsPage

    const dialogsElement = state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const messagesElement = state.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)


    const addNewMessageHandler = (values: FormDataType) => {
        props.onSendMessageClick(values.newMessageBodyText)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessageHandler}/>
        </div>

    )
}

export default Dialogs;