import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './MyPost/Post';
import {addPostAC, onPostChangeAC} from '../../../redux/profile-reducer';
import {ActionsTypes, PostsPropsType} from '../../../redux/state';

export type MyPostsPropsType = {
    posts: Array<PostsPropsType>
    // addPost: (postMessage: string) => void
    newPostsText: string
    // updateNewPostsCallBack: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}


const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)


    const addPost = () => {
        // props.addPost(props.newPostsText)
        // props.dispatch({type: 'ADD-POST', postMessage: props.newPostsText})
        props.dispatch(addPostAC(props.newPostsText))
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.updateNewPostsCallBack(e.currentTarget.value)
        props.dispatch(onPostChangeAC(e.currentTarget.value))
    }

    return (
        <div className={s.myPostsBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <div><textarea value={props.newPostsText}
                               onChange={onPostChange}/></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.myPostBlockContent}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;