import React from 'react';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {
    follow,
    setCurrentPage, setIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow,
    UserDataType
} from '../../redux/users-reducer';
import axios from 'axios';
import Users from './Users';
import {Preloader} from '../common/Preloader/Preloader';

export type mapStateToPropsType = {
    users: Array<UserDataType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type mapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UserDataType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
    setIsFetching: (isFetching: boolean) => void
}

export type UsersContainerType = mapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
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
        isFetching: state.usersPage.isFetching
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
    setIsFetching
})(UsersContainer)

