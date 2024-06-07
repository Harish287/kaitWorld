import React from "react";
import Image from "../assets/__next_static_media_img-3.aa9c2645.jpg"
import Shape from "../assets/shape.png"
import Image11 from "../assets/__next_static_media_1.368f2f55.jpg"
import Image12 from "../assets/__next_static_media_2.a97ffdb7.jpg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import anime1 from "../assets/Anime/anime1.jpg"
import anime2 from "../assets/Anime/anime2.png"
import anime3 from "../assets/Anime/anime3.png"
import anime4 from "../assets/Anime/anime4.png"
import anime5 from "../assets/Anime/anime5.png"
import anime6 from "../assets/Anime/anime6.png"
import Imagesvg from "../assets/Anime/stick-man.936d1e5d.svg"





const Services = () => {
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
  return (
   <>






   <div className="" > <img className="flex  z-10 absolute bg-white mix-blend-color-dodge" src={Shape} alt=""/>
    <img className="relative" src={Image} alt=""/>
  </div>




  {/* Happy clients */}


  <div className="flex-col   md:flex  lg:flex-row mt-[50px] flex justify-between  bg-orange-100 items-center sm:flex-col  ">

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

      <div><img className="w-[300px] h-[200px]" src={Image} />  
       
      </div>
    <div>
      <h2 style={{fontFamily:"Nunito,sans-serif"}} className="  text-blue-900 font-bold text-4xl leading-10 mb-4">Join Our Upcoming Campaign</h2>

<p className="text-gray-700 font-normal text-base leading-7 mb-0 font-roboto">Make an impact one piece of clothing at a time to need of others</p></div>
    </div>
    </div>






</div>

   {/* righrimages */}

<div className="w-auto h-auto flex float-righ pt-[70px] pb-[70px] box-border  md:flex float-righ pt-[70px] pb-[70px] box-border ">
  <img className=" h-[540px] w-[540px] box-border relative rounded-[500px] border-white border-[15px]" src={Image11} alt="" />
  <img className=" h-[350px] w-[350px] box-border absolute  rounded-[500px] border-white border-[15px] ml-[-150px] mt-[-50px] " src={Image12} alt="" />



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





<div>

</div>
  
  
  </>
  )
};

export default Services;
