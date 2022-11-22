import React from 'react';
import s from './Gallery.module.sass'
import {productImages} from "./Images";
import {ProSwiper} from "./Swiper";
export const Gallery = () => {
    return (
        <div className={s.main}>
            <h2>Что уже получили</h2>
            <ProSwiper images={productImages}/>
        </div>
    );
};
