import React from 'react';
import s from './Header.module.sass'
import logo from '../../img/logo.svg'
import telegram from '../../img/telegram.svg'
import whatsapp from '../../img/whatsApp.svg'

export const Header = () => {
    return (
        <header>
            <div className={s.logo}><img src={logo} alt="logo"/></div>
            <nav>
                <ul>
                    <li><a href="#">Как это работает</a></li>
                    <li><a href="#">Отследить посылку</a></li>
                    <li><a href="#">Список магазинов</a></li>
                    <li><a href="#">Связаться</a></li>
                    <li><a href="#">Информация</a></li>
                </ul>
            </nav>
            <div className={s.socials}>
                <img src={whatsapp} alt="whatsApp"/>
                <img src={telegram} alt="telegram"/>
            </div>
        </header>
    );
};
