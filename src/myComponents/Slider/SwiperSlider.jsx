import React, {useState} from 'react';

import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import '../../../node_modules/swiper/swiper-bundle.css';
import './SwiperSlider.css';

SwiperCore.use([Navigation, Pagination]);

function SwiperSlider(){
  let {id} = useParams();

  const slides = [];

  for(let i = 1; i < 11; i++) {
   slides.push(
    <SwiperSlide key={`masonry-img${i}`} tag="li" containerClass="swiper-zoom-container" zoom="true" toggle="true"><img src={`/Photos/${i}.jpg`} alt={`каменная кладка {i}`}/></SwiperSlide>
    );
  }

  return (
    <Swiper tag="section" wrapperTag="ul" id="main"
    initialSlide={id}
    spaceBetween={0}
    slidesPerView={1}
    navigation
    pagination
    onSlideToClickedSlide={true}
    >
      {slides}
  </Swiper>
  );
}

export default SwiperSlider;