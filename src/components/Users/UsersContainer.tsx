import React from 'react';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {
    follow,
    getUsers,
    setCurrentPage, setIsFollowing, unfollow,
    UserDataType
} from '../../redux/users-reducer';
import Users from './Users';
import {Preloader} from '../common/Preloader/Preloader';

export type mapStateToPropsType = {
    users: Array<UserDataType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingInProgress: Array<number>
}

export type mapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setCurrentPage: (page: number) => void
    setIsFollowing: (isFollowing: boolean, userID: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersContainerType = mapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                users={this.props.users}
                setIsFollowing={this.props.setIsFollowing}
                isFollowingInProgress={this.props.isFollowingInProgress}
            />
        </>
    }
}


const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.followingInProgressList
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setIsFollowing,
    getUsers
})(UsersContainer)

