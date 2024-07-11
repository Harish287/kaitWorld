import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const AchiverBronze = () => {
  const [bronzeClubData, setBronzeClubData] = useState(null);

  const fetchBronzeClub = async () => {
    try {
      const response = await axios.get("https://admin.kaitworld.org/gold/gold_api.php");
      setBronzeClubData(response.data);  // assuming response.data is the JSON object
    } catch (error) {
      console.error('Error fetching bronze club data:', error);
      // Handle error state or retry mechanism here
    }
  };

  useEffect(() => {
    fetchBronzeClub();
  }, []);

  if (!bronzeClubData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mt-[20px]'>
      <h1 className='text-center text-[50px] mb-9 font-bold' style={{ fontFamily: "Nunito, sans-serif" }}>Bronze Club Achievers Meet</h1>
      <div className="grid center w-[90%] m-auto grid-cols-1 gap-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 mt-[30px]">
        {bronzeClubData.data[4]?.members.map((e, i) => (
           <Zoom> <div className='flex justify-center box-border rounded-[30px] mb-[30px]' key={i}>
            <div className="transition-all duration-300 hover:scale-110  box-border rounded-[30px]">
              <img src={e.bronze_club_achivers_image} alt="#" className='w-[400px] h-[250px] box-border rounded-[30px] object-cover' />
              <div>
                <p className='relative bg-white text-center' dangerouslySetInnerHTML={{ __html: e.title }}></p>
              </div>
            </div>
          </div></Zoom>
        ))}
      </div>
    </div>
  );
};

export default AchiverBronze;
