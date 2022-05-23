import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStatePropsType, updateNewPostsText} from './redux/state';


export let rerenderEntireTree = (state: RootStatePropsType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} newPostsText={''} updateNewPostsCallBack={updateNewPostsText}/>, document.getElementById('root')
    );
}



