import React from 'react';
import telegram from '../../img/telegram.svg'
import whatsapp from '../../img/whatsApp.svg'
import phone from '../../img/phone.svg'
import s from './Contacts.module.sass'
export const Contacts = () => {
    return (
        <div className={s.main}>
                <h2>Контакты</h2>
                <div className={s.flexElements}>
                    <div>
                        <h3 className={s.title}>Для заказа посылок</h3>
                        <div className={s.socials}>
                            <a  style={{cursor: 'pointer'}} href="https://t.me/shop_abroad"><img src={telegram} alt="telegram"/></a>

                            <a style={{cursor: 'pointer'}} href="https://wa.me/message/T5KNG6Q7CQ7XM1"><img src={whatsapp} alt="whatsapp"/></a>
                        </div>
                        <div className={s.subTitle}>
                            Заказы обрабатываеются <br/>
                            с 11:00 до 22:00 по МСК
                        </div>
                    </div>
                    <div>
                        <h3 className={s.title}>Служба поддержки</h3>
                        <div className={s.socials}>
                            <a href="https://t.me/shop_abroad_support"><img src={telegram} alt="telegram"/></a>
                            <a style={{cursor: 'pointer'}} href="https://wa.me/message/T5JVB2BEB4BPP1"><img src={whatsapp} alt="whatsapp"/></a>
                        </div>
                        <div className={s.subTitle}>
                            Служба поддержки работает <br/>
                            с 11:00 до 22:00 по МСК
                        </div>                        <div className={s.subTitle}>
                        support@shop-abroad.ru
                        </div>
                    </div>
                    <div className={s.specialNumber}>
                        <h3 className={s.title}>Клиентский сервис</h3>
                        <div className={s.number}>
                            {/*<div className={s.numberPhone}>8 (800) 333 9183 <img className={s.logoNumber} src={phone} alt="phone"/></div>*/}
                            <a href={'tel:+88003339183'} className={s.numberPhone}>8 (800) 333 9183 <img className={s.logoNumber} src={phone} alt="phone"/></a>
                        </div>
                        <div className={s.subTitle}>
                            ООО "ЖОЗЕФИНА" <br/>
                            ИНН 9723132333<br/>
                            ОГРН 5077746358366
                        </div>

                    </div>
                </div>
        </div>
    );
};
