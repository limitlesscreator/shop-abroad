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

    // if (modal) {
    //     // document.body.classList.add('active-modalMy')
    //     document.body.style.overflowY = 'none'
    //
    //     console.log('add')
    // }
    // if (modal){
    //     document.body.style.overflowY = 'auto'
    // }
    // else {
    //     console.log('what')
    //
    //     // document.body.classList.remove('active-modalMy')
    // }

    return (
        <>
            {modal && (
                <div className="myModal">
                    <div className="overlay">
                        <div className="modal-contentMy">
                            <div className={s.socials}>
                                <img src={telegram} alt="telegram"/>
                                <img src={whatsapp} alt="whatsapp"/>
                            </div>
                            <div className={s.positionDiv}>
                                <CheckBox isChecked={isChecked} setIsChecked={setIsChecked}/>
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

                </div>
            )}
        </>
    );
}