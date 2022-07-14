import React from 'react';
import s from './Profile.module.css'
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfilePagePropsType} from '../../redux/store';

type ProfilePropsType = {
    postsProfile?: ProfilePagePropsType
    addPostCallBack?: (postMessage: string) => void
    newPostsText?: string
    updateNewPostsCallBack?: (newText: string) => void

}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <div>
                <ProfileAvatar/>
            </div>
            <div>
                {/*<MyPosts*/}
                {/*    posts={props.postsProfile.posts}*/}
                {/*    // addPost={props.addPostCallBack}*/}
                {/*    // updateNewPostsCallBack={props.updateNewPostsCallBack}*/}
                {/*    newPostsText={props.newPostsText}*/}
                {/*/>*/}
                <MyPostsContainer
                    // posts={props.postsProfile.posts}
                    // newPostsText={props.newPostsText}
                    // addPost={props.addPostCallBack}
                    // updateNewPostsCallBack={props.updateNewPostsCallBack}
                />
            </div>
        </div>
    );
};

export default Profile;