import React from 'react';
import s from './Dialogs.module.css'
import {sendMessageAC} from '../../redux/dialogs-reducer';
import {DialogsPagePropsType} from '../../redux/store';
import Dialogs from './Dialogs';
import {compose, Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


export type mapStateToPropsType = {
    dialogsPage: DialogsPagePropsType
    isAuth: boolean
}

export type mapDispatchToPropsType = {
    onSendMessageClick: (newMessageBodyText: string) => void
}

export type DialogsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onSendMessageClick: (newMessageBodyText: string) => {
            dispatch(sendMessageAC(newMessageBodyText))
        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

