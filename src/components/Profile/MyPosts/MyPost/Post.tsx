import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src="" alt="avatar"/>

            <div>
                {props.message}
            </div>
            <span>like</span> {props.likesCount}

        </div>
    );
};

export default Post;