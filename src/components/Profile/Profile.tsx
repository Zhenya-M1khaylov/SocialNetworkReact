import React from 'react';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';

type ProfilePropsType = {
    profile:ProfileType | null
    status:string
    updateStatus:(newStatus:string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <div>
                <ProfileAvatar profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div>
                <MyPostsContainer/>
            </div>
        </div>
    );
};

export default Profile;