import React, { useState, useEffect } from 'react';
import Eventimg from "../assets/event.png"

import Imageevents from "../assets/Untitled design (25).png"
import Shape from "../assets/shape.png"
import Eventimgs from "../assets/maxresdefault.jpg"
// import Card from "../routes/pages/flipcard"
// import New from "../routes/pages/new"
import Image21 from "../assets/coin.png"

import axios from 'axios';


const Events = () => {



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



  const [goldcountdown, setgoldCountdown] = useState('');

  useEffect(() => {
    const countdownDate = new Date("2024-07-30").getTime();

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

      setgoldCountdown(`${days}Days - ${hours}Hours - ${minutes}Minutes - ${seconds}Seconds`);
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Call immediately to avoid initial delay
    return () => clearInterval(interval);
  }, []);




  const [silvercountdown, setsilverCountdown] = useState('');

  useEffect(() => {
    const countdownDate = new Date("2024-08-30").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setsilverCountdown("SORRY, THE EVENT IS OVER");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setsilverCountdown(`${days}Days - ${hours}Hours - ${minutes}Minutes - ${seconds}Seconds`);
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Call immediately to avoid initial delay
    return () => clearInterval(interval);
  }, []);



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


  const [achiversData, setAchiversData] = useState(null);
  const apiUrl = 'https://kairaablockchainacademy.com/kait/admin/events/event_api.php';

  useEffect(() => {
    const fetchContestData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setAchiversData(response.data);  // assuming response.data is the JSON object
      } catch (error) {
        console.error('Error fetching contest data:', error);
      }
    };

    fetchContestData();
  }, []);

  if (!achiversData) {
    return <div>Loading...</div>;
  }



  return (
    <>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet"></link>

      <div><img src={Eventimg} /></div>





      {/* shape image */}

      {/* <div className=' flex'>
<div className=" pt-[50px]  pb-[50px]" > 
            <img className="flex  z-10 absolute bg-white mix-blend-screen w-[800px] h-[700px]" src={Shape} alt=""/>
            <img className="relativ w-[800px]  h-[700px]"  src={Image21} alt=""/> */}
      {/* </div> 
 </div> */}


      <div>
        <h2 className=' text-center text-[50px] mb-9 font-bold' style={{ fontFamily: "Nunito,sans-serif" }}>Events</h2>
      </div>

      <div className="events">



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


     


      <div className="grid center w-[90%] m-auto grid-cols-1 gap-4 lg:grid lg:grid-cols-3  md:grid md:grid-col-2  sm:grid sm:grid-cols-2  mt-[30px] lg:pb-[60px] ">

        {achiversData.data[0].members.map((img, i) => {
          return (
            // <div className=' grid-cols-3'>
           <div className='flex justify-center w-[400px] h-[400px] box-border rounded-[30px] mt-10'>
             <div className="   transition-all duration-300 hover:scale-110 w-[400px] h-[400px] box-border rounded-[30px]" key={i}>
              <img src={img.event_image} alt="#" className='w-[400px] h-[400px] box-border rounded-[30px] object-cover'  />
              <p className='relative bg-white text-center ' dangerouslySetInnerHTML={{ __html: img.place }}></p>
            </div>
           </div>
          );
        })

        }

      </div>
      </div>


<br/>

    

    </>
  );
};

export default Events;
