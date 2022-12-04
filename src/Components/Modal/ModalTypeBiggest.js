import React, { useState } from "react";
import "./Modal.css";
import close from "../../img/close.svg";
import telegram from "../../img/telegram.svg";
import avito from "../../img/avito.svg";
import s from './ModalTypeBiggest.module.sass'
export  function ModalTypeBiggest({modal,setModal}) {

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modalMy')
    } else {
        document.body.classList.remove('active-modalMy')
    }

    return (
        <>
            {modal && (
                <div  className="myModal">
                    <div className="overlay">
                        <div className="modal-contentMy modal-contentBiggesMy">
                            <div className={s.position}>
                                <div className="close-modal" onClick={toggleModal}>
                                    <img src={close} alt="close"/>
                                </div>
                                <div className={s.title}>О нас</div>
                                <div className={s.subTitle}>Shop-Abroad — надёжный и быстрый сервис доставки заказов <br/> с любых интернет-магазинов мира.</div>
                                <div className={s.flexContent}>
                                    <div>
                                        <div className={s.itemOfFlex}>Доставка от 10 дней*</div>
                                        <div className={s.itemOfFlex}>Минимальная комиссия от 3% до 15%</div>
                                        <div className={s.itemOfFlex}>Собственные склады, никаких посредников</div>
                                    </div>
                                    <div>
                                        <div className={s.itemOfFlex}>Оформляем таможенные сборы</div>
                                        <div className={s.itemOfFlex}>Возможность возврата вещей</div>
                                        <div className={s.itemOfFlex}>Договор и гарантия</div>
                                    </div>
                                </div>
                                <div className={s.imagesFlex}>
                                    <div>
                                        <a className={s.links} href="https://t.me/shop_abroad">
                                            <img src={telegram} alt="telegram"/>
                                            <div>Telegram-канал</div>
                                        </a>

                                    </div>
                                    <div>
                                        <a className={s.links} href="https://www.avito.ru/user/629a95d34d6a977f7d5d563b34442b3b/profile?src=sharing">
                                            <img src={avito} alt="avito"/>
                                            <div>Авито</div>
                                        </a>

                                    </div>
                                </div>
                                <div className={s.littleSubtitle}>
                                    * Доставка от 10 дней возможна в города, где находятся наши распределительные пункты (Москва, Санкт-Петербург, Челябинск, Казань, Новосибирск)
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            )}
        </>
    );
}