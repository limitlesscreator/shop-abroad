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
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <div className={s.position}>
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
                                    <img src={telegram} alt="telegram"/>
                                    <div>Telegram-канал</div>
                                </div>
                                <div>
                                    <img src={avito} alt="avito"/>
                                    <div>Авито</div>
                                </div>
                            </div>
                            <div className="close-modal" onClick={toggleModal}>
                                <img src={close} alt="close"/>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}