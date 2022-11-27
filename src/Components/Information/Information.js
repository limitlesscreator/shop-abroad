import React from 'react';
import s from './Information.module.sass'
import {useNavigate} from "react-router";

export const Information = ({setBiggesModal}) => {
    const navigator = useNavigate()
    return (
        <div className={s.main}>
            <h2 className={s.title}>Информация</h2>
            <div className={s.buttons}>
                <div>
                    <button onClick={() => setBiggesModal(true)}>О нас</button>
                    <button onClick={() => navigator('/tarifComission')}>Тарифы и комиссия</button>
                    <button onClick={() => navigator('/returns')}>Возврат</button>
                </div>
                <div>
                    <button onClick={() => navigator('/faq')}>FAQ</button>
                    <button onClick={() => navigator('/bannedProducts')}>Список запрещённых товаров</button>
                    <a href="https://docs.google.com/document/d/1S8d8ZeAq9wSlFzc_tbq52YnT0B-rVPvPWcmYjy8oGKo/edit"><button>Политика</button></a>
                </div>
            </div>
        </div>
    );
};
