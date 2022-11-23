import React from 'react';
import s from './HowIsItWorks.module.sass'
import {Gallery} from "../Gallery/Gallery";
export const HowIsItWorks = ({setModalTypeOneOrder}) => {
    return (
        <div className={s.main}>
            <h2>Как это работает</h2>
            <div className={s.flexElements}>
                <div className={s.elem}>
                    <div className={s.sircle}>01</div>
                    <div className={s.title}>Вы</div>
                </div>
                <div className={s.elem}>
                    <div className={s.sircle}>02</div>
                    <div className={s.title}>Интернет-магазин</div>
                </div>
                <div className={s.elem}>
                    <div className={s.sircle}>03</div>
                    <div className={s.title}>Выбираете товар
                        и отправляете нам ссылки</div>
                </div>
                <div className={s.elem}>
                    <div className={s.sircle}>04</div>
                    <div className={s.title}>Заключаем договор и мы выкупаем ваш товар</div>
                </div>
                <div className={s.elem}>
                    <div className={s.sircle}>07</div>
                    <div className={s.title}>Вы и ваша посылка вместе</div>
                </div>
                <div className={s.elem}>
                    <div className={s.sircle}>06</div>
                    <div className={s.title}>Вы получаете заказ уже через 15 дней после отправки</div>
                </div>
                <div className={s.elem}>
                    <div className={s.sircle}>05</div>
                    <div className={s.title}>Получаем посылку с товаром и отправляем вам</div>
                </div>
                {/*{data.map(el => (*/}
                {/*    <div className={s.elem}>*/}
                {/*        <div className={s.sircle}>{el[0]}</div>*/}
                {/*        <div className={s.title}>{el[1]}</div>*/}
                {/*    </div>*/}
                {/*    )*/}
                {/*)}*/}
            </div>
            <button onClick={() => setModalTypeOneOrder(true)}>Сделать заказ</button>
            <Gallery/>

        </div>
    );
};
