import React from 'react';
import s from './Footer.module.sass'
export const Footer = ({changeUrl}) => {
    return (
        <footer>
            <div className={s.buttons}>
                <button>Наш TLG канал</button>
                <button onClick={() => changeUrl('/list')}>Список магазинов</button>
                <button onClick={() => changeUrl('/contact')}>Связаться</button>
                <button onClick={() => changeUrl('/information')}>Информация</button>
            </div>
            <a href="#">политика конфиденциальности</a>
        </footer>
    );
};
