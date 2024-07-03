import React, { useState, useEffect } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Image1 from "../assets/Goa trip.png";
import Image2 from "../assets/Kerala.png"
import Image3 from "../assets/Malaysia.png"


import Upcoming1 from "../assets/contest/WhatsApp Image 2024-07-03 at 12.37.58 PM (1).jpeg"
import Upcoming2 from "../assets/contest/WhatsApp Image 2024-07-03 at 12.37.58 PM (2).jpeg"
import Upcoming3 from "../assets/contest/WhatsApp Image 2024-07-03 at 12.37.58 PM.jpeg"



import Contest from "../assets/trip.png"
import { motion } from 'framer-motion'

import Trip from "../assets/trip.jpeg"


import Imageevents from "../assets/trophy (1).png"


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Goa from "../assets/Goa trip.png"
import Tailand from "../assets/Kerala.png"

import axios from 'axios';


const Services = () => {
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
    const countdownDate = new Date("2024-07-31").getTime();

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


  const [contestData, setContestData] = useState(null);
  const apiUrl = 'https://kairaablockchainacademy.com/kait/admin/contest/contest_api.php';

  useEffect(() => {
    const fetchContestData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setContestData(response.data);  // assuming response.data is the JSON object
      } catch (error) {
        console.error('Error fetching contest data:', error);
      }
    };

    fetchContestData();
  }, []);

  if (!contestData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div><img src={Contest} alt="" /></div>
      <div>
        <h2 className=' text-center text-[30px] lg:text-[50px] md:text-[25px] sm:text-[25px]  mb-9 font-extrabold' style={{ fontFamily: "Nunito,sans-serif" }}>Contest</h2>
      </div>







      <div className=" container  flex-col  md:flex  lg:flex-row  flex justify-evenly  items-center sm:flex-col  ">

        {/* righrimages */}

        <div className=" box-border relative  lg:pt-[150px]  lg:ml-44 w-auto h-auto flex float-left   md:flex-row  md:pt-[150px] pb-[70px]  ml-0  sm:pt-[15px] ">
          {/* <img className=" h-[520px] w-[500px] box-border relative  object-cover border-white border-[15px]" src={Image11} alt="" /> */}
          <img className=" h-[520px] w-[500px] box-border relative  object-cover border-white border-[15px]" src={Goa} alt='' />
          <div className='  hidden md:block h-[200px] w-[200px] bg-[#ec8e1a]  rounded-[500px] absolute left-28 mt-[-100px] z-[-111]'></div>
          <img className=" h-[390px] w-[380px] box-border absolute  border-white border-[15px] ml-[-202px] mt-[-130px]  hidden md:block " src={Tailand} alt="" />

          {/* <img className=" h-[390px] w-[380px] box-border absolute  border-white border-[15px] ml-[-130px] mt-[-110px] " src={Image12} alt="" /> */}
          <div className=' hidden md:block h-[200px] w-[200px] bg-[#009c81] rounded-[500px] absolute left-[-7rem] mt-[182px] z-[-111]'></div>
        </div>

        {/* leftcontent */}
        <div className=" lg:pl-[50px] max-w-screen-sm sm:pl-0 md:pl-0  lg:pl-[0px]">
          <p className=" font-bold lg:text-[40px] md:text-[25px] leading-[55px] font-[Roboto, sans-serif] bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text">
            Ready To Fly
          </p>
          <h3 style={{ fontFamily: "Nunito,sans-serif" }} className="  lg:text-[46px] md:text-[20px] lg:leading-[60px] md:leading-[10px] font-extrabold relative">Join Our Vibrant Community And Unlock Awards & Rewards!</h3>
          <p className="font-roboto font-normal lg:text-base md:text-[15px] lg:leading-9 md:leading-none text-gray-700 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">Joining Our Vibrant KAIT Community Opens The Door To Exciting Travel Rewards! Achieve Your Targets And Unlock Journeys To Captivating Destinations Like Goa, Kerala, Thailand, And Malaysia, With The Opportunity For Even More Foreign Trips. Explore, Experience, And Indulge In Unforgettable Adventures As You Reach Your Goals With KAIT. </p>


          {/* left bottom content */}

          <div className="flex items-center max-w-screen-md mt-10 text-left">
            <div className="flex gap-2">

              {/* <div><img className="w-[300px] h-[200px]" src={Image} />

      </div> */}
              <div>
                <h2 style={{ fontFamily: "Nunito,sans-serif" }} className="  text-blue-900 font-bold lg:text-4xl md:text-[25px] lg:leading-10 md:leading-[0] lg:mb-4 md:mb-0">Join now and let your journey begin!</h2>

                {/* <p className="text-gray-700 font-normal text-base leading-7 mb-0 font-roboto">Make an impact one piece of clothing at a time to need of others</p> */}

                {/* <button className='mt-[20px] box-border font-bold lg:text-lg md:text-sm px-2 py-1 border-4 border-black  hover:shadow-2xl  hover:bg-gradient-to-r from-blue-800 to-pink-500   transition duration-500 ease-in-out'><a href='/contest'>view more</a></button> */}
              </div>


            </div>

          </div>
        </div>
      </div>







      {/* Upcoming events */}


      <div className=" w-[100%]  ">
        <div className="flex justify-center w-[100%] mt-[20px] mb-[20px]">
          <div className="col-sm-9">
            <h6 className='  text-center text-[30px] lg:text-[40px] sm:text-[25px] font-extrabold' style={{ fontFamily: "Nunito,sans-serif" }}> Contest Ends In</h6>
            {/* <p className='font-roboto font-normal text-base leading-6 text-gray-700'>
              Get ready for the upcoming conference as it is just around the corner! The countdown has begun, and excitement is in the air. 
              Mark your calendars and prepare to be part of an unforgettable event. Stay tuned for updates, speaker announcements, and registration details. The Next Conference Starts In:
            </p> */}
            <h6 className='text-center lg:text-[52px]  sm:text-[50px] lg:leading-[80px] sm:leading-0 font-extrabold relative' style={{ fontFamily: "Nunito,sans-serif" }} id="conferenceTimingClock">{countdown}</h6>
          </div>
        </div>

        <div>
          <div className='mb-[30px] mt-[30px]'>

            <div className='grid center w-[90%] m-auto grid-cols-1 gap-5 lg:grid lg:grid-cols-3  md:grid md:grid-col-2  sm:grid sm:grid-cols-2'>
              <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:scale-110">
                <a href="#">
                  <img class="rounded-t-lg w-[100%] h-[400px]" src={Upcoming1} alt="" href="https://youtu.be/2PIagAiL_a8?si=nVwb2-ztp5mtOSs-" />

                </a>
                {/* <div className=" p-[10px]">
      <a href="#">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">Introducing The Newest Addition To Trichy Network With The Opening Of A Branch Office In Your Area!</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>


    </div> */}
              </div>


              <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:scale-110">
                <a href="#">
                  <img class="rounded-t-lg w-[490px] h-[400px] " src={Upcoming2} alt="" />
                </a>
                {/* <div className=" p-[10px]">
      <a href="#">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">Blockchain Awareness Meeting, Fueling Knowledge And Inspiring Adoption Of Blockchain.</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

    </div> */}
              </div>


              <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:scale-110">
                <a href="#">
                  <img class="rounded-t-lg w-[490px] h-[400px]" src={Upcoming3} alt="" />
                </a>
                {/* <div className=" p-[10px]">
      <a href="#">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">Solingur Crypto Exchange Awareness Meeting, Spreading Knowledge In Cryptocurrency!</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

    </div> */}

              </div>

            </div>
            {/* <div className=' flex justify-center mt-[40px] mb-[20px]'>  <a href="/contest" class="  btn btn-border-4  font-bold text-lg px-2 py-1  border-black  hover:shadow-2xl  hover:bg-gradient-to-r from-blue-800 to-pink-500   transition duration-500 ease-in-out">
  View more
 
</a>
</div> */}
          </div>


        </div>
      </div>













      <div className="container flex-col  md:flex  lg:flex-row  flex justify-around  box-border lg:rounded-[125px]  md:rounded-[0px] items-center sm:flex-col lg:mt-[50px] lg:mb-[50px]  ">

        {/* leftcontent */}
        <div className="   max-w-screen-sm">
          <motion.div
            initial={{ opacity: 0, y: -70 }}
            whileInView={{ opacity: 100, y: 0, transition: { delay: 0.8, duration: 0.8 } }}
            viewport={{ once: true }}>
            <p style={{ fontFamily: "Nunito,sans-serif" }} className=" font-bold lg:text-[30px] sm:text-[16px] leading-[30px]  font-[Roboto, sans-serif] bg-gradient-to-r from-blue-800 to-pink-500 text-transparent bg-clip-text lg:mt-0  md:mt-[20px] lg:mb-4">
              Escape the ordinary and embark on extraordinary adventures! </p>
          </motion.div>

          {/* <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 100, transition: { delay: 0.8, duration: 0.8 } }}
    viewport={{ once: true }}>
    <h3 style={{ fontFamily: "Nunito,sans-serif" }} className="  lg:text-[46px]  sm:text-[16px] lg:leading-[60px] sm:leading-[10px] font-extrabold relative">Is KAIT The Next Step In Your Journey?</h3>
  </motion.div> */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 100, transition: { delay: 0.8, duration: 0.8 } }}
            viewport={{ once: true }}>
            <p className="font-roboto font-normal lg:text-base lg:leading-6 md:leading-[20px]  sm:leading-[10px] text-gray-700 max-w-full sm:max-w-md md:max-w-lg lg:max-w-[28rem] xl:max-w-[40rem]">
              Joining our vibrant KAIT Community isn't just about connecting with like-minded individuals; it's your key to unlocking unforgettable travel experiences.</p>
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
                  viewport={{ once: true }}>   <h2 style={{ fontFamily: "Nunito,sans-serif" }} className="  text-blue-900 font-bold lg:text-[30px] sm:text-lg  lg:leading-10 sm:leading-[20px] lg:mb-4 sm:mb-2">Unlock Your Next Travel Adventure with KAIT</h2>
                </motion.div>


                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 100, transition: { delay: 0.8, duration: 0.8 } }}
                  viewport={{ once: true }}>
                  <p className="text-gray-700 font-normal text-base lg:leading-7 sm:leading-[10px] md:leading-[20px]  mb-0 font-roboto max-w-full sm:max-w-md md:max-w-lg lg:max-w-[28rem] xl:max-w-[40rem]">Achieve your goals with KAIT, and watch your dream destinations turn into reality.  Set your sights on the pristine beaches of Goa, the lush backwaters of Kerala, the vibrant culture of Thailand, or the captivating energy of Malaysia.  These are just the beginning!  As you progress within KAIT, even more, exotic foreign adventures await.</p>
                </motion.div>
              </div>

            </div>

          </div>



          {/* <div className='flex justify-center cursor-pointer '>     <a href='https://www.kaitworld.com/public/login'><h1 className='  btn btn-border-4  font-bold text-lg px-2 py-1  border-black  hover:shadow-2xl  hover:bg-gradient-to-r from-blue-800 to-pink-500   transition duration-500 ease-in-out '>view more</h1></a>  </div> */}


        </div>

        {/* righrimages */}

        <div className=" box-border relative    w-auto h-auto flex float-left   md:flex-row  pb-[70px]  ml-0  sm:pt-[15px] ">
          {/* <img className=" h-[520px] w-[500px] box-border relative  object-cover border-white border-[15px]" src={Image11} alt="" /> */}
          <img className=" h-[520px] w-[500px] box-border rounded-[80px] relative  object-cover border-white border-[15px]" src={Trip} alt='' />
          {/* <div className='  hidden md:block h-[200px] w-[200px] bg-[#ec8e1a]  rounded-[500px] absolute left-28 mt-[-100px] z-[-111]'></div> */}
          {/* <img className=" h-[390px] w-[380px] box-border absolute  border-white border-[15px] ml-[-202px] mt-[-130px]  hidden md:block " src={Tailand} alt="" /> */}

          {/* <img className=" h-[390px] w-[380px] box-border absolute  border-white border-[15px] ml-[-130px] mt-[-110px] " src={Image12} alt="" /> */}
          {/* <div className=' hidden md:block h-[200px] w-[200px] bg-[#009c81] rounded-[500px] absolute left-[-7rem] mt-[182px] z-[-111]'></div> */}
        </div>


      </div>















      <div className='mb-[30px] mt-[30px]'>

        <div className='grid center w-[90%] m-auto grid-cols-1 gap-5 lg:grid lg:grid-cols-3  md:grid md:grid-col-2  sm:grid sm:grid-cols-2'>
          <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:scale-110">
            <a href="#">
              <img class="rounded-t-lg w-[100%] h-[400px]" src={Image1} alt="" href="https://youtu.be/2PIagAiL_a8?si=nVwb2-ztp5mtOSs-" />

            </a>
            <div className=" p-[10px]">
              <a href="#">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">Introducing The Newest Addition To Trichy Network With The Opening Of A Branch Office In Your Area!</h5>
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
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">Blockchain Awareness Meeting, Fueling Knowledge And Inspiring Adoption Of Blockchain.</h5>
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
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">Solingur Crypto Exchange Awareness Meeting, Spreading Knowledge In Cryptocurrency!</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

            </div>

          </div>

        </div>
        {/* <div className=' flex justify-center mt-[40px] mb-[20px]'>  <a href="/contest" class="  btn btn-border-4  font-bold text-lg px-2 py-1  border-black  hover:shadow-2xl  hover:bg-gradient-to-r from-blue-800 to-pink-500   transition duration-500 ease-in-out">
          View more
         
        </a>
        </div> */}
      </div>











      <h2 className=' text-[40px] font-extrabold ml-9'>Local Trip  </h2>
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


          {contestData.data[0].members.map((img, i) => {
            return (
              <div className="slider transition-all duration-300 hover:scale-110" key={i}>
                <img src={img.image} alt="#" className='w-[300px] h-[300px]' /><p className='relative bg-gray-500 '>{img.title}</p>
              </div>
            );
          })

          }
          {/* {sliderImageUrl.map((imageUrl, index) => {
            return (
              <div className="slider transition-all duration-300 hover:scale-110" key={index}>
                <img src={imageUrl.url} alt="movie" /><p className='relative bg-gray-500 '>{imageUrl.para}</p>
              </div>
            );
          })} */}
          { }
        </Carousel>
      </div>
      <div className=' flex justify-center mb-[15px] mt-[15px]'>  <a href="localtrips" className="  btn btn-border-4  font-bold text-lg px-2 py-1  border-black  hover:shadow-2xl  hover:bg-gradient-to-r from-blue-800 to-pink-500   transition duration-500 ease-in-out">
        View more

      </a>
      </div>
















    </>
  )
};

export default Services;
