import React from 'react';
import s from './Footer.module.sass'
import avito from '../../../src/img/avito.svg'
export const Footer = ({changeUrl}) => {
    return (
        <footer>
            <div className={s.link}>
                <div onClick={() => changeUrl('/politics')} >Политика конфиденциальности</div>
                <div onClick={() => changeUrl('/agreement')} >Соглашение о предоставлении услуг сервисом</div>
                <div onClick={() => changeUrl('/vat')} >Возмещение Налога | VAT</div>
            </div>

            <div className={s.buttons}>
                {/*<button >Наш TLG канал</button>*/}
                <button onClick={() => changeUrl('/list')}>Список магазинов</button>
                <button onClick={() => changeUrl('/contact')}>Связаться</button>
                <button onClick={() => changeUrl('/information')}>Информация</button>
                <button onClick={() => changeUrl('/cashback')}>CashBack</button>
            </div>
            {/*<a href="#"><img src={avito} alt="avito"/></a>*/}
        </footer>
    );
};
