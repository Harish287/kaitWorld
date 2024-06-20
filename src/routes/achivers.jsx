import React from 'react'
import Achiver from "../assets/Achivers.png"

import Imageevents from "../assets/Achivers.png"
import Mobile from "../assets/mobile.jpg"

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Imageshape from "../assets/abc.jpeg"

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

        <div className=" container  flex-col  md:flex  lg:flex-row  flex justify-evenly  items-center sm:flex-col  ">



{/* righrimages */}

<div className=" box-border relative    lg: w-auto h-auto flex float-left pt-[10px] pb-[10px]   md:flex-row  pt-[10px] pb-[10px] box-border ml-0  sm:pt-[10px] pb-[10px] ml-0">
  <div className=" lg:pt-[50px] md:pt-[30px] md:pb-[0px] sm:pt-[30px] sm:pb-[0px]  lg:pb-[50px]" >
    <img className="flex  z-10  bg-white w-[150px] h-[150px] md:w-[300px] md:h-[500px] lg:w-[600px] lg:h-[360px] sm:w-[200px] sm:h-[200px]" src={Imageshape} alt="" />

    {/* <img className="flex  z-10 absolute bg-white mix-blend-screen w-[600px] h-[500px]" src={Shape} alt="" /> */}
    {/* <img className="relativ w-[600px]  h-[500px]" src={Image} alt="" /> */}
    {/* <img className="relativ w-[1000px]" src={Image21} alt=""/>  */}
  </div>
</div>

{/* leftcontent */}
<div className=" pl-[0] md:pl-[50px] lg:pl-[50px] max-w-screen-sm ">
  <p className=" font-bold  lg:text-[30px] sm:text-[19px] lg:leading-[30px] sm:leading-[10px] font-[Roboto, sans-serif] bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text">
    Join KAIT Community Today
  </p>
  <h3 style={{ fontFamily: "Nunito,sans-serif" }} className="  lg:text-[46px] sm:[19px] lg:leading-[65px] sm:leading-[20px] font-extrabold relative">Are you ready to take the first step towards greatness?</h3>
  <p className="font-roboto font-normal text-base lg:leading-9  sm:leading-3 text-gray-700 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">Join KAIT community today and start your journey towards pushing your limits and claiming victory. Together, we will unlock your true potential and pave the way for your success.</p>


  {/* left bottom content */}

  <div className="flex items-center max-w-screen-md mt-10 text-left">
    <div className="flex gap-2">

      <div>
        {/* <img className="w-[300px] h-[200px]" src={Image} />   */}

      </div>
      {/* <div>
        <h2 style={{ fontFamily: "Nunito,sans-serif" }} className="  text-blue-900 font-bold text-4xl leading-10 mb-4">Join Our Upcoming Campaign</h2>

        <p className="text-gray-700 font-normal text-base leading-7 mb-0 font-roboto">Make an impact one piece of clothing at a time to need of others</p></div> */}
    </div>
  </div>






</div>

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
                <img src={imageUrl.url} className="h-[300px]" alt="movie" /><p className='relative bg-gray-500 '>{imageUrl.para}</p>
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
                <img src={imageUrl.url} className=" object-fill p-[20px] w-[300px] h-[300px]" alt="movie" /><p className='relative bg-gray-500 '>{imageUrl.para}</p>
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