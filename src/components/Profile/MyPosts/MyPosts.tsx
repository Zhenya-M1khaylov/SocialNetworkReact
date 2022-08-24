import React from 'react';
import s from './MyPosts.module.css'
import Post from './MyPost/Post';
import {MyPostsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {MaxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';

const MyPosts: React.FC<MyPostsType> = (props) => {
    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    console.log('MyPosts props', props)

    const onAddPostHandler = (value:FormDataType) => {
        props.addPost(value.newPostText)
    }


    return (
        <div className={s.myPostsBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <MyPostReduxForm onSubmit={onAddPostHandler}/>
            <div className={s.myPostBlockContent}>
                {postsElements}
            </div>
        </div>
    );
};

type FormDataType = {
    newPostText:string
}

const maxLength10 = MaxLengthCreator(10)

const AddNewPostText: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"newPostText"} component={Textarea}
            validate={[required, maxLength10]} placeholder={'Post message'}
            />
            <button>Add post</button>
        </form>
    )
}

const MyPostReduxForm = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPostText)

export default MyPosts;