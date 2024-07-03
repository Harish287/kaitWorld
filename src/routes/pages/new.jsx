import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Grid, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}




<div className=" w-[100%]">
          <div className="flex justify-content-center">
            <div className="col-sm-9">
              <div>
                {/* <h2 className=' text-center text-[50px] mb-9 font-bold' style={{ fontFamily: "Nunito,sans-serif" }}>Event Starts In</h2> */}
              </div>
              {/* <h6 className='text-center lg:text-7xl   lg:text-[56px] lg:leading-[80px] font-extrabold relative' style={{fontFamily:"Nunito,sans-serif"}} id="conferenceTimingClock">{countdown}</h6> */}
            </div>
          </div>
        </div>

        {/* <div className="recentEvents container mx-auto">
        <div className="content">
          <h6>Recent Events</h6>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {eventImages.map((image, index) => (
            <div className="col-sm-4" key={index}>
              <div className="box">
                <img src={image} className="img-fluid" alt={`Recent Event ${index + 1}`} />
              </div>
              <div className="boxContent">
                <h6>Tech Expo 2023</h6>
                <p>
                  Explore the future of technology at the Tech Expo 2023. This dynamic event showcases the latest innovations in AI, robotics, IoT, and more. 
                  Engage with industry leaders, witness live demos, and gain insights into emerging trends that are reshaping the tech landscape.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div> */}
     {/* <div className="recentEvents container mx-auto">
        <div className="content">
          <h6>Recent Events</h6>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {eventImages.map((image, index) => (
            <div className="col-sm-4" key={index}>
              <div className="box">
                <img src={image} className="img-fluid" alt={`Recent Event ${index + 1}`} />
              </div>
              <div className="boxContent">
                <h6>Tech Expo 2023</h6>
                <p>
                  Explore the future of technology at the Tech Expo 2023. This dynamic event showcases the latest innovations in AI, robotics, IoT, and more. 
                  Engage with industry leaders, witness live demos, and gain insights into emerging trends that are reshaping the tech landscape.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div> */}
    // </div>


    <div className='mb-[30px] mt-[20px]'>


      <div className='grid center w-[90%] m-auto grid-cols-1 gap-4 lg:grid lg:grid-cols-3  md:grid md:grid-col-2  sm:grid sm:grid-cols-2 '>

        <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:scale-110">
          <a href="#">
            <img class="rounded-t-lg w-[490px] h-[400px]" src={Imageevents} alt="" href="https://youtu.be/2PIagAiL_a8?si=nVwb2-ztp5mtOSs-" />

          </a>
          <div class="">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">Introducing The Newest Addition To Trichy Network With The Opening Of A Branch Office In Your Area!</h5>
            </a>
            {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
            {/* <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      View more
      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
    </a> */}
          </div>
        </div>


        <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:scale-110">
          <a href="#">
            <img class="rounded-t-lg w-[490px] h-[400px] " src={Imageevents} alt="" />
          </a>
          <div class="">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">Blockchain Awareness Meeting, Fueling Knowledge And Inspiring Adoption Of Blockchain.</h5>
            </a>
            {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
            {/* <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      View more
      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
    </a> */}
          </div>
        </div>


        <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:scale-110">
          <a href="#">
            <img class="rounded-t-lg w-[490px] h-[400px]" src={Imageevents} alt="" />
          </a>
          <div class="">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">Solingur Crypto Exchange Awareness Meeting, Spreading Knowledge In Cryptocurrency!</h5>
            </a>
            {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
            {/* <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      View more
      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
    </a> */}
          </div>

        </div>

      </div>
    </div>

