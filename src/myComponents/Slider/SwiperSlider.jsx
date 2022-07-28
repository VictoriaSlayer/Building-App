import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Thumbs} from 'swiper';
import '../../../node_modules/swiper/swiper-bundle.css';
import './SwiperSlider.css';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Thumbs]);

function SwiperSlider(){
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slides = [];
  const thumbs = [];

  for(let i = 1; i < 10; i++) {
   slides.push(
    <SwiperSlide key={`masonry-img${i}`} tag="li"><img  src={`./Photos/${i}.jpg`} alt={`каменная кладка {i}`}/></SwiperSlide>
    );
    thumbs.push(
      <SwiperSlide key={`masonryThumbs-img${i}`} tag="li"><img  src={`./Photos/${i}.jpg`} alt={`каменная кладка {i}`}/></SwiperSlide>
    )
  }



  return (
    <>
    <Swiper tag="section" wrapperTag="ul" id="main"
    thumbs = {{swiper: thumbsSwiper}}
    spaceBetween={0}
    slidesPerView={3}
    navigation
    pagination
    >
      {slides}
  </Swiper>
  <Swiper
  id="thumbs"
  spaceBetween={0}
  slidesPerView={4}
  onSwiper={setThumbsSwiper}

  >
    {thumbs}
  </Swiper>
    </>
  );
}

export default SwiperSlider;