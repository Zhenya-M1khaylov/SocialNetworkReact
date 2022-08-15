import React from 'react';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';

type ProfilePropsType = {
    profile:ProfileType | null

}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <div>
                <ProfileAvatar profile={props.profile}/>
            </div>
            <div>
                <MyPostsContainer/>
            </div>
        </div>
    );
};

export default Profile;