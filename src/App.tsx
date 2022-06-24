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
import {Dispatch, Store} from 'redux'
import store from './redux/redux-store';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {DialogsPagePropsType} from './redux/store';

type AppPropsType = {
    // addPost: (postMessage: string) => void
    // newPostsText: string
    // updateNewPostsCallBack: (newText: string) => void
    // store: string
    //  dispatch: (action: ActionsTypes) => void
    //  newMessageBody: string
    store: Store
    dispatch: Dispatch
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState()
    console.log(state)
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <Header/>
                <Navbar/>
                <div className='appWrapperContent'>
                    <Routes>
                        <Route path='/profile/*' element={<Profile
                            dispatch={props.dispatch}
                            store={store}
                            // dispatch={props.store.dispatch.bind(props.store)}
                            // postsProfile={state.profilePage}
                            // addPostCallBack={props.addPost.bind(props.store)}
                            // updateNewPostsCallBack={props.store.updateNewPostsText.bind(props.store)}
                            // newPostsText={props.store.getState().profilePage.newPostsText}
                        />}
                        />
                        {/*<Route path='/dialogs/*' element={<Dialogs*/}
                        {/*    dialogsPage={state.dialogsPage}*/}
                        {/*    newSendMessageText={props.store.getState().dialogsPage.newMessageBody}*/}
                        {/*    dispatch={props.dispatch}/>}*/}
                        {/*/>*/}
                        <Route path='/dialogs/*' element={<DialogsContainer
                            dialogsPage={state.dialogsPage}
                            newSendMessageText={props.store.getState().dialogsPage.newMessageBody}

                            dispatch={props.dispatch}
                            store={props.store}
                            />}
                        />
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
