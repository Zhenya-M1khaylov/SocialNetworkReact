import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import {ActionsTypes, ProfilePagePropsType} from '../../redux/state';

type ProfilePropsType = {
    postsProfile: ProfilePagePropsType
    // addPostCallBack: (postMessage: string) => void
    dispatch: (action: ActionsTypes) => void
    newPostsText: string
    // updateNewPostsCallBack: (newText: string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <div>
                <ProfileAvatar/>
            </div>
            <div>
                <MyPosts
                    posts={props.postsProfile.posts}
                    dispatch={props.dispatch}
                    // addPost={props.addPostCallBack}
                    // updateNewPostsCallBack={props.updateNewPostsCallBack}
                    newPostsText={props.newPostsText}
                />
            </div>
        </div>
    );
};

export default Profile;