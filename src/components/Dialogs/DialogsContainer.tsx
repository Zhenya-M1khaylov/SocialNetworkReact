import React from 'react';
import s from './Dialogs.module.css'
import {newMessageBodyAC, sendMessageAC} from '../../redux/dialogs-reducer';
import {DialogsPagePropsType} from '../../redux/store';
import Dialogs from './Dialogs';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';


export type mapStateToPropsType = {
    dialogsPage: DialogsPagePropsType
    isAuth: boolean
}

export type mapDispatchToPropsType = {
    onSendMessageClick: (newSendMessageText: string) => void
    newMessageBody: (body: string) => void

}

export type DialogsContainerType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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