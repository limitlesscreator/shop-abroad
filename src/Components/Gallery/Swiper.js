import React, {useEffect, useRef, useState} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import s from './Swiper.module.sass'


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import "./styles.css";
// import required modules
import {FreeMode, Keyboard, Mousewheel, Navigation, Pagination, Thumbs} from "swiper";

export function ProSwiper(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [numberPic, setNumberPic] = useState(3)
    const activeBtn = `${s.usualBtn} ${s.active}`
    const ref = useRef()

    return (
        <div className={s.main}>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                // pagination={{
                //     clickable:true,
                //     }}
                className="mySwiper2"
            >
                {props.images.map((el, index) => (
                    <SwiperSlide key={index}>
                        <img src={el} />
                    </SwiperSlide>
                ))}

            </Swiper>
            <div className={'myDiv'}>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                // freeMode={true}
                // watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
                cssMode={true}
            >
                {props.images.map((el,index) => (
                    <SwiperSlide key={index} onClick={() => console.log(`wow ${index + 1}`)} id={`btn${index + 1}`}>
                        <img src={el} />
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>

        </div>
    );
}
