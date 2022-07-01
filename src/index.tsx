import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import StoreContext, {Provider} from './StoreContext';
import {BrowserRouter} from 'react-router-dom';


export let rerenderEntireTree = () => {
    ReactDOM.render(

            <Provider store={store}>

                <App />

            </Provider>
      , document.getElementById('root')
    );
}


rerenderEntireTree()

store.subscribe(rerenderEntireTree)

