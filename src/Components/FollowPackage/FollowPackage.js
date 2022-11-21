import React, {useState} from 'react';
import s from './FollowPackage.module.sass'
import telegram from '../../img/telegram.svg'
import whatsapp from '../../img/whatsApp.svg'
import search from '../../img/search.svg'
import {CheckBox} from "../CheckBox/CheckBox";

export const FollowPackage = () => {
    const [trackNumber, setTrackNumber] = useState('')
    const [packageStatus, setPackageStatus] = useState('')
    const [isChecked, setIsChecked] = useState(false)

    const  checkPackage = () =>{
        let res = fetch(`https://shop-abroad.ru/api/orders/${trackNumber}?t=1612314296`,{
        })
        res.then(data => data.json()).then(status => setPackageStatus(status.status))
    }

    return (
        <div className={s.main}>
                <div>
                    <h2 className={s.title}>Отследить посылку</h2>
                    <div className={s.flexElements}>
                        <input onChange={(e) => setTrackNumber(e.currentTarget.value)} value={trackNumber} placeholder={'Введите номер посылки'} type="text"/>
                        <img src={search} alt="search"/>
                        <button onClick={checkPackage}>Проверить</button>
                    </div>
                    <div className={s.capcha}>
                        {/*<input type="checkbox"/> Я не робот*/}
                        <CheckBox/>
                        <span className={s.notRobot}>Я не робот</span>
                    </div>
                    {/*<div style={{color: 'white', fontSize:'50px'}}>Status: {packageStatus}</div>*/}
                    <div className={s.subTitle}>
                        Введите номер вашего заказа. Он был отправлен вам на почту и по смс. <br/>
                        Все заказы появляются в системе в течение 48 часов после оплаты. <br/>
                        <br/><br/>
                        В случае, если возникли проблемы с отслеживанием заказа, обратитесь<br/>
                        в службу поддержки.
                    </div>
                </div>
                <div className={s.circle}>
                    <div className={s.socials}>
                        <img src={telegram} alt="telegram"/>
                        <img src={whatsapp} alt="whatsapp"/>
                    </div>
                    <div className={s.subTitleSocial}>Служба поддержки работает
                        с 11:00 до 22:00 по МСК</div>
                </div>
        </div>
    );
};
