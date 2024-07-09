import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AchiverBronze = () => {
    const [bronzeClubData, setBronzeClubData] = useState(null);
    const [countdown, setCountdown] = useState('');


    const fetchBronzeClub = async () => {
        try {
            const response = await axios.get("https://admin.kaitworld.org/contest/contest_api.php");
            setBronzeClubData(response.data);  // assuming response.data is the JSON object
        } catch (error) {
            console.error('Error fetching bronze club data:', error);
            // Handle error state or retry mechanism here
        }
    };
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

    useEffect(() => {
        fetchBronzeClub();
    }, []);

    if (!bronzeClubData) {
        return <div>Loading...</div>;
    }

    return (
        <div className=' container mt-[20px]'>

<h6 className='  text-center text-[30px] lg:text-[50px] sm:text-[25px] font-extrabold pb-5' style={{ fontFamily: "Nunito,sans-serif" }}> Upcoming Contest</h6>

  <h6 className='  text-center text-[30px] lg:text-[40px] sm:text-[25px] font-extrabold' style={{ fontFamily: "Nunito,sans-serif" }}> Contest Ends In</h6>
            {/* <p className='font-roboto font-normal text-base leading-6 text-gray-700'>
              Get ready for the upcoming conference as it is just around the corner! The countdown has begun, and excitement is in the air. 
              Mark your calendars and prepare to be part of an unforgettable event. Stay tuned for updates, speaker announcements, and registration details. The Next Conference Starts In:
            </p> */}
            <h6 className='text-center lg:text-[52px]  sm:text-[50px] lg:leading-[80px] sm:leading-0 font-extrabold relative' style={{ fontFamily: "Nunito,sans-serif" }} id="conferenceTimingClock">{countdown}</h6>

            {/* <h6 className='text-center lg:text-7xl   lg:text-[56px] lg:leading-[80px] font-extrabold relative' style={{fontFamily:"Nunito,sans-serif"}} id="conferenceTimingClock">{countdown}</h6> */}

            <div className="grid  center w-[90%] m-auto grid-cols-1 gap-4 lg:grid lg:grid-cols-3  md:grid md:grid-col-2  sm:grid sm:grid-cols-2  mt-[30px]  ">
                {
                    bronzeClubData && bronzeClubData?.data.upcoming_contest?.map((e, i) => (
                        <div className='flex justify-center  box-border  md:mb-[10px] pt-[20px] '>
                            <div className="   transition-all duration-300 hover:scale-110  box-border  mt-[20px]" key={i}>
                                <img src={e.upcoming_image} alt="#" className='rounded-t-lg w-[380px] h-[400px] box-border rounded-[30px] object-cover' />
                                <div className=''> 
                                        {/* <p className='relative bg-white text-center  ' dangerouslySetInnerHTML={{ __html: e.place1 }}></p> */}
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>




{/* contest */}
{/* <h6 className='  text-center text-[30px] lg:text-[50px] sm:text-[25px] font-extrabold pb-5 pt-5' style={{ fontFamily: "Nunito,sans-serif" }}> Completed Contest</h6> */}


{/* <div className="grid  center w-[90%] m-auto grid-cols-1 gap-4 lg:grid lg:grid-cols-3  md:grid md:grid-col-2  sm:grid sm:grid-cols-2  mt-[30px]  ">
                {
                    bronzeClubData && bronzeClubData?.data.contest?.map((e, i) => (
                        <div className='flex justify-center w-[400px] h-[400px] box-border rounded-[30px] md:mb-[10px] '>
                            <div className="   transition-all duration-300 hover:scale-110  box-border rounded-[30px]" key={i}>
                                <img src={e.image} alt="#" className='rounded-t-lg w-[380px] h-[400px] box-border rounded-[30px] object-cover' />
                                <div className=''> 
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div> */}


        </div>
    );
};

export default AchiverBronze;
