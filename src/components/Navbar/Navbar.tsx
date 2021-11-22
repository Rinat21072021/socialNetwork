import React from 'react';
import s from "./Navbar.module.css";
import Setting from "../Setting/Setting";
import { NavLink } from 'react-router-dom';
const Navbar= () =>{
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/Profile' activeClassName={s.activeClassName}>Profile</NavLink>
            </div>
            {/*<div className={s.item}>*/}
            {/*    <NavLink to='/ProfileInfo' activeClassName={s.activeClassName}>Profile</NavLink>*/}
            {/*</div>*/}
            <div className={s.item}>
                <NavLink to='/Dialogs' activeClassName={s.activeClassName}>Massage</NavLink>
            </div >
            <div className={s.item}>
                <NavLink to='/News' activeClassName={s.activeClassName}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeClassName}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Setting' activeClassName={s.activeClassName}>Setting</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Friends' activeClassName={s.activeClassName}>Friends</NavLink>
            </div>
        </nav>
    )
}
export default Navbar;