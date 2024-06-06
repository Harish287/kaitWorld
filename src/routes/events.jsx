import React, { useState, useEffect } from 'react';
import Image1 from "../assets/pic4.jpg"



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

      setCountdown(`${days}D - ${hours}H - ${minutes}M - ${seconds}S`);
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Call immediately to avoid initial delay
    return () => clearInterval(interval);
  }, []);

  return (
  <>

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet"></link>



    <div className="events">
      <div className="home flex justify-center items-center" >
        <div className=" absolute ">
        <h6 className=' text-center text-cyan-50 font-bold text-5xl font-[Roboto, sans-serif]' >Time To Rethink</h6>
          <h5 className=' text-center text-cyan-50 '>Unleashed Potential!</h5>
          <p className=' text-center text-cyan-50 text-lg font-medium '>
            Welcome to Easy Event Solutions! Our website is your go-to destination for effortless event planning and unforgettable experiences. 
            At Easy Event Solutions, we understand that organizing an event can be overwhelming and time-consuming. That's why we're here to simplify the process and make it as smooth as possible. 
            Whether you're hosting a corporate conference, a gala, a wedding, or any other special occasion, we've got you covered.
          </p> </div>
          <img className='w-[100%] h-[400px] object-cover' src='https://www.jesvenues.com/images/services/corporate-photography/corporate-event-photography-in-hyderabad-1.jpg' alt='' />
         
       
      </div>

      <div className=" w-[100%]">
        <div className="flex justify-content-center">
          <div className="col-sm-9">
            <h6 className=' text-center font-bold text-[30px] leading-[30px] font-[Roboto, sans-serif] bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text'>Next Event Starts In</h6>
            <p className='font-roboto font-normal text-base leading-6 text-gray-700'>
              Get ready for the upcoming conference as it is just around the corner! The countdown has begun, and excitement is in the air. 
              Mark your calendars and prepare to be part of an unforgettable event. Stay tuned for updates, speaker announcements, and registration details. The Next Conference Starts In:
            </p>
            <h6 className='text-center text-7xl   text-[56px] leading-[80px] font-extrabold relative' style={{fontFamily:"Nunito,sans-serif"}} id="conferenceTimingClock">{countdown}</h6>
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
    </div>
    </>
  );
};

export default Events;
