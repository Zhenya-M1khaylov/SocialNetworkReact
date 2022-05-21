import React from 'react';
import s from './ProfileAvatar.module.css'

const ProfileAvatar = () => {
    return (
        <div>
            <div className={s.content}>
                <img src="" alt=""/>
            </div>
            <div className={s.avatarDescription}>
                ava+description
            </div>
        </div>
    );
};

export default ProfileAvatar;