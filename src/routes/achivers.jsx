import React from 'react'
import Achiver from "../assets/Achivers.png"

import Imageevents from "../assets/Achivers.png"
import Mobile from "../assets/mobile.jpg"

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const achivers = () => {



  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    initialSlide: 0,
  
    // infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };





  return (
    <div>

      <img className='w-[100%]' src={Achiver} alt='' />




      <div>



        <div>
          <h2 className=' lg:text-center lg:text-[50px] lg:mb-9 lg:font-bold text-center text-[30px] mb-9 font-bold md:text-[30px] ' style={{ fontFamily: "Nunito,sans-serif" }}>Achivers</h2>
        </div>






        <h2 className='text-[25px] md:text-[25px] sm:text-[25px] lg:text-[40px] font-extrabold lg:ml-9'>Gold Coin  </h2>
        <Slider className=" text-center gap-10 p-[0px] sm:p-[0px] md:p-[0px] lg:p-[30px] h-auto w-auto  " {...settings}>

       
         
          <div class="bg-white border mt-[25px]  mb-[25px] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:scale-110">
            <a href="">
              <img class="rounded-t-lg w-[400px] h-[360px]" src={Imageevents} alt="" href="https://youtu.be/2PIagAiL_a8?si=nVwb2-ztp5mtOSs-" />
            </a>
            <div class="">
              <a href="#">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Introducing The Newest Addition To Trichy Network With The Opening Of A Branch Office In Your Area!</h5>
              </a>
            </div>
          </div>


          <div class=" bg-white border mt-[25px]  mb-[25px] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:scale-110">
            <a href="#">
              <img class="rounded-t-lg w-[400px] h-[360px]" src={Imageevents} alt="" />
            </a>
            <div class="">
              <a href="#">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Blockchain Awareness Meeting, Fueling Knowledge And Inspiring Adoption Of Blockchain.</h5>
              </a>
            </div>
          </div>


          <div class=" bg-white border mt-[25px] mb-[25px] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:scale-110">
            <a href="#">
              <img class="rounded-t-lg w-[400px] h-[360px]" src={Imageevents} alt="" />
            </a>
            <div class="">
              <a href="#">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Solingur Crypto Exchange Awareness Meeting, Spreading Knowledge In Cryptocurrency!</h5>
              </a>
            </div>
      </div>

        </Slider>

        <div className=' flex justify-center mb-[15px] mt-[15px]'>  <a href="Goldcoin" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          View more
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
        </div>
      </div>




      <h2 className='text-[25px] md:text-[25px] sm:text-[25px] lg:text-[40px] font-extrabold lg:ml-9'>5G mobile   </h2>
      <Slider className=" text-center gap-10 p-[0px] sm:p-[0px] md:p-[0px] lg:p-[30px] h-auto w-auto  " {...settings}>

        <div class="bg-white border mt-[25px] mb-[25px] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:scale-110">
        <a href="" className=' flex justify-center'>         
             <img class="rounded-t-lg h-[360px] " src={Mobile} alt="" href="https://youtu.be/2PIagAiL_a8?si=nVwb2-ztp5mtOSs-" />
          </a>
          <div class="">
            <a href="">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Mobile Achived</h5>
            </a>
          </div>
        </div>


        <div class=" bg-white border mt-[25px] mb-[25px] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:scale-110">
        <a href="" className=' flex justify-center'>
            <img class="rounded-t-lg  h-[360px]" src={Mobile} alt="" />
          </a>
          <div class="">
          <a href="" >            
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Mobile Achived</h5>
            </a>
          </div>
        </div>


        <div class=" bg-white border mt-[25px] mb-[25px] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:scale-110">
          <a href="" className=' flex justify-center'>
            <img class="rounded-t-lg  h-[360px]" src={Mobile} alt="" />
          </a>
          <div class="">
            <a href="">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Mobile Achived</h5>
            </a>
          </div>
        </div>

      </Slider>

      <div className=' flex justify-center mb-[15px] mt-[15px]'>  <a href="mobile" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        View more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
      </div>




      




    </div>
  )
}

export default achivers