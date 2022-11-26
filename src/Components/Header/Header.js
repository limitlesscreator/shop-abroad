import React from 'react';
import s from './Header.module.sass'
import logo from '../../img/logo.svg'
import telegram from '../../img/telegram.svg'
import whatsapp from '../../img/whatsApp.svg'
import {Link, NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <div className={s.position}>
                <Link to={'/'} className={s.logo}><img src={logo} alt="logo"/></Link>
                <div className={s.nav}>
                    <ul>
                        <NavLink style={({ isActive }) => isActive ? {color:'#3253FF'} : {}} to={'/howitworks'}>Как это работает</NavLink>
                        <NavLink style={({ isActive }) => isActive ? {color:'#3253FF'} : {}} to={'/follow'}>Отследить посылку</NavLink>
                        <NavLink style={({ isActive }) => isActive ? {color:'#3253FF'} : {}} to={'/list'}>Список магазинов</NavLink>
                        <NavLink style={({ isActive }) => isActive ? {color:'#3253FF'} : {}} to={'/contact'}>Связаться</NavLink>
                        <NavLink style={({ isActive }) => isActive ? {color:'#3253FF'} : {}} to={'/information'}>Информация</NavLink>
                    </ul>
                </div>
                <div className={s.socials}>
                    <img src={whatsapp} alt="whatsApp"/>
                    <img src={telegram} alt="telegram"/>
                </div>
            </div>
        </header>
    );
};
