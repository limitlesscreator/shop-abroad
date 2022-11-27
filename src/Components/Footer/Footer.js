import React from 'react';
import s from './Footer.module.sass'
import avito from '../../../src/img/avito.svg'
export const Footer = ({changeUrl}) => {
    return (
        <footer>
            <a href="https://docs.google.com/document/d/1S8d8ZeAq9wSlFzc_tbq52YnT0B-rVPvPWcmYjy8oGKo/edit">политика конфиденциальности</a>
            <div className={s.buttons}>
                {/*<button >Наш TLG канал</button>*/}
                <button onClick={() => changeUrl('/list')}>Список магазинов</button>
                <button onClick={() => changeUrl('/contact')}>Связаться</button>
                <button onClick={() => changeUrl('/information')}>Информация</button>
            </div>
            {/*<a href="#"><img src={avito} alt="avito"/></a>*/}
        </footer>
    );
};
