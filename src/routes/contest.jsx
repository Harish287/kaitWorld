import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Image1 from "../assets/Goa trip.png";
import Image2 from "../assets/Kerala.png"

import Image3 from "../assets/Malaysia.png"



import Contest from "../assets/trip.png"



const Services = () => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
   arrows:false,
  };
  return (
   <>
<div><img  src={Contest} alt=""/></div>





<div>

<div>
  <h2 className=' text-center text-[50px] mb-9 font-bold' style={{ fontFamily: "Nunito,sans-serif" }}>Events</h2>
</div>
<div className='grid center w-[90%] m-auto grid-cols-1 gap-4 lg:grid lg:grid-cols-3  md:grid md:grid-col-2  sm:grid sm:grid-cols-2'>

  <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:scale-110">
    <a href="#">
      <img class="rounded-t-lg w-[439px] h-[400px]" src={Image1} alt="" href="https://youtu.be/2PIagAiL_a8?si=nVwb2-ztp5mtOSs-" />

    </a>
    <div class="">
      <a href="#">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Introducing The Newest Addition To Trichy Network With The Opening Of A Branch Office In Your Area!</h5>
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
      <img class="rounded-t-lg w-[439px] h-[400px] " src={Image2} alt="" />
    </a>
    <div class="">
      <a href="#">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Blockchain Awareness Meeting, Fueling Knowledge And Inspiring Adoption Of Blockchain.</h5>
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
      <img class="rounded-t-lg w-[439px] h-[400px]" src={Image3} alt="" />
    </a>
    <div class="">
      <a href="#">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Solingur Crypto Exchange Awareness Meeting, Spreading Knowledge In Cryptocurrency!</h5>
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
<div className=' flex justify-center'>  <a href="/events" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        View more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
      </div> 
</div>


  
  
  </>
  )
};

export default Services;