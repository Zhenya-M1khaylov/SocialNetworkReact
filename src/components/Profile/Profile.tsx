import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import {ProfilePagePropsType, addPost} from '../../redux/state';

type ProfilePropsType = {
    postsProfile: ProfilePagePropsType
    addPostCallBack: (postMessage: string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <div>
                <ProfileAvatar/>
            </div>
            <div>
                <MyPosts posts={props.postsProfile.postsProfilePage} addPost={addPost}/>
            </div>
        </div>
    );
};

export default Profile;