import React from 'react';
import s from './MyPosts.module.css'
import Post from './MyPost/Post';
import {PostsPropsType} from '../../../redux/state';

export type MyPostsPropsType = {
    posts: Array<PostsPropsType>
    addPost: (postMessage: string) => void
}


const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current)
            props.addPost(newPostElement.current.value)
    }


    return (
        <div className={s.myPostsBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
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