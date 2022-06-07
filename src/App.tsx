import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import state, {ActionsTypes, RootStatePropsType, StoreType} from './redux/state';

type AppPropsType = {
    // state: RootStatePropsType

    // addPost: (postMessage: string) => void
    newPostsText: string
    // updateNewPostsCallBack: (newText: string) => void
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

const App = (props: AppPropsType) => {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <Header/>
                <Navbar/>
                <div className='appWrapperContent'>
                    <Routes>
                        <Route path='/profile/*' element={<Profile
                            dispatch={props.dispatch}
                            // dispatch={props.store.dispatch.bind(props.store)}
                            postsProfile={state.profilePage}
                            // addPostCallBack={props.addPost.bind(props.store)}
                            // updateNewPostsCallBack={props.store.updateNewPostsText.bind(props.store)}
                            newPostsText={props.store.getState().profilePage.newPostsText}
                        />}/>
                        <Route path='/dialogs/*' element={<Dialogs  dialogsPage={state.dialogsPage} />}/>
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/music/*' element={<Music/>}/>
                        <Route path='/settings/*' element={<Settings/>}/>
                    </Routes>
                </div>


            </div>
        </BrowserRouter>
    );
}

export default App;
