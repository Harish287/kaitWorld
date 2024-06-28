import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Galleryimg from '../assets/gallery.png'; // Assuming you have this image

const Gallery = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://kairaablockchainacademy.com/kait/admin/gallery/gallery_api.php");
        setData(response.data.data); // Assuming API returns an array of objects
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div>
        <img className='w-full h-48 object-cover' alt="Gallery Header" src={Galleryimg} />
      </div>
      <main className="container mx-auto py-8">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">Failed to fetch data.</p>}
        {data.map((e) => (<>
          {/* <span>{e.type}</span> */}
          {/* <span>{e.id}</span> */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'> {e.members.map((e) => (
            <> 
              {/* <span>{e.user_title}</span>
              <span>{e.so_id}</span> */}
              <div key={e} className="gallery-item rounded-lg overflow-hidden max-w-sm mx-auto h-auto transform hover:transition duration-500 hover:scale-125 hover:z-50 cursor-pointer "><Zoom><img src={e.src}></img></Zoom></div>
                  {e.type === 'video' && (
                   <ReactPlayer
                     url={e.src}
                     controls
                     width="100%"
                     height="300px"
                   />
                 )}
            </>
          ))}</div>

        </>
        ))}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.isArray(data) && data.length === 0 ? (
            <p className="text-center">No items to display.</p>
          ) : (
            // data.map((item, index) => (
            //   <div key={index} className="gallery-item rounded-lg overflow-hidden max-w-sm mx-auto h-auto transform hover:transition duration-500 hover:scale-125 hover:z-50 cursor-pointer">
            //     {item.type === 'image' && (
            //       <Zoom>
            //         <img src={item.src} alt={item.alt} className="object-cover w-full h-64" />
            //       </Zoom>
            //     )}
            //     {item.type === 'video' && (
            //       <ReactPlayer
            //         url={item.src}
            //         controls
            //         width="100%"
            //         height="300px"
            //       />
            //     )}
            //   </div>
            // ))
            
          )}
        </div> */}
      </main>
    </div>
  );
};

export default Gallery;
