import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image1 from "./assets/homepage.png"
import Image2 from "./assets/2.png"

import Image3 from "./assets/1.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "./assets/WhatsApp Image 2024-06-06 at 4.49.10 PM.jpeg"

import Image21 from "./assets/coin.png"

import { motion } from 'framer-motion'

import Imageshape from "./assets/Untitled design (24).png"

// import Shape from "./assets/shape.png"
import anime1 from "./assets/Anime/anime1.jpg"
import anime2 from "./assets/Anime/anime2.png"
import anime3 from "./assets/Anime/anime3.png"
import anime4 from "./assets/Anime/anime4.png"
import anime5 from "./assets/Anime/anime5.png"
import anime6 from "./assets/Anime/anime6.png"
import Imagesvg from "./assets/Anime/stick-man.936d1e5d.svg"
import Image11 from "./assets/__next_static_media_1.368f2f55.jpg"
import Image12 from "./assets/__next_static_media_2.a97ffdb7.jpg"

// dadaasd
import Imagegif from "./assets/trophy.png"
// ssdfsdsadfasasdf
// import Video1 from "./assets/video-1 (1).jpg"
// import Video2 from "./assets/video-4 (1).jpg"
// import Video3 from "./assets/video-5 (1).jpg"

import Imageevents1 from "./assets/kait.jpeg"
import Imageevents2 from "./assets/exchange.jpeg"
import Imageevents3 from "./assets/aniversary.jpeg"


import Goa from "./assets/Goa trip.png"
import Tailand from "./assets/Kerala.png"


import Trophy from "./assets/trophy (1).png"

import Slider from "react-slick";




import Popup from "./routes/pages/popup"


