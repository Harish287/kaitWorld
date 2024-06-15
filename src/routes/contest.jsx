import React, { useState, useEffect } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Image1 from "../assets/Goa trip.png";
import Image2 from "../assets/Kerala.png"

import Image3 from "../assets/Malaysia.png"



import Contest from "../assets/trip.png"



import Imageevents from "../assets/trophy (1).png"


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const Services = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.


    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const sliderImageUrl = [
    //First image url
    {
      url: Imageevents,
      para: "yercud Trip  "
    },
    {
      url:
        Imageevents,
      para: "yercud Trip  "
    },
    //Second image url
    {
      url: Imageevents,
      para: "yercud Trip  "
    },
    //Third image url
    {
      url: Imageevents,
      para: "yercud Trip  "
    },

    //Fourth image url

    {
      url:
        Imageevents,
      para: "yercud Trip  "
    }
  ];


  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const countdownDate = new Date("2024-06-30").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setCountdown("SORRY, THE EVENT IS OVER");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`${days}Days - ${hours}Hours - ${minutes}Minutes - ${seconds}Seconds`);
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Call immediately to avoid initial delay
    return () => clearInterval(interval);
  }, []);



  return (
    <>
      <div><img src={Contest} alt="" /></div>
      <div>
        <h2 className=' text-center text-[30px] lg:text-[50px] md:text-[25px] sm:text-[25px]  mb-9 font-extrabold' style={{ fontFamily: "Nunito,sans-serif" }}>Contest</h2>
      </div>

      <div className=" w-[100%]  ">
        <div className="flex justify-center w-[100%]">
          <div className="col-sm-9">
            <h6 className='  text-center text-[30px] lg:text-[40px] sm:text-[25px] font-extrabold' style={{ fontFamily: "Nunito,sans-serif" }}> Contest Ends In</h6>
            {/* <p className='font-roboto font-normal text-base leading-6 text-gray-700'>
              Get ready for the upcoming conference as it is just around the corner! The countdown has begun, and excitement is in the air. 
              Mark your calendars and prepare to be part of an unforgettable event. Stay tuned for updates, speaker announcements, and registration details. The Next Conference Starts In:
            </p> */}
            <h6 className='text-center lg:text-7xl lg:text-[56px] sm:text-[56px] lg:leading-[80px] sm:leading-0 font-extrabold relative' style={{ fontFamily: "Nunito,sans-serif" }} id="conferenceTimingClock">{countdown}</h6>
          </div>
        </div>
      </div>


      <div>

        <div className='grid center w-[90%] m-auto grid-cols-1 gap-4 lg:grid lg:grid-cols-3  md:grid md:grid-col-2  sm:grid sm:grid-cols-2'>
          <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:scale-110">
            <a href="#">
              <img class="rounded-t-lg w-[490px] h-[400px]" src={Image1} alt="" href="https://youtu.be/2PIagAiL_a8?si=nVwb2-ztp5mtOSs-" />

            </a>
            <div className=" p-[10px]">
              <a href="#">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Introducing The Newest Addition To Trichy Network With The Opening Of A Branch Office In Your Area!</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>


            </div>
          </div>


          <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:scale-110">
            <a href="#">
              <img class="rounded-t-lg w-[490px] h-[400px] " src={Image2} alt="" />
            </a>
            <div className=" p-[10px]">
              <a href="#">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Blockchain Awareness Meeting, Fueling Knowledge And Inspiring Adoption Of Blockchain.</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

            </div>
          </div>


          <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:scale-110">
            <a href="#">
              <img class="rounded-t-lg w-[490px] h-[400px]" src={Image3} alt="" />
            </a>
            <div className=" p-[10px]">
              <a href="#">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Solingur Crypto Exchange Awareness Meeting, Spreading Knowledge In Cryptocurrency!</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

            </div>

          </div>

        </div>
        <div className=' flex justify-center mt-[20px] mb-[20px]'>  <a href="/contest" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          View more
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
        </div>
      </div>








      <h2 className=' text-[40px] font-extrabold ml-9'>yercud Trip  </h2>
      <div className="">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {sliderImageUrl.map((imageUrl, index) => {
            return (
              <div className="slider transition-all duration-300 hover:scale-110" key={index}>
                <img src={imageUrl.url} alt="movie" /><p className='relative bg-gray-500 '>{imageUrl.para}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className=' flex justify-center mb-[15px] mt-[15px]'>  <a href="mobile" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        View more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
      </div>


















    </>
  )
};

export default Services;
