import React from 'react';
import s from './ProfileAvatar.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileType} from '../../../redux/profile-reducer';
import {ProfileStatus} from './ProfileStatus'

type ProfileInfoType = {
    profile:ProfileType | null
}

const ProfileAvatar = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.contentImg}>
                <img className={s.imgAvatar} src="https://cdn.mos.cms.futurecdn.net/AT9Bcvo94cTMGmESvL4JCK.jpg" alt="photo"/>
            </div>
            <div className={s.avatarDescription}>
                <img src={props.profile.photos.large} alt="photoHere"/>
                <ProfileStatus status={'x'}/>
            </div>
        </div>
    );
};

export default ProfileAvatar;