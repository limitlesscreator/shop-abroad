import React from 'react';
import s from './Returns.module.sass'
import Accordion from "react-bootstrap/Accordion";
import whatsApp from "../../../img/whatsApp.svg";
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
                      <div className={s.clasicSub}>всегда можете обратиться в нашу  службу поддержки с 10 до 21 ежедневно по Московскому времени.</div>
                        <div className={s.littleTitle}>Служба поддержки</div>
                        <div className={s.imagesFlex}>
                            <div>
                                <img src={whatsApp} alt="whatsApp"/>
                                <div>Telegram-канал</div>
                            </div>
                            <div>
                                <img src={telegram} alt="avito"/>
                                <div>Авито</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};
