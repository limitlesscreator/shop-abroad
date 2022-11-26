import React, { useState } from "react";
import "./Modal.css";
import close from "../../img/close.svg";
import s from './ModalTypeOne.module.sass'
export  function ModalTypeTwo({modal,setModal,packageStatus}) {
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
                <div className="myModal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-contentMy">
                        <div className={s.title}>Статус заказа</div>
                        <p style={{whiteSpace: "nowrap"}} className={s.subTitle}>
                            {packageStatus === "В пути" ? <> Выкуплен у магазина, ожидает <br/> поступления на склад.</>: null}
                            {packageStatus !== "В пути" ? <> Не можем найти ваш заказ :( <br/> проверьте код</>: null}
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