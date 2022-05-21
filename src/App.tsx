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
import {addPost, RootStatePropsType} from './redux/state';

type AppPropsType = {
    state: RootStatePropsType
    addPost: (postMessage: string) => void
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <Header/>
                <Navbar/>
                <div className='appWrapperContent'>
                    <Routes>
                        <Route path='/profile/*' element={<Profile  state={props.state.profilePage} addPost={addPost}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs  state={props.state.dialogsPage} />}/>
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
