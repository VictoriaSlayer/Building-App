import React from 'react';

import {useParams} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, History} from 'swiper';
import '../../../node_modules/swiper/swiper-bundle.css';
import './SwiperSlider.css';

import {Link} from "react-router-dom";

function SwiperSlider() {
    let {id} = useParams();

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
                preventInteractionOnTransition={true}
                modules={[Navigation, Pagination, History]}
                history={{
                    key: "",
                }}
            >
                {[...Array(10).keys()].map(i =>
                    <SwiperSlide key={`masonry-img${i}`} tag="li" containerClass="swiper-zoom-container" zoom="true" toggle="true" data-history={`${i}`}>
                        <img src={`/Photos/${i}.jpg`} alt={`фото ${i}`}/>
                    </SwiperSlide>
                )}
                <Link to={`/gallery`}>
                    <button className="closeButton">{'\u00d7'}</button>
                </Link>
            </Swiper>

        </>
    );
}

export default SwiperSlider;