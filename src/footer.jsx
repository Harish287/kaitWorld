import React from 'react'
import fb from "./assets/fb.png";
import twitter from "./assets/twitter.png";
import insta from "./assets/insta.png";
import linkedin from "./assets/im.png";
import youtube from "./assets/48968.png";



import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { IoMdMailOpen } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


const footer = () => {
  return (
    <div >

      <div className='md:flex md:justify-between h-[65px]  sm:flex-row  sm:justify-center ' style={{    background:" linear-gradient(90deg, rgba(157, 73, 160, 1) 0%, rgba(66, 81, 154, 1) 50%)"}}>

        <div className="flex  justify-center md:flex md:items-center sm:justify-center sm:flex sm:text-center">

          <a href="/">
            <div className=' flex text-sm lg:text-xl md:text-base sm:text-sm text-white gap-[10px] sm:justify-center'> <p className='flex justify-center items-center text-sm sm:text-sm lg:text-[27px] '><IoMdMailOpen /></p>
              <p>support@kaitworld.com</p></div>
          </a>


        </div>









        <div className="flex gap-[15px] mr-[10px] justify-center items-center">
          <p>
            <a href="https://www.facebook.com/profile.php?id=61558117415540">
            < CiFacebook className=' bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 h-[25px] w-[25px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] sm:w-[32px] sm:h-[32px]  box-border rounded-[100px] text-white border-[white]  bg-white border-[4px] transition-all duration-300 hover:scale-110'/>

              {/* <img className='h-[30px] w-[30px] lg:w-[50px] lg:h-[50px] md:w-[35px] md:h-[35px] sm:w-[32px] sm:h-[32px] box-border rounded-[100px]  border-[white]  bg-white border-[4px] transition-all duration-300 hover:scale-110' src={fb} alt="" /> */}
            </a>
          </p>
          <p>
            <a href="https://twitter.com/Unikaabeauty">           
              < FaXTwitter className=' bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 h-[25px] w-[25px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] sm:w-[32px] sm:h-[32px]  box-border rounded-[100px] text-white border-[white]  bg-white border-[4px] transition-all duration-300 hover:scale-110'/>

              {/* <img className='h-[30px] w-[30px] lg:w-[50px] lg:h-[50px] md:w-[35px] md:h-[35px] sm:w-[32px] sm:h-[32px]  box-border rounded-[100px]  border-[white]  bg-white border-[4px] transition-all duration-300 hover:scale-110' src={twitter} alt="" /> */}
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/unikaabeauty">
             < FaInstagram className=' bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 h-[25px] w-[25px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] sm:w-[32px] sm:h-[32px]  box-border rounded-[100px] text-white border-[white]  bg-white border-[4px] transition-all duration-300 hover:scale-110'/>
              {/* <img className='h-[30px] w-[30px] lg:w-[50px] lg:h-[50px] md:w-[35px] md:h-[35px] sm:w-[32px] sm:h-[32px]  box-border rounded-[100px]  border-[white]  bg-white border-[4px] transition-all duration-300 hover:scale-110' src={insta} alt="" /> */}
            </a>
          </p>


          {/* <p>
            <a href="https://www.linkedin.com/in/unikaa-beauty-311122304">
            < FaInstagram className=' bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 h-[25px] w-[25px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] sm:w-[32px] sm:h-[32px]  box-border rounded-[100px] text-white border-[white]  bg-white border-[4px] transition-all duration-300 hover:scale-110'/> */}

              {/* <img className='h-[30px] w-[30px] lg:w-[50px] lg:h-[50px] md:w-[35px] md:h-[35px] sm:w-[32px] sm:h-[32px]  box-border rounded-[100px]  border-[white]  bg-white border-[4px] transition-all duration-300 hover:scale-110' src={linkedin} alt="" /> */}
            {/* </a>
          </p> */}


          <p className='w-50px'>
            <a href="https://youtu.be/2PIagAiL_a8?si=PEUrGw_ZdJH5Fvq1">
            < FaYoutube className=' bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 h-[25px] w-[25px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] sm:w-[32px] sm:h-[32px]  box-border rounded-[100px] text-white border-[white]  bg-white border-[4px] transition-all duration-300 hover:scale-110'/>

              {/* <img className='h-[30px] w-[30px] lg:w-[50px] lg:h-[50px] md:w-[35px] md:h-[35px] sm:w-[32px] sm:h-[32px]  box-border rounded-[100px] border-[white] bg-white  border-[4px] transition-all duration-300 hover:scale-110' src={youtube} alt="" /> */}
            </a>
          </p>
        </div>

      </div>



      <div className="   bg-black text-white h-[50px] flex justify-center items-center">
        <div className="text-center">
          <p>@{new Date().getFullYear()} KaitWorld</p>
        </div>
        {/* <div className="sb__footer-below-links">
<a href="/terms"><div><p>terms & conditions</p></div></a>
</div> */}
      </div></div>
  )
}

export default footer