import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import Image1 from "./assets/abc.jpeg"
// import Image2 from "./assets/club.jpeg"
import Image3 from "./assets/kaitav.jpeg"

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





import Slider from "react-slick";
var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
   arrows:false,
  };
const App = () => {
  return <>


<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet"></link>
   {/* <Carousel> */}
                {/* <div> */}
                    {/* <img src={Image1}  alt=''/> */}
                    {/* <p className="legend">Legend 1</p> */}
                {/* </div> */}
                {/* <div> */}
                    {/* <img src={Image2}alt='' /> */}
                    {/* <p className="legend">Legend 2</p> */}
                {/* </div> */}
                {/* <div> */}
                    {/* <img src={Image3}alt='' /> */}
                    {/* <p className="legend">Legend 3</p> */}
                {/* </div>
            </Carousel> */}
        <motion.div
      initial={{ width: "120%" }}
      animate={{ width: "100%", transition: { delay: 0.5, duration: 1.2 } }}>
      <img src={Image3} style={{
        width: "100%",
        height: "100%",

        transition: " width 2s",
      }} className='ease-in-out duration-300  ' alt='' />
    </motion.div>





    {/* shape image */}

    {/* <div className=' flex'>
<div className=" pt-[50px]  pb-[50px]" > 
            <img className="flex  z-10 absolute bg-white mix-blend-screen w-[800px] h-[700px]" src={Shape} alt=""/>
            <img className="relativ w-[800px]  h-[700px]" src={Image} alt=""/>
           {/* <img className="relativ w-[1000px]" src={Image21} alt=""/>  */}
    {/* </div> 
 </div> */}





    <div className=" container flex-col  md:flex  lg:flex-row  flex justify-evenly  items-center sm:flex-col  ">



      {/* righrimages */}

      <div className=" box-border relative    lg: w-auto h-auto flex float-left pt-[10px] pb-[10px]   md:flex-row  pt-[10px] pb-[10px] box-border ml-0  sm:pt-[10px] pb-[10px] ml-0">
        <div className=" pt-[50px]  pb-[50px]" >
                  <img   className="flex  z-10  bg-white w-[600px] h-[500px]" src={Imageshape} alt="" />

          {/* <img className="flex  z-10 absolute bg-white mix-blend-screen w-[600px] h-[500px]" src={Shape} alt="" /> */}
          {/* <img className="relativ w-[600px]  h-[500px]" src={Image} alt="" /> */}
          {/* <img className="relativ w-[1000px]" src={Image21} alt=""/>  */}
        </div>
      </div>

{/* leftcontent */}
<div className=" pl-[50px] max-w-screen-sm sm:pl-0 md: pl-0  lg:pl-[0px]">
<p className=" font-bold text-[30px] leading-[30px] font-[Roboto, sans-serif] bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text">
Give them a chance.
</p>
<h3 style={{fontFamily:"Nunito,sans-serif"}} className="  text-[56px] leading-[80px] font-extrabold relative">Believe in The Better<br/> Future of Others.</h3>
<p className="font-roboto font-normal text-base leading-9 text-gray-700 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">Lorem ipsum dolor sit amet consectetur. Quisque quisque cursus tellus dui gravida. Sed at a massa nunc at.</p>


{/* left bottom content */}

<div className="flex items-center max-w-screen-md mt-10 text-left">
 <div className="flex gap-2">

   <div>
    {/* <img className="w-[300px] h-[200px]" src={Image} />   */}
    
   </div>
 <div>
   <h2 style={{fontFamily:"Nunito,sans-serif"}} className="  text-blue-900 font-bold text-4xl leading-10 mb-4">Join Our Upcoming Campaign</h2>

<p className="text-gray-700 font-normal text-base leading-7 mb-0 font-roboto">Make an impact one piece of clothing at a time to need of others</p></div>
 </div>
 </div>






</div>

</div>






<div className="container flex-col  md:flex  lg:flex-row  flex justify-around bg-orange-100 items-center sm:flex-col  ">

{/* leftcontent */}
<div className=" pl-[50px] max-w-screen-sm">
  <p className=" font-bold text-[30px] leading-[30px] font-[Roboto, sans-serif] bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text">
  Give them a chance.
  </p>
  <h3 style={{fontFamily:"Nunito,sans-serif"}} className="  text-[56px] leading-[80px] font-extrabold relative">Believe in The Better<br/> Future of Others.</h3>
  <p className="font-roboto font-normal text-base leading-9 text-gray-700 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">Lorem ipsum dolor sit amet consectetur. Quisque quisque cursus tellus dui gravida. Sed at a massa nunc at.</p>


{/* left bottom content */}

  <div className="flex items-center max-w-screen-md mt-10 text-left">
    <div className="flex gap-2">

      <div><img className="w-[500px] h-[190px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmmXYHhdwwcmW2Xm_OlS75ILepiNHIADZQ-IO9KVpvtA2iqDl_qGXpm5BFc2LGkRHQRns&usqp=CAU"/>  
       
      </div>
    <div>
      <h2 style={{fontFamily:"Nunito,sans-serif"}} className="  text-blue-900 font-bold text-4xl leading-10 mb-4">Join Our Upcoming Events</h2>

<p className="text-gray-700 font-normal text-base leading-7 mb-0 font-roboto">Teamwork is so important that it is virtually impossible for you to reach the heights of your capabilities or make the money that you want without becoming very good at it.</p></div>
    </div>
    </div>






</div>

   {/* righrimages */}

<div className="w-auto h-auto flex float-right pt-[70px] pb-[70px] box-border  md:flex float-right pt-[70px] pb-[70px] box-border ">
  <img className=" h-[540px] w-[540px] box-border relative rounded-[500px] border-orange-100 border-[15px]" src="https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136839.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1717459200&semt=ais_user"alt="" />
  <img className=" h-[350px] w-[350px] box-border absolute  rounded-[500px] border-orange-100 border-[15px] ml-[-150px] mt-[-50px] " src="https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136824.jpg" alt="" />


 {/* Happy clients */}

<div className=" bg-white w-[350px] h-[200px] absolute box-border border-[15px] rounded-[50px] mt-[390px] ml-[-135px]">
 
  <div className="flex gap-10 justify-evenly">
  <div className=" flex justify-center items-center"><img className="w-[50px] h-[50px] box-border" src={Imagesvg} alt=""/>  </div>

 <div ><h2 className=" text-center mt-2 text-3xl font-bold">18000 +</h2>
  <p className=" text-center font-bold text-1xl">happy Volunteer</p></div>
  </div>


<div className="mt-4 gap-5"><Slider className=" text-center" {...settings}>
      <div >
      <img className="w-[50px] h-[50px] box-border rounded-[500px]" src={anime1} alt=""/>
      </div>
      <div>
      <img className="w-[50px] h-[50px] box-border rounded-[500px]" src={anime2} alt=""/>      </div>
      <div>
      <img className="w-[50px] h-[50px] box-border rounded-[500px]" src={anime3} alt=""/>      </div>
      <div>
      <img className="w-[50px] h-[50px] box-border rounded-[500px]" src={anime4} alt=""/>      </div>
      <div>
      <img className="w-[50px] h-[50px] box-border rounded-[500px]" src={anime5} alt=""/>      </div>
      <div>
      <img className="w-[50px] h-[50px] box-border rounded-[500px]" src={anime6} alt=""/>      </div>
    </Slider></div>
</div>
</div>
</div>






<div className=" container flex-col  md:flex  lg:flex-row  flex justify-evenly  items-center sm:flex-col justify-center items-center ">


  
   {/* righrimages */}

<div className=" box-border relative    lg:ml-44 w-auto h-auto flex float-left pt-[150px] pb-[70px]   md:flex-row  pt-[150px] pb-[70px] box-border ml-0  sm:pt-[150px] pb-[70px] ml-0">
  <img className=" h-[520px] w-[500px] box-border relative  object-cover border-white border-[15px]" src={Image11} alt="" />
  <div className='h-[200px] w-[200px] bg-[#ec8e1a]  rounded-[500px] absolute  left-40 mt-[-100px] z-[-111]'></div>
  <img className=" h-[390px] w-[380px] box-border absolute  border-white border-[15px] ml-[-130px] mt-[-110px] " src={Image12} alt="" />
  <div className='h-[200px] w-[200px] bg-[#009c81] rounded-[500px] absolute left-[-7rem] mt-[182px] z-[-111]'></div>
</div>

{/* leftcontent */}
<div className=" pl-[50px] max-w-screen-sm sm:pl-0 md: pl-0  lg:pl-[0px]">
  <p className=" font-bold text-[30px] leading-[30px] font-[Roboto, sans-serif] bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text">
  Give them a chance.
  </p>
  <h3 style={{fontFamily:"Nunito,sans-serif"}} className="  text-[56px] leading-[80px] font-extrabold relative">Believe in The Better<br/> Future of Others.</h3>
  <p className="font-roboto font-normal text-base leading-9 text-gray-700 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">Lorem ipsum dolor sit amet consectetur. Quisque quisque cursus tellus dui gravida. Sed at a massa nunc at.</p>


{/* left bottom content */}

  <div className="flex items-center max-w-screen-md mt-10 text-left">
    <div className="flex gap-2">

      <div><img className="w-[300px] h-[200px]" src={Image} />  
       
      </div>
    <div>
      <h2 style={{fontFamily:"Nunito,sans-serif"}} className="  text-blue-900 font-bold text-4xl leading-10 mb-4">Join Our Upcoming Campaign</h2>

<p className="text-gray-700 font-normal text-base leading-7 mb-0 font-roboto">Make an impact one piece of clothing at a time to need of others</p></div>
    </div>
    </div>
</div>
</div>
            </>;
};

export default App;
