import React, {useState} from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination, History} from 'swiper';
import '../../../node_modules/swiper/swiper-bundle.css';
import './SwiperSlider.css';

import {Link, Routes, Route} from "react-router-dom";

SwiperCore.use([Navigation, Pagination]);

function SwiperSlider(){
  let {id} = useParams();
  let navigate = useNavigate();
  let closeButton = () => navigate(-1);

  const slides = [];
//
  for(let i = 0; i < 10; i++) {
   slides.push(
    <SwiperSlide key={`masonry-img${i}`} tag="li" containerClass="swiper-zoom-container" zoom="true" toggle="true" data-history={`${i}`}><img src={`/Photos/${i}.jpg`} alt={`фото ${i}`}/>

          <button className="closeButton" onClick = {closeButton}>{'\u00d7'}</button>
    </SwiperSlide>
    );
  }

  return (
    <>
      <Swiper
      tag="section" wrapperTag="ul" id="main"
      initialSlide={id}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination
      onSlideToClickedSlide={true}
      speed={0}
      preventInteractionOnTransition = {true}
      modules={[Navigation, Pagination, History]}
      history={{
        key: "slide",
      }}
      >
      {slides}
      </Swiper>

    </>
  );
}

export default SwiperSlider;