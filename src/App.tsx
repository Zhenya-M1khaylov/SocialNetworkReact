import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {Login} from './components/Login/Login';


type AppPropsType = {
    // addPost: (postMessage: string) => void
    // newPostsText: string
    // updateNewPostsCallBack: (newText: string) => void
    //  newMessageBody: string
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='appWrapperContent'>
                        <Route path='/profile/:userID?/' render={()=><ProfileContainer/>}/>
                        <Route path='/dialogs/' render={()=><DialogsContainer/>}/>
                        <Route path='/news/' render={()=><News/>}/>
                        <Route path='/music/' render={()=><Music/>}/>
                        <Route path='/settings/' render={()=><Settings/>}/>
                        <Route path='/users/' render={()=><UsersContainer />}/>
                        <Route path='/login/' render={()=><Login />}/>
                </div>


            </div>
        </BrowserRouter>
    );
}

export default App;