const App = () => {








  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  var setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,



  };



  return <>


    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet"></link>

    {/* <Popup /> */}

    <Slider {...setting}>


      <div>
        <img className='w-[100%] lg:h-[650px] md:h-[175px] ' src={Image1} alt='' />
        {/* <button className=' absolute  border-2 rounded-lg  mt-[-100px] ml-[150px] py-[7px] px-[10px] border-indigo-600 bg-neutral-100   '>Enquire</button> */}
      </div>
      <div>
        <img className='w-[100%] lg:h-[650px] md:h-[175px] ' src={Image2} alt='' />
        {/* <button className=' absolute  border-2 rounded-lg  mt-[-100px] ml-[150px] py-[7px] px-[10px] border-indigo-600 bg-neutral-100   '>Enquire</button> */}
      </div>
      <div>
        <img className='w-[100%] lg:h-[650px] md:h-[175px]  ' src={Image3} alt='' />
        {/* <button className=' absolute  border-2 rounded-lg  mt-[-100px] ml-[150px] py-[7px] px-[10px] border-indigo-600 bg-neutral-100   '>Enquire</button> */}
      </div>

    </Slider>


    {/* 
    <Carousel>

      <div>
        <img src={Image3} alt='' />
       
      </div>



      <div>
        <img src={Image2} alt='' />
   
      </div>
      <div>

        <img src={Image1} alt='' />
      
      </div>


    </Carousel> */}


    {/* <motion.div
      initial={{ width: "120%" }}
      animate={{ width: "100%", transition: { delay: 0.5, duration: 1.2 } }}>
      <img src={Image3} style={{
        width: "100%",
        height: "100%",

        transition: " width 2s",
      }} className='ease-in-out duration-300  ' alt='' />
    </motion.div> */}





    {/* shape image */}

    {/* <div className=' flex'>
<div className=" pt-[50px]  pb-[50px]" > 
            <img className="flex  z-10 absolute bg-white mix-blend-screen w-[800px] h-[700px]" src={Shape} alt=""/>
            <img className="relativ w-[800px]  h-[700px]" src={Image} alt=""/>
           {/* <img className="relativ w-[1000px]" src={Image21} alt=""/>  */}
    {/* </div> 
 </div> */}





    {/* <motion.div
      initial={{ y: -70 }}
      animate={{ y: 0, transition: { delay: 0.8, duration: 0.8 } }} */}

    <div className=" container  flex-col  md:flex  lg:flex-row  flex justify-evenly  items-center sm:flex-col   ">



      {/* righrimages */}

      <div className=" box-border relative    lg: w-auto h-auto flex float-left pt-[10px] pb-[10px]   md:flex-row  pt-[10px] pb-[10px] box-border ml-0  sm:pt-[10px] pb-[10px] ml-0">
        <div className=" lg:pt-[50px] md:pt-[30px] md:pb-[0px] sm:pt-[30px] sm:pb-[0px]  lg:pb-[50px]" >

          <img className="flex  z-10  bg-white w-[150px] h-[150px] md:w-[600px] md:h-[500px] lg:w-[600px] lg:h-[500px] sm:w-[200px] sm:h-[200px]" src={Imageshape} alt="" />


          {/* <img className="flex  z-10 absolute bg-white mix-blend-screen w-[600px] h-[500px]" src={Shape} alt="" /> */}
          {/* <img className="relativ w-[600px]  h-[500px]" src={Image} alt="" /> */}
          {/* <img className="relativ w-[1000px]" src={Image21} alt=""/>  */}
        </div>
      </div>

      {/* leftcontent */}
      <div className=" pl-[0] md:pl-[50px] lg:pl-[50px] max-w-screen-sm ">
        <motion.div
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 100, y: 0, transition: { delay: 0.8, duration: 0.8 } }}
          viewport={{ once: true }}>
          <p className=" font-bold  lg:text-[30px] sm:text-[19px] lg:leading-[30px] sm:leading-[10px] font-[Roboto, sans-serif] bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text">
            Join KAIT Community Today
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100, transition: { delay: 0.8, duration: 0.8 } }}
          viewport={{ once: true }}>  <h3 style={{ fontFamily: "Nunito,sans-serif" }} className="  lg:text-[46px] sm:[19px] lg:leading-[65px] sm:leading-[20px] font-extrabold relative">Are you ready to take the first step towards greatness?</h3></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 140 }}
          whileInView={{ opacity: 100, y: 0, transition: { delay: 0.8, duration: 0.8 } }}
          viewport={{ once: true }}>  <p className="font-roboto font-normal text-base lg:leading-9  sm:leading-3 text-gray-700 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">Join the KAIT community today and start your journey towards pushing your limits and claiming victory.  Our user-friendly KAIT staking app allows you to earn passive income. Maximize your returns with industry-leading APYs.</p></motion.div>

        <a href='https://www.kaitworld.com/public/register'><h2 className='  btn btn-border-4  font-bold text-lg px-2 py-1  border-black  hover:shadow-2xl  hover:bg-gradient-to-r from-blue-800 to-pink-500   transition duration-500 ease-in-out ' >Start Staking Today!</h2></a>
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
      {/* </motion.div> */}
    </div>





    <div className="container flex-col  md:flex  lg:flex-row  flex justify-around bg-[#c8cbfe] box-border lg:rounded-[125px]  md:rounded-[0px] items-center sm:flex-col  ">

      {/* leftcontent */}
      <div className=" lg:pl-[50px] sm:pl-[0px] sm:p-[100px] max-w-screen-sm lg:mr-[20px]">
        <motion.div
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 100, y: 0, transition: { delay: 0.8, duration: 0.8 } }}
          viewport={{ once: true }}>
          <p className=" font-bold lg:text-[30px] sm:text-[16px] leading-[30px] font-[Roboto, sans-serif] bg-gradient-to-r from-blue-800 to-pink-500 text-transparent bg-clip-text lg:mt-0  md:mt-[20px]">
            Success
            isn't a destination, it's a journey!        </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100, transition: { delay: 0.8, duration: 0.8 } }}
          viewport={{ once: true }}>
          <h3 style={{ fontFamily: "Nunito,sans-serif" }} className="  lg:text-[46px]  sm:text-[16px] lg:leading-[60px] sm:leading-[10px] font-extrabold relative">Is KAIT The Next Step In Your Journey?</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100, transition: { delay: 0.8, duration: 0.8 } }}
          viewport={{ once: true }}>
          <p className="font-roboto font-normal lg:text-base lg:leading-9  sm:leading-[10px] text-gray-700 max-w-full sm:max-w-md md:max-w-lg lg:max-w-[28rem] xl:max-w-[30rem]">At KAIT, we believe in the power of connection. Join our thriving community of like-minded individuals and unlock a world of possibilities.
            Not only will you be part of a vibrant community, but you'll also have the chance to earn exciting awards and rewards for your engagement and achievements within KAIT.</p>
        </motion.div>

        {/* left bottom content */}

        <div className="flex items-center max-w-screen-md mt-10 text-left">
          <div className="flex gap-2">

            {/* <div><img className="w-[500px] h-[190px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmmXYHhdwwcmW2Xm_OlS75ILepiNHIADZQ-IO9KVpvtA2iqDl_qGXpm5BFc2LGkRHQRns&usqp=CAU" /> */}

            {/* </div> */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: -70 }}
                whileInView={{ opacity: 100, y: 0, transition: { delay: 0.8, duration: 0.8 } }}
                viewport={{ once: true }}>   <h2 style={{ fontFamily: "Nunito,sans-serif" }} className="  text-blue-900 font-bold lg:text-4xl sm:text-lg  lg:leading-10 sm:leading-[20px] lg:mb-4 sm:mb-2">Join Our KAIT Community</h2>
              </motion.div>


              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 100, transition: { delay: 0.8, duration: 0.8 } }}
                viewport={{ once: true }}>
                <p className="text-gray-700 font-normal text-base lg:leading-7 sm:leading-[10px] mb-0 font-roboto max-w-full sm:max-w-md md:max-w-lg lg:max-w-[28rem] xl:max-w-[30rem]">Become a part of the KAIT revolution and unlock the power of the KAIT Community. Dive into the future of finance and explore the wealth of opportunities within the dynamic world of cryptocurrency.</p>
              </motion.div>
            </div>

          </div>

        </div>



        <div className='flex justify-center cursor-pointer '>     <a href='https://www.kaitworld.com/public/login'><h1 className='  btn btn-border-4  font-bold text-lg px-2 py-1  border-black  hover:shadow-2xl  hover:bg-gradient-to-r from-blue-800 to-pink-500   transition duration-500 ease-in-out '>view more</h1></a>  </div>


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

            <div ><h2 className=" text-center mt-2 text-3xl font-bold">25000 +</h2>
              <p className=" text-center font-bold text-1xl">happy Users</p></div>
          </div>


          <div className="mt-4 gap-5 "><Slider className=" text-center" {...settings}>
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






    <div className=" container  flex-col  md:flex  lg:flex-row  flex justify-evenly  items-center sm:flex-col  ">

      {/* righrimages */}

      <div className=" box-border relative    lg:ml-44 w-auto h-auto flex float-left   md:flex-row  pt-[150px] pb-[70px]  ml-0  sm:pt-[150px] ">
        {/* <img className=" h-[520px] w-[500px] box-border relative  object-cover border-white border-[15px]" src={Image11} alt="" /> */}
        <img className=" h-[520px] w-[500px] box-border relative  object-cover border-white border-[15px]" src={Goa} alt='' />
        <div className='  hidden md:block h-[200px] w-[200px] bg-[#ec8e1a]  rounded-[500px] absolute left-28 mt-[-100px] z-[-111]'></div>
        <img className=" h-[390px] w-[380px] box-border absolute  border-white border-[15px] ml-[-202px] mt-[-130px]  hidden md:block " src={Tailand} alt="" />

        {/* <img className=" h-[390px] w-[380px] box-border absolute  border-white border-[15px] ml-[-130px] mt-[-110px] " src={Image12} alt="" /> */}
        <div className=' hidden md:block h-[200px] w-[200px] bg-[#009c81] rounded-[500px] absolute left-[-7rem] mt-[182px] z-[-111]'></div>
      </div>

      {/* leftcontent */}
      <div className=" lg:pl-[50px] max-w-screen-sm sm:pl-0 md:pl-0  lg:pl-[0px]">
        <motion.div
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 100, y: 0, transition: { delay: 0.8, duration: 0.8 } }}
          viewport={{ once: true }}> <p className=" font-bold lg:text-[40px] md:text-[25px] leading-[55px] font-[Roboto, sans-serif] bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text">
            Ready To Fly
          </p></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100, transition: { delay: 0.8, duration: 0.8 } }}
          viewport={{ once: true }}>  <h3 style={{ fontFamily: "Nunito,sans-serif" }} className="  lg:text-[46px] md:text-[20px] lg:leading-[60px] md:leading-[10px] font-extrabold relative">Join Our Vibrant Community And Unlock Awards & Rewards!</h3></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100, transition: { delay: 0.8, duration: 0.8 } }}
          viewport={{ once: true }}>  <p className="font-roboto font-normal lg:text-base md:text-[15px] lg:leading-9 md:leading-none text-gray-700 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">Joining Our Vibrant KAIT Community Opens The Door To Exciting Travel Rewards! Achieve Your Targets And Unlock Journeys To Captivating Destinations Like Goa, Kerala, Thailand, And Malaysia, With The Opportunity For Even More Foreign Trips. Explore, Experience, And Indulge In Unforgettable Adventures As You Reach Your Goals With KAIT. </p>
        </motion.div>

        {/* left bottom content */}

        <div className="flex items-center max-w-screen-md mt-10 text-left">
          <div className="flex gap-2">

            {/* <div><img className="w-[300px] h-[200px]" src={Image} />

            </div> */}
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 100, transition: { delay: 0.8, duration: 0.8 } }}
                viewport={{ once: true }}>  <h2 style={{ fontFamily: "Nunito,sans-serif" }} className="  text-blue-900 font-bold lg:text-4xl md:text-[25px] lg:leading-10 md:leading-[0] lg:mb-4 md:mb-0">Join now and let your journey begin!</h2></motion.div>

              {/* <p className="text-gray-700 font-normal text-base leading-7 mb-0 font-roboto">Make an impact one piece of clothing at a time to need of others</p> */}

              <a href='/contest'>  <button className='mt-[20px] btn btn-border-4  font-bold text-lg px-2 py-1  border-black  hover:shadow-2xl  hover:bg-gradient-to-r from-blue-800 to-pink-500   transition duration-500 ease-in-out'>view more</button></a>
            </div>


          </div>

        </div>
      </div>
    </div>




    <div>





      <div>
        <h2 className=' text-center text-[30px] lg:text-[50px]  sm:mb-0 lg:mb-9 font-bold' style={{ fontFamily: "Nunito,sans-serif" }}>Events</h2>
      </div>
      <div className='grid center w-[90%] m-auto pb-[20px] grid-cols-1 gap-4 lg:grid lg:grid-cols-3  md:grid md:grid-col-2  sm:grid sm:grid-cols-2'>









        <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:scale-110">
          
            <img class="rounded-t-lg w-[490px] h-[400px] object-cover " src={Imageevents2} alt="" />
     
          <div class="p-8">
            <h1 className=' font-bold'>Kairaa Exchange Launch</h1>
        

              <h5 class="mb-2  font-roboto font-normal lg:text-base md:text-[15px] lg:leading-7 md:leading-none text-gray-700 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">The grand launch of the Kairaa Crypto Exchange took place at the prestigious Ramada Plaza in Chennai on December 11, 2022. This event marked a significant milestone for both our company and the crypto community.</h5>
           
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
     
            <img class="rounded-t-lg w-[490px] h-[400px] object-cover" src={Imageevents1} alt="" href="https://youtu.be/2PIagAiL_a8?si=nVwb2-ztp5mtOSs-" />

          <div class="p-8">
            <h1 className=' font-bold'>KAIT COIN staking app launching</h1>
          
              <h5 class="mb-2  font-roboto font-normal lg:text-base md:text-[15px] lg:leading-7 md:leading-none text-gray-700 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">KAIRAA successfully launched the KAIT Staking App at THE WESTIN located in the vibrant city of Chennai on the remarkable date of June 18, 2023. The KAIT Staking App is poised to revolutionize how individuals interact with cryptocurrencies and blockchain technology.</h5>
        
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
        
            <img class="rounded-t-lg w-[490px] h-[400px] object-cover" src={Imageevents3} alt="" />
       
          <div class="p-8">
            <h1 className=' font-bold'>Second Year Anniversary</h1>
   
              <h5 class="mb-2  font-roboto font-normal lg:text-base md:text-[15px] lg:leading-7 md:leading-none text-gray-700 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">The celebration of Kairaa's 2nd-year Anniversary and Achievers Party held at Blue Lagoon in Chennai on Dec 23, 2023.The event was a grand success, with laughter and cheer filling the air as Kairaa team members and their families. As speeches of appreciation and recognition echoed through the venue, it was evident that Kairaa's journey of growth and achievement was truly something to be celebrated.</h5>
         
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
      <div className=' flex justify-center mb-[15px] mt-[15px]'>  <a href="" className="">

        <a href="/events" class="btn btn-border-4  font-bold text-lg px-2 py-1  border-black  hover:shadow-2xl  hover:bg-gradient-to-r from-blue-800 to-pink-500   transition duration-500 ease-in-out" >View more</a>
      </a>
      </div>
    </div>













  </>;
};

export default App;
