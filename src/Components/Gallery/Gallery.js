import React from 'react';
import s from './Gallery.module.sass'
import {productImages} from "./Images";
import {ProSwiper} from "./Swiper";
import avito from "../../img/avito.svg";
export const Gallery = () => {
    return (
        <div className={s.main}>
            <h2>Что уже получили</h2>
            <ProSwiper images={productImages}/>
            <div className={s.telegramAvito}>
                <a className={'TotalLink'} href="https://t.me/shpbrd"><button>Наш TLG канал</button></a>
                    <div className={s.avito}><a href="#"><img  src={avito} alt="avito"/></a></div>
            </div>
        </div>
    );
};
