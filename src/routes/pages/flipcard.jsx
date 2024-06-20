import React from "react";
import img1 from "../../assets/KAIT King.png"
import img2 from "../../assets/KAIT King.png"
import img3 from "../../assets/KAIT King.png"


function Faiz() {


  return (
    <>
    
        <div  className=" h-[90vh] w-[100%] flex items-center justify-around flex-col ">
            <h1 className="team-h font-extrabold  text-center text-5xl h-[18vh] w-[45vw] ">02+ Stunning Homepage Variations</h1>
            <div className="h-[43vh] w-[85%]  flex justify-around">
                <div data-aos="fade-up" className="xl:w-30%  teamcard h-[100%] w-[30%] cursor-pointer ">
                    <div className="team-card h-[35vh] w-[100%] rounded-xl ">
                        <img className="h-[100%] w-[100%]  rounded-xl" src={img1} alt="" />
                    </div>
                    <h1 className="team-hh text-gray-300 hover:text-red-400 text-center font-semibold text-xl mt-2">Home Demo - 1</h1>
                </div>
                <div data-aos="fade-up" className="xl:w-30%  teamcard h-[100%]  w-[30%] cursor-pointer ">
                    <div className="team-card h-[35vh] w-[100%] rounded-xl">
                        <img className="h-[100%] w-[100%]  rounded-xl" src={img2} alt="" />
                    </div>
                    <h1 className="team-hh text-gray-300 hover:text-red-400 text-center font-semibold text-xl mt-2">Home Demo - 2</h1>
                </div>
                <div data-aos="fade-up" className="xl:w-30%  teamcard h-[100%]  w-[30%] cursor-pointer ">
                    <div className="team-card h-[35vh] w-[100%] rounded-xl ">
                        <img className="h-[100%] w-[100%]  rounded-xl" src={img3} alt="" />
                    </div>
                    <h1 className="team-hh text-gray-300 hover:text-red-400 text-center font-semibold text-xl mt-2">+ More Home Demos</h1>
                </div>

              
            </div>

        </div>
    </>
    
  );
}

export default Faiz;