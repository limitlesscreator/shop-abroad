import React from 'react';
import s from './Returns.module.sass'
import Accordion from "react-bootstrap/Accordion";
import whatsApp from "../../../img/whatsApp.svg";
import avito from "../../../img/avito.svg";
import telegram from "../../../img/telegram.svg";

export const Returns = () => {
    return (
        <>
            <div className={s.main}>
                <div className={'titleForModals'}>
                    Возврат товара
                </div>
                <div className={s['wrapper']}>
                    <div className={s['container']}>
                      <div className={s.clasicSub}>Вы можете произвести возврат товара, который был приобретён на нашем сайте в течение 14 дней с момента получения заказа.</div>
                      <div className={s.clasicSub}>Если у вас появилась потребность в возврате товара — вам необходимо связаться с нашей службой поддержки, мы предоставим вам подробную инструкцию.</div>
                      <div className={s.clasicSub}>Просим вас убедиться в том, что товар сохранил свой первоначальный вид, включая упаковку производителя и сопутствующие ярлыки.</div>
                      <div className={s.clasicSub}>Возврат денежных средств осуществляется в течение 10-30 рабочих дней с момента получения посылки нашим представителем.</div>
                      <div className={s.clasicSub}>Всегда можете обратиться в нашу  службу поддержки с 11 до 22 ежедневно по Московскому времени.</div>
                        <div className={s.littleTitle}>Служба поддержки</div>
                        <div className={s.imagesFlex}>
                            <a href="https://t.me/shop_abroad_support">
                                <div>
                                    <img src={telegram} alt="telegram"/>
                                </div>
                            </a>
                            <a href="https://wa.me/message/T5JVB2BEB4BPP1">
                                <div>
                                    <img src={whatsApp} alt="whatsup"/>
                                </div>
                            </a>
                        </div>
                        <a className={s.tel} href="tel:88003339183">8 (800) 333 9183</a>
                        <div className={s.mail}>support@shop-abroad.ru</div>
                    </div>

                </div>
            </div>
        </>
    );
};
