

import React, { useState, useEffect } from 'react';


import axios from 'axios';

const Upcoming = () => {
    const [upcomingData, setupcomingsData] = useState(null);
    const apiUrl = 'https://admin.kaitworld.org/events/event_api.php';

    useEffect(() => {
        const fetchContestData = async () => {
            try {
                const response = await axios.get(apiUrl);
                setupcomingsData(response.data);  // assuming response.data is the JSON object
            } catch (error) {
                console.error('Error fetching contest data:', error);
            }
        };

        fetchContestData();
    }, []);

    if (!upcomingData) {
        return <div>Loading...</div>;
    }
    return (
        <div> <div className="grid  center w-[90%] m-auto grid-cols-1 gap-4 lg:grid lg:grid-cols-3  md:grid md:grid-col-2  sm:grid sm:grid-cols-2  mt-[30px] lg:pb-[60px] ">

        {upcomingData.data[1].members.map((img, i) => {
          return (
            // <div className=' grid-cols-3'>
           <div className='flex justify-center w-[400px] h-[400px] box-border rounded-[30px] lg:mb-[250px] md:mb-[100px] sm:mb-[300px]'>
             <div className="   transition-all duration-300 hover:scale-110 w-[400px] h-[400px] box-border rounded-[30px]" key={i}>
              <img src={img.event_image1} alt="#" className='w-[400px] h-[400px] box-border rounded-[30px] object-cover'  />
            <div className=''>  <p className='relative bg-white text-center  ' dangerouslySetInnerHTML={{ __html: img.place1 }}></p>
              {/* <p className='relative bg-white text-center  p-2 pt-0'  dangerouslySetInnerHTML={{__html:img.content}}></p> */}
            </div></div>
           </div>
          );
        })

        }

      </div></div>
    )
}

export default Upcoming




