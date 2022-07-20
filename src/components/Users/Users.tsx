import React from 'react';
import s from '../Users/Users.module.css'


const Users = (props: any) => { // UsersContainerType

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: '',
                followed: false,
                fullName: 'Zhenya',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 1,
                photoUrl: '',
                followed: true,
                fullName: 'Vanya',
                status: 'I am a boss too',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 1,
                photoUrl: '',
                followed: false,
                fullName: 'Pasha',
                status: 'I am a boss yo',
                location: {city: 'Moscow', country: 'Russia'}
            }
        ])
    }


    return (
        <div>
            {
                props.users.map((u: any) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={()=>{props.unfollow(u.id)}} >UnFollow</button>
                                : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;