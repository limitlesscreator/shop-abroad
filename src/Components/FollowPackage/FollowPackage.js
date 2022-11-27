import React, {useEffect, useState} from 'react';
import s from './FollowPackage.module.sass'
import telegram from '../../img/telegram.svg'
import whatsapp from '../../img/whatsApp.svg'
import search from '../../img/search.svg'
import {CheckBox} from "../CheckBox/CheckBox";
import {ModalTypeTwo} from "../Modal/ModalTypeTwo";

export const FollowPackage = ({setModalCheckPackage, modalCheckPackage}) => {
    const [trackNumber, setTrackNumber] = useState('')
    const [packageStatus, setPackageStatus] = useState('')
    const [isChecked, setIsChecked] = useState(false);
    const [errorBox, setErrorBox] = useState(false)

    const  checkPackage = () =>{
        if (isChecked){
            let res = fetch(`https://shop-abroad.ru/api/orders/${trackNumber}?t=1612314296`,{
            })
            res.then(data => data.json()).then(status => setPackageStatus(status.status))
            setModalCheckPackage(true)
        }
        else {
            setErrorBox(true)
        }
    }

    useEffect(() => {
        setErrorBox(false)
    },[isChecked])

    return (
        <div className={s.main}>
            <ModalTypeTwo packageStatus={packageStatus}  modal={modalCheckPackage} setModal={setModalCheckPackage}/>
            <div>
                    <h2 className={s.title}>Отследить посылку</h2>
                    <div className={s.flexElements}>
                        <input onChange={(e) => setTrackNumber(e.currentTarget.value)} value={trackNumber} placeholder={'Введите номер посылки'} type="text"/>
                        <img src={search} alt="search"/>
                        <button onClick={checkPackage}>Проверить</button>
                    </div>
                    <div className={s.capcha}>
                        {/*<input type="checkbox"/> Я не робот*/}
                        <form action="">
                            <CheckBox isChecked={isChecked} setIsChecked={setIsChecked}/>
                            <span className={s.notRobot}>Я не робот</span>
                        </form>
                        {errorBox ? <div className={s.error}>Поставьте пожалуйста отметку</div> : null}
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
                        <a href="https://t.me/shop_abroad"><img src={telegram} alt="telegram"/></a>
                        <a href="https://wa.me/message/T5KNG6Q7CQ7XM1"><img src={whatsapp} alt="whatsApp"/></a>
                    </div>
                    <div className={s.subTitleSocial}>Служба поддержки работает
                        с 11:00 до 22:00 по МСК</div>
                </div>
        </div>
    );
};
