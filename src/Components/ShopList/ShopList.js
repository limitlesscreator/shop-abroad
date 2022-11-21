import React from 'react';
import s from 'ShopList.module.sass'
import logos from '../../img/logos.png'
export const ShopList = () => {
    return (
        <div className={s.flexElems}>
            <div><img src={logos} alt="logos"/></div>
            <div></div>
        </div>
    );
};
