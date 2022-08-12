import React from 'react'
import s from './Users.module.css';
import userDefaultPhoto from '../../assets/images/userDefault.png';
import {UserDataType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';

import { userAPI } from '../../api/api';

type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (page: number) => void
    users: Array<UserDataType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    setIsFollowing: (isFollowing: boolean, userID:number) => void
    isFollowingInProgress:Array<number>
}


let Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = []

    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i)
    }

    return (<div>
        <div>
            {pages.map((p, i) => {
                return <span key={i} className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img alt={'photo'} src={u.photos.small !== null ? u.photos.small : userDefaultPhoto}
                                 className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.isFollowingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                    props.setIsFollowing(true, u.id)
                                    userAPI.unfollowUser(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.setIsFollowing(false,u.id)
                                        })
                                }}>UnFollow</button>
                                : <button disabled={props.isFollowingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                    props.setIsFollowing(true,u.id)
                                    userAPI.followUser(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.setIsFollowing(false,u.id)
                                        })
                                }}>Follow</button>}
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
            </div>)
        }
    </div>)
}

export default Users