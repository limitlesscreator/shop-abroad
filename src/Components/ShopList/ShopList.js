import React from 'react';
import s from './ShopList.module.sass'
import logos from '../../img/logos.png'
export const ShopList = ({setModalTypeOneOrder}) => {
    return (
        <div className={s.flexElems}>
            <h2 className={s.titleSicret}>Список магазинов</h2>
            <div><img src={logos} alt="logos"/></div>
            <div className={s.rightSide}>
                <h2 className={s.title}>Список магазинов</h2>
                <div className={s.firstSub}>
                    <div className={s.mainPart}>В данном разделе представлены магазины, <br/>
                        с которыми отлажена система выкупа и доставки.</div>
                    <div className={s.halfMain}>Если в списке нет магазина, с которого вы хотите  <br/>
                        сделать заказ, то вы можете связаться с нами и мы <br/> оперативно ответим, сможем ли мы доставить.</div>
                </div>
                <div className={s.secondSub}>
                    <div className={s.mainPart}>
                        Если ссылка на магазин не открывается, <br/>
                        то попробуйте воспользоваться VPN сервисом.
                    </div>
                </div>
                <button onClick={() => setModalTypeOneOrder(true)} className={s.orderBtn}>Сделать заказ</button>
            </div>
        </div>
    );
};
