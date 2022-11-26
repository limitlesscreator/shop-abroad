import React, {useState} from 'react';
import s from './TariffComission.module.sass'
import Accordion from 'react-bootstrap/Accordion';

export const TariffComission = ({changeUrl}) => {


    return (
        <div className={s.main}>
            <div  className={s.title}>
                Тарифы и Комиссия
            </div>
            <button onClick={() => changeUrl('/tariffs')}>Тарифы доставки</button>
            <button onClick={() => changeUrl('/commission')}>Комиссия</button>
        </div>
    );
};
