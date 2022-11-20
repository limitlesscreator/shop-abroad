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
                <div>Как это работает</div>
                <div>Отследить посылку</div>
                <div>Список магазинов</div>
                <div>Связаться</div>
                <div>Информация</div>
            </nav>
            <div className={s.socials}>
                <img src={whatsapp} alt="whatsApp"/>
                <img src={telegram} alt="telegram"/>
            </div>
        </header>
    );
};
