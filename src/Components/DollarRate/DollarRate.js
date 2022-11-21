import React, {useEffect, useState} from 'react';
import s from './DollarRate.module.sass'
import asos from '../../img/asos.png'
import stockX from '../../img/stockX.png'
import amazon from '../../img/amazon.png'
import farfetch from '../../img/farfetch.png'

export const DollarRate = () => {
    const [rate, setRate] = useState(null)

    useEffect(() => {
        let res = fetch('https://shop-abroad.ru/api/parameters?t=1612315498',{
            cache: "no-cache"
        })
        res.then(data => data.json()).then(rate => setRate(rate.exchangeRate))
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
                    <div className={s.rate}>{rate ? `Курс ${rate}` : null}</div>
                </div>
                <div className={s.subtitle}>Надёжный и быстрый сервис доставки заказов с любых интернет магазинов мира</div>
                <div className={s.buttons}>
                    <button>Как это работает</button>
                    <button>Заказать</button>
                    <button>Отследить посылку</button>
                </div>
            </div>
        </div>
    );
};
