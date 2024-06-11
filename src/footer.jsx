import React from 'react'
import fb from "./assets/fb.png";
import twitter from "./assets/twitter.png";
import insta from "./assets/insta.png";
import linkedin from "./assets/im.png";
import youtube from "./assets/48968.png";

import { IoMdMailOpen } from "react-icons/io";

const footer = () => {
  return (
    <div >

      <div className='flex  justify-between h-[56px] ' style={{    background:" linear-gradient(90deg, rgba(157, 73, 160, 1) 0%, rgba(66, 81, 154, 1) 50%)"}}>

        <div className=" flex items-center">

          <a href="/">
            <div className=' flex text-xl text-white gap-[10px]'> <p className='flex justify-center items-center text-[27px]'><IoMdMailOpen /></p>
              <p>support@kaitworld.com</p></div>
          </a>


        </div>









        <div className="flex gap-[15px] mr-[10px]">
          <p>
            <a href="https://www.facebook.com/profile.php?id=61558117415540">
              <img className='w-[50px] h-[50px] box-border rounded-[100px]  border-[white]  bg-white border-[4px] transition-all duration-300 hover:scale-110' src={fb} alt="" />
            </a>
          </p>
          <p>
            <a href="https://twitter.com/Unikaabeauty">
              <img className='w-[50px] h-[50px] box-border rounded-[100px]  border-[white]  bg-white border-[4px] transition-all duration-300 hover:scale-110' src={twitter} alt="" />
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/unikaabeauty">
              <img className='w-[50px]  h-[50px] box-border rounded-[100px]  border-[white]  bg-white border-[4px] transition-all duration-300 hover:scale-110' src={insta} alt="" />
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/unikaa-beauty-311122304">
              <img className='w-[50px]  h-[50px] box-border rounded-[100px]  border-[white]  bg-white border-[4px] transition-all duration-300 hover:scale-110' src={linkedin} alt="" />
            </a>
          </p>
          <p className='w-50px'>
            <a href="https://youtu.be/2PIagAiL_a8?si=PEUrGw_ZdJH5Fvq1">
              <img className='w-[50px]  h-[50px] box-border rounded-[100px] border-[white] bg-white  border-[4px] transition-all duration-300 hover:scale-110' src={youtube} alt="" />
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