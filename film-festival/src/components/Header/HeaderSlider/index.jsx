import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './index.scss';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
export default function HeaderSlider() {
  return (
    <>
      <Swiper
      spaceBetween={30}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        effect={'fade'}
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-img1.jpg" alt="" />
            <div className="slide-content">
                <p>Select Production Present</p>
                <h2>Back to Nature</h2>
                <span>Written and directed by Haruki Tanaka/ Ireland 2012</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-img2.jpg" alt="" />
            <div className="slide-content">
                <p>Select Production Present</p>
                <h2>Into the cosmos</h2>
                <span>Written and directed by Haruki Tanaka/ Ireland 2012</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-img3.jpg" alt="" />
            <div className="slide-content">
                <p>Select Production Present</p>
                <h2>Wait by the train</h2>
                <span>Written and directed by Haruki Tanaka/ Ireland 2012</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/12/h4-rev-img4a.jpg" alt="" />
            <div className="slide-content">
                <p>Select Production Present</p>
                <h2>History of colour</h2>
                <span>Written and directed by Haruki Tanaka/ Ireland 2012</span>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
