import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import '../../../node_modules/swiper/swiper-bundle.css';
import './SwiperSlider.css';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


function SwiperSlider(){
  return (
    <>
    <Swiper id="main"
    // install Swiper modules
    // modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
    <SwiperSlide><img src="./Photos/1.jpg" alt="картинка" /></SwiperSlide>
    <SwiperSlide><img src="./Photos/2.jpg" alt="картинка" /></SwiperSlide>
    <SwiperSlide><img src="./Photos/3.jpg" alt="картинка" /></SwiperSlide>
    <SwiperSlide><img src="./Photos/4.jpg" alt="картинка" /></SwiperSlide>
    <SwiperSlide><img src="./Photos/5.jpg" alt="картинка" /></SwiperSlide>
    <SwiperSlide><img src="./Photos/6.jpg" alt="картинка" /></SwiperSlide>
    <SwiperSlide><img src="./Photos/7.jpg" alt="картинка" /></SwiperSlide>
    <SwiperSlide><img src="./Photos/8.jpg" alt="картинка" /></SwiperSlide>
    <SwiperSlide><img src="./Photos/9.jpg" alt="картинка" /></SwiperSlide>

  </Swiper>
    </>
  );
}

export default SwiperSlider;