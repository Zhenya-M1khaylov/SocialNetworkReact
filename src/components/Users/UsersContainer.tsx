import React from 'react';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {
    follow,
    setCurrentPage, setIsFetching, setIsFollowing,
    setTotalUsersCount,
    setUsers,
    unFollow,
    UserDataType
} from '../../redux/users-reducer';
import Users from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {userAPI} from '../../api/api';


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
    unFollow: (id: number) => void
    setUsers: (users: Array<UserDataType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
    setIsFetching: (isFetching: boolean) => void
    setIsFollowing: (isFollowing: boolean, userID: number) => void
}

export type UsersContainerType = mapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then((data) => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
            })
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
                unfollow={this.props.unFollow}
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
// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users: Array<UserDataType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (pageCount: number) => {
//             dispatch(setTotalUsersCountAC(pageCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//           dispatch(setIsFetchingAC(isFetching))
//         }
//     }
// }


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
    setIsFollowing
})(UsersContainer)

