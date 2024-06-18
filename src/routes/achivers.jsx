import React from 'react'
import Achiver from "../assets/Achivers.png"

import Imageevents from "../assets/Achivers.png"
import Mobile from "../assets/mobile.jpg"

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      para: "Gold Coin "
    },
    {
      url:
        Imageevents,
      para: "Gold Coin "
    },
    //Second image url
    {
      url: Imageevents,
      para: "Gold Coin  "
    },
    //Third image url
    {
      url: Imageevents,
      para: "Gold Coin  "
    },

    //Fourth image url

    {
      url:
        Imageevents,
      para: "yercud Trip  "
    }
  ];


  const mobileImageUrl = [
    //First image url
    {
      url: Mobile,
      para: "5G Mobile "
    },
    {
      url:
      Mobile,
      para: "5G Mobile "
    },
    //Second image url
    {
      url: Mobile,
      para: "5G Mobile"
    },
    //Third image url
    {
      url: Mobile,
      para: "5G Mobile"
    },

    //Fourth image url

    {
      url:
      Mobile,
      para: "5G Mobile"
    }
  ];



  return (
    <div>

      <img className='w-[100%]' src={Achiver} alt='' />




      <div>



        <div>
          <h2 className=' lg:text-center lg:text-[50px] lg:mb-9 lg:font-bold text-center text-[30px] mb-9 font-bold md:text-[30px] ' style={{ fontFamily: "Nunito,sans-serif" }}>Achivers</h2>
        </div>






        <h2 className='text-[25px] md:text-[25px] sm:text-[25px] lg:text-[40px] font-extrabold lg:ml-9'>Gold Coin  </h2>
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
              <div className="slider transition-all duration-300 hover:scale-110 " key={index}>
                <img src={imageUrl.url} className="h-[400px]" alt="movie" /><p className='relative bg-gray-500 '>{imageUrl.para}</p>
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
</div>



      <h2 className='text-[25px] md:text-[25px] sm:text-[25px] lg:text-[40px] font-extrabold lg:ml-9'>5G mobile   </h2>
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
          {mobileImageUrl.map((imageUrl, index) => {
            return (
              <div className="slider transition-all duration-300 hover:scale-110 " key={index}>
                <img src={imageUrl.url} className=" object-fill p-[20px] w-[300px] h-[400px]" alt="movie" /><p className='relative bg-gray-500 '>{imageUrl.para}</p>
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




      




    </div>
  )
}

export default achivers