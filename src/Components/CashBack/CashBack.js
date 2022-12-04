import React from 'react';
import s from './CashBack.module.sass'
import visa from '../../../src/img/logos/visa.png'
import telegram from "../../img/telegram.svg";
import whatsApp from "../../img/whatsApp.svg";
import {Gallery} from "../Gallery/Gallery";

export const CashBack = () => {
    return (
        <div className={s.main}>
            <img className={s.image} src={visa} alt="visa image"/>
            <div className={s.title}>Возвращаем 10% со всех покупок на карту за честный отзыв.</div>
            <div className={s.part}>
                <div className={s.partTitle}>Условия: Присылайте Фото ваших полученных заказов нам в <a href="https://t.me/shop_abroad_support">тлг</a> и мы вернем вам 10% от ваших покупок на карту</div>
                <div className={s.partSubtitle}>Присылайте Фото ваших полученных заказов нам в тлг и мы вернем вам 10% от ваших покупок на карту</div>
                <Gallery/>
            </div>

        </div>
    );
};
