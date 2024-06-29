import React, {useState,useEffect} from 'react'
import Achiver from "../assets/Achivers.png"

import Imageevents from "../assets/Achivers.png"
import Mobile from "../assets/mobile.jpg"

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Imageshape from "../assets/abc.jpeg"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import anime1 from "../assets/Anime/anime1.jpg"
import anime2 from "../assets/Anime/anime2.png"
import anime3 from "../assets/Anime/anime3.png"
import anime4 from "../assets/Anime/anime4.png"
import anime5 from "../assets/Anime/anime5.png"
import anime6 from "../assets/Anime/anime6.png"
import { motion } from 'framer-motion'
import Trophy from "../assets/trophy (1).png"
import Imagesvg from "../assets/Anime/stick-man.936d1e5d.svg"
import Imagegif from "../assets/trophy.png"

const Achivers = () => {



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






  var setting = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };






  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
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






  const [bronzecountdown, setbronzeCountdown] = useState('');

  useEffect(() => {
    const countdownDate = new Date("2024-07-20").getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setbronzeCountdown("SORRY, THE EVENT IS OVER");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setbronzeCountdown(`${days}Days - ${hours}Hours - ${minutes}Minutes - ${seconds}Seconds`);
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Call immediately to avoid initial delay
    return () => clearInterval(interval);
  }, []);



  return (
    <div>

      <img className='w-[100%]' src={Achiver} alt='' />







   
     











      <div>



        <div>
          <h2 className=' lg:text-center lg:text-[50px] lg:mb-9 lg:font-bold text-center text-[30px] mb-9 font-bold md:text-[30px] ' style={{ fontFamily: "Nunito,sans-serif" }}>Achivers</h2>
        </div>
















        <div className="container flex-col  md:flex  lg:flex-row  flex justify-around  box-border lg:rounded-[125px]  md:rounded-[0px] items-center sm:flex-col gap-9">

{/* leftcontent */}
<div className=" lg:pl-[50px] sm:pl-[0px] sm:p-[30px] max-w-screen-sm lg:mr-20px">
<motion.div
    initial={{ opacity: 0, y: -70    }}
    whileInView={{ opacity: 100, y:0 ,transition: { delay: 0.8, duration: 0.8 } }}
    viewport={{ once: true }}> 
        <p className=" font-bold lg:text-[30px] sm:text-[16px] leading-[30px] font-[Roboto, sans-serif] bg-gradient-to-r from-blue-800 to-pink-500 text-transparent bg-clip-text lg:mt-0  md:mt-[20px]">
    Success isn't a destination, it's a journey!        </p>
    </motion.div>
    
    <motion.div
    initial={{ opacity: 0  }}
    whileInView={{ opacity: 100,transition: { delay: 0.8, duration: 0.8 } }}
    viewport={{ once: true }}> 
      <h3 style={{ fontFamily: "Nunito,sans-serif" }} className="  lg:text-[46px]  sm:text-[16px] lg:leading-[60px] sm:leading-[10px] font-extrabold relative">Is KAIT The Next Step In Your Journey?</h3>
 </motion.div>
 <motion.div
    initial={{ opacity: 0  }}
    whileInView={{ opacity: 100,transition: { delay: 0.8, duration: 0.8 } }}
    viewport={{ once: true }}> 
      <p className="font-roboto font-normal lg:text-base lg:leading-9  sm:leading-[10px] text-gray-700 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">At Achieving the Trophy, we believe that every journey to success starts with a single step. Whether you're aiming to excel in your career with KAIT, enhance your personal life, or achieve a lifelong dream, we are here to guide and support you every step of the way.</p>
</motion.div>

  {/* left bottom content */}

  <div className="flex items-center max-w-screen-md mt-10 text-left">
    <div className="flex gap-2">

      {/* <div><img className="w-[500px] h-[190px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmmXYHhdwwcmW2Xm_OlS75ILepiNHIADZQ-IO9KVpvtA2iqDl_qGXpm5BFc2LGkRHQRns&usqp=CAU" /> */}

      {/* </div> */}
      <div>
      <motion.div
    initial={{ opacity: 0, y: -70    }}
    whileInView={{ opacity: 100, y:0 ,transition: { delay: 0.8, duration: 0.8 } }}
    viewport={{ once: true }}>   <h2 style={{ fontFamily: "Nunito,sans-serif" }} className="  text-blue-900 font-bold lg:text-4xl sm:text-lg  lg:leading-10 sm:leading-[20px] lg:mb-4 sm:mb-2">Join Our KAIT Community</h2>
    </motion.div>

   
    <motion.div
    initial={{ opacity: 0  }}
    whileInView={{ opacity: 100,transition: { delay: 0.8, duration: 0.8 } }}
    viewport={{ once: true }}> 
        <p className="text-gray-700 font-normal text-base lg:leading-7 sm:leading-[10px] mb-0 font-roboto">Become a part of the KAIT revolution and unlock the power of the KAIT Community. Dive into the future of finance and explore the wealth of opportunities within the dynamic world of cryptocurrency.</p>
        </motion.div>
        </div>

    </div>

  </div>



  {/* <div className='flex justify-center cursor-pointer '>     <a href='/achivers'><h1 className='  font-bold text-lg px-2 py-1 border-4  border-black  hover:shadow-2xl  hover:bg-gradient-to-r from-blue-800 to-pink-500   transition duration-500 ease-in-out '>view more</h1></a>  </div> */}


</div>

{/* righrimages */}

<div className="w-auto h-auto flex float-right pt-[70px] pb-[70px] box-border  md:flex float-right pt-[70px] pb-[70px] box-border ">
  {/* <img className=" h-[540px] w-[540px] box-border relative rounded-[500px] border-orange-100 border-[15px]" src="https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136839.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1717459200&semt=ais_user" alt="" />
  <img className=" h-[350px] w-[350px] box-border absolute  rounded-[500px] border-orange-100 border-[15px] ml-[-150px] mt-[-50px] " src="https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136824.jpg" alt="" /> */}


  <img className='lg:h-[540px] lg:w-[540px]  sm:h-[300px] sm:w-[300px] box-border relative object-cover rounded-[500px] border-[#c8cbfe] border-[15px]' src={Imagegif} alt="" />
  <img className=" h-[350px] w-[350px] box-border absolute hidden md:block rounded-[500px]  border-[#c8cbfe] border-[15px] ml-[-150px] mt-[-50px]  " src={Trophy} alt="" />






  {/* Happy clients */}

  <div className=" bg-white w-[350px] h-[200px]  hidden md:block absolute box-border border-[15px] rounded-[50px] mt-[390px] ml-[-135px]">

    <div className="flex gap-10 justify-evenly">
      <div className=" flex justify-center items-center"><img className="w-[50px] h-[50px] box-border" src={Imagesvg} alt="" />  </div>

      <div ><h2 className=" text-center mt-2 text-3xl font-bold">18000 +</h2>
        <p className=" text-center font-bold text-1xl">happy Users</p></div>
    </div>


    <div className="mt-4 gap-5 "><Slider className=" text-center" {...setting}>
      <div >
        <img className="w-[50px] h-[50px] box-border rounded-[500px]" src={anime1} alt="" />
      </div>
      <div>
        <img className="w-[50px] h-[50px] box-border rounded-[500px]" src={anime2} alt="" />      </div>
      <div>
        <img className="w-[50px] h-[50px] box-border rounded-[500px]" src={anime3} alt="" />      </div>
      <div>
        <img className="w-[50px] h-[50px] box-border rounded-[500px]" src={anime4} alt="" />      </div>
      <div>
        <img className="w-[50px] h-[50px] box-border rounded-[500px]" src={anime5} alt="" />      </div>
      <div>
        <img className="w-[50px] h-[50px] box-border rounded-[500px]" src={anime6} alt="" />      </div>
    </Slider></div>
  </div>

</div>


</div>
















       
       



        {/* <h2 className='text-[25px] md:text-[25px] sm:text-[25px] lg:text-[40px] font-extrabold lg:ml-9'>Gold Coin  </h2>
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
      <div className=' flex justify-center mb-[15px] mt-[15px]'>  <a href="mobile" className="  btn btn-border-4  font-bold text-lg px-2 py-1  border-black  hover:shadow-2xl  hover:bg-gradient-to-r from-blue-800 to-pink-500   transition duration-500 ease-in-out">
        View more
        
      </a>
      </div> */}






      
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










      <h2 className='text-[25px] md:text-[25px] sm:text-[25px] lg:text-[40px] font-extrabold lg:ml-9'>Achivers Rewards   </h2>
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

      <div className=' flex justify-center mb-[15px] mt-[15px]'>  <a href="mobile" className="  btn btn-border-4  font-bold text-lg px-2 py-1  border-black  hover:shadow-2xl  hover:bg-gradient-to-r from-blue-800 to-pink-500   transition duration-500 ease-in-out">
        View more
        
      </a>
      </div>




      
{/* meet achivers */}

      <div className='mt-[20px]'>
<h1 className=' text-center text-[50px] mb-9 font-bold' style={{ fontFamily: "Nunito,sans-serif" }}>Achivers meet</h1>
<h6 className='text-center lg:text-7xl   lg:text-[56px] lg:leading-[80px] font-extrabold relative' style={{fontFamily:"Nunito,sans-serif"}} id="conferenceTimingClock">{bronzecountdown}</h6>
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


</div>





    </div>
  )
}

export default Achivers