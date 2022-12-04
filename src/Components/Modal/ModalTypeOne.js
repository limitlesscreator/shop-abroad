import React, { useState } from "react";
import "./Modal.css";
import telegram from "../../img/telegram.svg";
import whatsapp from "../../img/whatsApp.svg";
import close from "../../img/close.svg";
import s from './ModalTypeOne.module.sass'
import {CheckBox} from "../CheckBox/CheckBox";

export default function ModalTypeOne({title,modal,setModal}) {
    const [isChecked, setIsChecked] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };
    return (
        <>
            {modal && (
                <div className="myModal">
                    <div className="overlay">
                        <div className="modal-contentMy">
                            <div className={s.socials}>
                                <a href="https://t.me/shop_abroad"><img src={telegram} alt="telegram"/></a>
                                <a href="https://wa.me/message/T5KNG6Q7CQ7XM1"><img src={whatsapp} alt="whatsApp"/></a>
                            </div>
                            {/*<div className={s.positionDiv}>*/}
                            {/*    <CheckBox isChecked={isChecked} setIsChecked={setIsChecked}/>*/}
                            {/*    <span className={s.notRobot}>Я не робот</span>*/}
                            {/*</div>*/}
                            <p className={s.subTitle}>
                                {title}
                            </p>
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