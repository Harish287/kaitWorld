import React from 'react'
import fb from "./assets/fb.png";
import twitter from "./assets/twitter.png";
import insta from "./assets/insta.png";
import linkedin from "./assets/im.png";
import youtube from "./assets/48968.png";



const footer = () => {
  return (
    <div > 

<div className='flex bg-[#95469f] justify-between  '>

          <div className="">
          <h4 className=' font-extrabold'>Contact Us</h4>
          <a href="/">
            <p>Email</p>
          </a>
          <a href="/aboutus">
            <p>phone Number</p>
          </a>
        
        </div>
        





      


        <div className="flex mt-[85px]">
            <p>
              <a href="https://www.facebook.com/profile.php?id=61558117415540">
                <img className='w-[50px] h-[50px] box-border rounded-[100px]  border-[grey] border-[4px]' src={fb} alt="" />
              </a>
            </p>
            <p>
              <a href="https://twitter.com/Unikaabeauty">
                <img className='w-[50px] h-[50px] box-border rounded-[100px]  border-[grey] border-[4px]' src={twitter} alt="" />
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/unikaabeauty">
                <img className='w-[50px]  h-[50px] box-border rounded-[100px]  border-[grey] border-[4px]' src={insta} alt="" />
              </a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/unikaa-beauty-311122304">
                <img className='w-[50px]  h-[50px] box-border rounded-[100px]  border-[grey] border-[4px]' src={linkedin} alt="" />
              </a>
            </p>
            <p className='w-50px'>
              <a href="https://youtu.be/2PIagAiL_a8?si=PEUrGw_ZdJH5Fvq1">
                <img className='w-[50px]  h-[50px] box-border rounded-[100px] border-[grey] border-[4px]' src={youtube} alt="" />
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