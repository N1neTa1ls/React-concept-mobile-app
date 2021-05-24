import React from 'react';
import SwiperCore, { A11y } from 'swiper';
import BlogList from './Blog/BlogList'
import Date from './Date'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';

// install Swiper modules
SwiperCore.use([ A11y]);

function App() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide><BlogList /></SwiperSlide>
      <SwiperSlide><Date /></SwiperSlide>
    </Swiper>
  );
};
export default App;