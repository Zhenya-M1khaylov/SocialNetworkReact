import React from 'react'
import s from './Users.module.css';
import userDefaultPhoto from '../../assets/images/userDefault.png';
import {UserDataType} from '../../redux/users-reducer';

type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (page: number) => void
    users: Array<UserDataType>
    // isFollowingInProgress:Array<number>
    follow:(id:number) => void
    unfollow:(id:number) => void
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
                             onClick={ ()=> {props.onPageChanged(p) }}>{p}</span>
            })}

        </div>
        {
            props.users.map((u: any) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userDefaultPhoto}
                                 className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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