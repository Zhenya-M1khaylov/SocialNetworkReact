import React from 'react';
import s from './ProfileAvatar.module.css'

const ProfileAvatar = () => {
    return (
        <div>
            <div className={s.contentImg}>
                <img className={s.imgAvatar} src="https://cdn.mos.cms.futurecdn.net/AT9Bcvo94cTMGmESvL4JCK.jpg" alt=""/>
            </div>
            <div className={s.avatarDescription}>
                description will be hear
            </div>
        </div>
    );
};

export default ProfileAvatar;