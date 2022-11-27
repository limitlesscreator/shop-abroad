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
                            <img src={telegram} alt="telegram"/>
                            <img src={whatsapp} alt="whatsapp"/>
                        </div>
                        <div className={s.subTitle}>
                            Заказы обрабатываеются <br/>
                            с 11:00 до 22:00 по МСК
                        </div>
                    </div>
                    <div>
                        <h3 className={s.title}>Служба поддержки</h3>
                        <div className={s.socials}>
                            <img src={telegram} alt="telegram"/>
                            <img src={whatsapp} alt="whatsapp"/>
                        </div>
                        <div className={s.subTitle}>
                            Служба поддержки работает <br/>
                            с 11:00 до 22:00 по МСК
                        </div>
                    </div>
                    <div className={s.specialNumber}>
                        <h3 className={s.title}>Клиентский сервис</h3>
                        <div className={s.number}>
                            <img className={s.logoNumber} src={phone} alt="phone"/>
                            <div className={s.numberPhone}>8 (800) 233 2321</div>
                        </div>
                        <div className={s.subTitle}>
                            ООО <br/>
                            ИНН <br/>
                            ОГРН
                        </div>

                    </div>
                </div>
        </div>
    );
};
