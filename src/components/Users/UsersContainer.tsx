import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {AppRootStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {followAC, setUsersAC, unFollowAC} from '../../redux/users-reducer';

export type mapStateToPropsType = {}

export type mapDispatchToPropsType = {}

export type UsersContainerType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;