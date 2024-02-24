import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../assets/banner1.avif'
import banner2 from '../assets/banner2.avif'
import banner3 from '../assets/banner3.avif'
import banner4 from '../assets/banner4.avif'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function CommunityPartners() {
  return (
    <>
    <div className='p-10 rounded-md'>
    <h1 className='text-4xl text-center font-bold p-10'>Our Community Partners</h1>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img  src={banner1}/></SwiperSlide>
        <SwiperSlide><img  src={banner2}/></SwiperSlide>
        <SwiperSlide><img  src={banner3}/></SwiperSlide>
        <SwiperSlide><img  src={banner4}/></SwiperSlide>
       
      </Swiper>
    </div>
    </>
  );
}
