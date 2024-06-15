import React from 'react'
import ReactPlayer from 'react-player';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
//  import Image from "../Assets/fdssdf.jpg"
//  import "./global.css"
import Image1 from "../assets/avatar1.jpg"
import Image2 from "../assets/avatar2.jpg"
import Image3 from "../assets/avatar3.jpg"
// import Image4 from "../assets/blog-detaills-1.jpg"

import Girl from "../assets/girl.jpeg"

import Galleryimg from "../assets/gallery.png"



const goldcoin = () => {

    const galleryItems = [

        { type: 'image', src: 'https://tse2.mm.bing.net/th?id=OIP.mOjrQ0yMjA-BSqW-Fi1cpQHaE8&pid=Api&P=0&h=180', alt: 'Image 1' },
        // { type: 'video', src: 'https://youtu.be/tiLpqfDTHeM?si=rOPzenfXkZXHpa3F' },
        { type: 'image', src: 'https://www.jesvenues.com/images/services/corporate-photography/corporate-event-photography-in-hyderabad-1.jpg', alt: 'Image 2' },
        { type: 'image', src: 'https://tse4.mm.bing.net/th?id=OIP.uWKiWdXtY9FL5QDmQyLgZgEyDM&pid=Api&P=0&h=180', alt: 'Image 3' },
        { type: 'image', src: 'https://tse2.explicit.bing.net/th?id=OIP._u2-3M4TrXXx5gZ4rvIsCAHaE8&pid=Api&P=0&h=180', alt: 'Image 4' },
        { type: 'image', src: 'https://tse4.mm.bing.net/th?id=OIP.SGQCj7eA1C3zjj-X9-PeKQHaEK&pid=Api&P=0&h=180', alt: 'Image 5' },
        { type: 'image', src: 'https://tse1.mm.bing.net/th?id=OIP.3utt-mxwQh4Io_t78VtKpAHaE8&pid=Api&P=0&h=180', alt: 'Image 6' },
        // { type: 'video', src: 'https://youtu.be/tiLpqfDTHeM?si=rOPzenfXkZXHpa3F' },
        { type: 'image', src: 'https://tse2.mm.bing.net/th?id=OIP.fNqamSGoRmOKidO7joQQbAHaEK&pid=Api&P=0&h=180', alt: 'Image 7' },
      ]
    
  return (
    <div><div className="bg-gray-100 min-h-screen">

    <div>
      {/* <div className=' w-[100%] h-[300px]  bg-[#b25eda] flex text-center justify-center items-center'> */}
      {/* <img className=' w-[100%] h-[300px] object-cover' alt="" src={Galleryimg} /> */}



      <p className='text-center justify-center items-center text-black  text-5xl font-black mb-9'>Gold Coin Achiver</p>
    </div>
    <main className="container mx-auto py-8">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {galleryItems.map((item, index) => (
          <div key={index} className="galley-hover rounded-lg overflow-hidden max-w-sm mx-auto h-auto transform hover: transition duration-500 hover:scale-125 hover:z-50 cursor-pointer ">
            {item.type === 'image' && (
              <Zoom>
                <img src={Girl} alt={item.alt} className="  object-cover center w-[300px] h-[300px]" />
              </Zoom>
            )}
            {/* {item.type === 'video' && (
              <ReactPlayer
                url={item.src}
                controls
                width="100%"
                height="300px"
              />
            )} */}
          </div>


        ))}



      </div>
    </main >






  </div >
</div>
  )
}

export default goldcoin



