import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                {/*<NavLink to='/profile' className={({isActive})=>(isActive ? s.activeLink: " ")}>Profile</NavLink>*/}
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                {/*<NavLink to='/dialogs' className={({isActive})=>(isActive ? s.activeLink: " ")}>Messages</NavLink>*/}
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                {/*<NavLink to='/users' className={({isActive})=>(isActive ? s.activeLink: " ")}>Users</NavLink>*/}
                <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                {/*<NavLink to='/news' className={({isActive})=>(isActive ? s.activeLink: " ")}>News</NavLink>*/}
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                {/*<NavLink to='/music' className={({isActive})=>(isActive ? s.activeLink: " ")}>Music</NavLink>*/}
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                {/*<NavLink to='/settings' className={({isActive})=>(isActive ? s.activeLink: " ")}>Settings</NavLink>*/}
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;