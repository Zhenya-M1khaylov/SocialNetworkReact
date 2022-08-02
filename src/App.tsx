import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


type AppPropsType = {
    // addPost: (postMessage: string) => void
    // newPostsText: string
    // updateNewPostsCallBack: (newText: string) => void
    //  newMessageBody: string
}

const App: React.FC<AppPropsType> = (props) => {
    // const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <Header/>
                <Navbar/>
                <div className='appWrapperContent'>
                    <Routes>
                        <Route path='/profile/*' element={<ProfileContainer
                            // dispatch={props.dispatch}
                            // store={store}

                            // dispatch={props.store.dispatch.bind(props.store)}
                            // postsProfile={state.profilePage}
                            // addPostCallBack={props.addPost.bind(props.store)}
                            // updateNewPostsCallBack={props.store.updateNewPostsText.bind(props.store)}
                            // newPostsText={props.newPostsText}
                        />}
                        />
                        {/*<Route path='/dialogs/*' element={<Dialogs*/}
                        {/*    dialogsPage={state.dialogsPage}*/}
                        {/*    newSendMessageText={props.store.getState().dialogsPage.newMessageBody}*/}
                        {/*    dispatch={props.dispatch}/>}*/}
                        {/*/>*/}
                        <Route path='/dialogs/*' element={<DialogsContainer
                            // dialogsPage={store.getState().dialogsPage}
                            // newSendMessageText={store.getState().dialogsPage.newMessageBody}
                        />}
                        />
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/music/*' element={<Music/>}/>
                        <Route path='/settings/*' element={<Settings/>}/>
                        <Route path='/users/*' element={<UsersContainer />}/>
                    </Routes>
                </div>


            </div>
        </BrowserRouter>
    );
}

export default App;
