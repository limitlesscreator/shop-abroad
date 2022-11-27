import React, {useEffect, useState} from 'react';
import s from './DollarRate.module.sass'
import asos from '../../img/asos.png'
import stockX from '../../img/stockX.png'
import amazon from '../../img/amazon.png'
import farfetch from '../../img/farfetch.png'
import {HowIsItWorks} from "../HowIsItWorks/HowIsItWorks";

export const DollarRate = ({setModalTypeOneOrder, changeUrl, modalCheckPackage, setModalCheckPackage}) => {
    const [rate, setRate] = useState(null)

    useEffect(() => {
        let res = fetch('https://shop-abroad.ru/api/data', {
            cache: "no-cache"
        })
        res.then(data => data.json()).then(rate => setRate(rate.currencies))
    })

    return (
        <div className={s.main}>
            <div className={s.logos}>
                <img src={asos} alt="asos"/>
                <img src={stockX} alt="stockX"/>
                <img src={amazon} alt="amazon"/>
                <img src={farfetch} alt="farfetch"/>
            </div>

            <div className={s.delivery}>
                <div className={s.flexElem}>
                    <h1 className={s.title}><span><span>Доставим ваши заказы со всего мира за 15 дней</span></span></h1>
                    <div className={s.rate}>{rate ? <div>
                            <div>Курс $ {rate[0].exchange_rate}</div>
                            <div>€ {rate[1].exchange_rate}</div>
                        </div>

                        : null}
                    </div>
                </div>
                <div className={s.subtitle}>Надёжный и быстрый сервис доставки заказов с любых интернет магазинов мира
                </div>
                <div className={s.buttons}>
                    <button onClick={() => changeUrl('/howitworks')}>Как это работает</button>
                    <button onClick={() => setModalTypeOneOrder(true)}>Заказать</button>
                    <button onClick={() => changeUrl('/follow')}>Отследить посылку</button>
                </div>
                <div className={s.buttonsSecondLine}>
                    <a href="https://t.me/shpbrd"><button onClick={() => setModalTypeOneOrder(true)}>Наш TLG канал</button></a>
                </div>
            </div>


            <HowIsItWorks setModalTypeOneOrder={setModalTypeOneOrder}/>
        </div>
    );
};
