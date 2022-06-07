import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';



export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store}
             dispatch={store.dispatch.bind(store)}
             // addPost={store.addPost.bind(store)}
             newPostsText={''}
             // updateNewPostsCallBack={store.updateNewPostsText.bind(store)}
        />, document.getElementById('root')
    );
}


rerenderEntireTree()

store.subscribe(rerenderEntireTree)