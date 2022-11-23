import React, { useState } from "react";
import "./Modal.css";
import telegram from "../../img/telegram.svg";
import whatsapp from "../../img/whatsApp.svg";
import close from "../../img/close.svg";
import s from './ModalTypeOne.module.sass'
import {CheckBox} from "../CheckBox/CheckBox";
export default function ModalTypeOne({title,modal,setModal}) {

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
                        <div className={s.socials}>
                            <img src={telegram} alt="telegram"/>
                            <img src={whatsapp} alt="whatsapp"/>
                        </div>
                        <div className={s.positionDiv}>
                            <CheckBox/>
                            <span className={s.notRobot}>Я не робот</span>
                        </div>
                        <p className={s.subTitle}>
                            {title}
                        </p>
                        <div className="close-modal" onClick={toggleModal}>
                            <img src={close} alt="close"/>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}