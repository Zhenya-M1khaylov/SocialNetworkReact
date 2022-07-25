import React from 'react';
import s from '../Users/Users.module.css'
import axios from 'axios';
import userDefaultPhoto from '../../assets/images/userDefault.png'


const Users = (props: any) => { // UsersContainerType

    if (props.users.length === 0) {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then((response) => {
                props.setUsers(response.data.items)
            })
    }


    return (
        <div>
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
        </div>
    );
};

export default Users;