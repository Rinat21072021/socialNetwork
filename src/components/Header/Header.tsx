import React, {ReactNode} from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Header.module.css";

type PropsType={
    login: string
    isAuth:boolean
    // email:string
    // userId: number
    // children?: ReactNode
}

const Header= (props: PropsType) =>{
    return (
        <header className={s.header}>

            <img src="https://pm1.narvii.com/6695/4d03e6d853f0276b372a70e3c3caf1998c048f15_128.jpg"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={`/login`}>Login</NavLink> }

            </div>
        </header>
    )
}
export default Header;