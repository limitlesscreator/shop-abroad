import React from 'react';
import s from './Footer.module.sass'
import avito from '../../../src/img/avito.svg'
export const Footer = ({changeUrl}) => {
    return (
        <footer>
            <div className={s.buttons}>
                {/*<button >Наш TLG канал</button>*/}
                <button onClick={() => changeUrl('/list')}>Список магазинов</button>
                <button onClick={() => changeUrl('/contact')}>Связаться</button>
                <button onClick={() => changeUrl('/information')}>Информация</button>
            </div>
            <a href="#">политика конфиденциальности</a>
            {/*<a href="#"><img src={avito} alt="avito"/></a>*/}
        </footer>
    );
};
