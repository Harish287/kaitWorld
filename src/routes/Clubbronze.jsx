import React, { useState } from "react";
import Image from "../assets/WhatsApp Image 2024-06-07 at 12.05.35 PM.jpeg"
// import Page from "./clubsilver";
// import PaginationNav from "./pagination";
// import Image1 from "../assets/imgData.jpeg";
//C:\Users\User\Desktop\kait\src\assets\imgData.jpeg
const ClubComponent = ({ e }) => {
  //https://kaitworld.comv1/api/club/1
  console.log(e.id);

  const [filterData, useFilteredData] = useState(null);

  const [limit, uselimitedData] = useState(0);





  // e.members.l
  return (
    <>
      <div
        className={` grid grid-cols-${e.id}  bg-slate-600  items-center gap-6  h-[100vh]  p-6`}
      >
        {e.members.map((e, i) => (
          <div className=" bg-cyan-500 h-[30vh] gap-6 p-8 "><div>{e.name}</div></div>

        ))}

        {/* <div className=" bg-cyan-500 h-[30vh] w-[20vw]"></div>
        <div className=" bg-red-500 h-[30vh] w-[20vw]"></div>
        <div className=" bg-cyan-500 h-[30vh] w-[20vw]"></div>
        <div className=" bg-red-500 h-[30vh] w-[20vw]"></div>
        <div className=" bg-red-500 h-[30vh] w-[20vw]"></div> */}
      </div>
    </>
  );
};

const Clubbronze = ({ e, goToPrevPage, currentPage, goToNextPage, setCurrentPage }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(52); // Number of items to display per page

  // // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = e.members.slice(indexOfFirstItem, indexOfLastItem);

  // // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // // Go to previous page
  // const goToPrevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // // Go to next page
  // const goToNextPage = () => {
  //   if (currentPage < Math.ceil(e.members.length / itemsPerPage)) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  return (
    <div>
      <div className={`grid md:grid-cols-4  items-center gap-6   p-6`}>
        {currentMembers.map((member, index) => (
          <div key={index} className={`bg-gradient-to-r ${index % 2 === 0 ? " bg-[#73036b]" : "bg-[#041c8b]"}  gap-6 p-8 flex box-border rounded-[90px]  text-white`}>
            {/* <div className="flex justify-center items-center">    */}
            <div className=" w-96">{member.user_name}</div>
            <div className=" ">{member.user_id}</div>
          </div>
          // </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={goToPrevPage}
          className="px-4 py-2 mx-1 border rounded-full bg-white text-gray-700"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: Math.ceil(e.members.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 border rounded-full ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
              }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={goToNextPage}
          className="px-4 py-2 mx-1 border rounded-full bg-white text-gray-700"
          disabled={currentPage === Math.ceil(e.members.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};






const Clubsilver = ({ e, goTosilverPrevPage, silvercurrentPage, goTosilverNextPage, setsilverCurrentPage }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const indexOfLastItem = silvercurrentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = e.members.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setsilverCurrentPage(pageNumber);


  // // Go to previous page
  // const goToPrevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // // Go to next page
  // const goToNextPage = () => {
  //   if (currentPage < Math.ceil(e.members.length / itemsPerPage)) {
  //     setCurrentPage(currentPage + 1);
  //   }

  return (
    <div>
      <div className={`grid md:grid-cols-4  items-center gap-20 p-6`}>
        {currentMembers.map(member => (
          <div key={member.user_id} className={`w-[100%] test-silver flex-row justify-center items-center`}>
            <div className="mt-[69px] ml-[-10px] ">
              <img
                className="h-[150px] w-[150px] m-auto object-cover  box-border rounded-[300px] "
                src={member.user_image}
                alt=""
              /></div>

            <div className=" mt-8">   <div
              className="text-center"
              dangerouslySetInnerHTML={{ __html: member.user_name }}
            ></div>

              <div className="text-center">{member.user_id}</div>
            </div>

          </div>

        ))}
      </div>


      <div className="flex justify-center mt-4">
        <button
          onClick={goTosilverPrevPage}
          className="px-4 py-2 mx-1 border rounded-full bg-white text-gray-700"
          disabled={silvercurrentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: Math.ceil(e.members.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 border rounded-full ${silvercurrentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
              }`}
          >
            {index + 1}
          </button>
        ))}  <button
          onClick={goTosilverNextPage}
          className="px-4 py-2 mx-1 border rounded-full bg-white text-gray-700"
          disabled={silvercurrentPage === Math.ceil(e.members.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};


const Clubgold = ({ e, goTogoldPrevPage, goldcurrentPage, goTogoldNextPage, setgoldCurrentPage }) => {

  // const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const indexOfLastItem = goldcurrentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = e.members.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setgoldCurrentPage(pageNumber);


  // // Go to previous page
  // const goToPrevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // // Go to next page
  // const goToNextPage = () => {
  //   if (currentPage < Math.ceil(e.members.length / itemsPerPage)) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };



  return (
    <div>
      <div
        // key={e.id}
        className={`grid md:grid-cols-4  items-center gap-6   p-6 `}
      >
        {currentMembers.map((member) => (
          <div className=" flex justify-center gap-6 flex-col p-8 md:flex md:justify-center md:flex-col md:gap-5  md:p-8  md:h-[300px]   goldclubvback  ">
            <div className="mt-[160px]  lg:mt-[107px] mr-[-116px] md:mt-[160px] sm:mt-[160px]  ">
              <div className="">
                <img
                  className="h-[140px] w-[140px] m-auto object-cover flex justify-center  mt-16"
                  src={member.user_image}
                  alt=""
                />
              </div>  </div>
            <div className="">
              <div
                className="text-center"
                dangerouslySetInnerHTML={{ __html: member.user_name }}
              ></div>

              <div className="text-center">{member.user_id}</div>
            </div>
          </div>

          //           <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          //   <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 ">
          //     <img className="w-[100%] h-auto object-cover"
          //       src={member.user_image}
          //             alt=""/>
          //   </div>
          //   <div class="p-6">
          //     <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center"  dangerouslySetInnerHTML={{ __html: member.user_name }}
          //     ></h5>

          //    <h6 class="block mb-2 font-sans text-l antialiased font-semibold leading-snug tracking-normal text-center text-blue-gray-900" 
          //     >{member.user_id}</h6>
          //   </div>

          // </div>  
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={goTogoldPrevPage}
          className="px-4 py-2 mx-1 border rounded-full bg-white text-gray-700"
          disabled={goldcurrentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: Math.ceil(e.members.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 border rounded-full ${goldcurrentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
              }`}
          >
            {index + 1}
          </button>
        ))}  <button
          onClick={goTogoldNextPage}
          className="px-4 py-2 mx-1 border rounded-full bg-white text-gray-700"
          disabled={goldcurrentPage === Math.ceil(e.members.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Clubplatinum = ({ e, goToPrevPage, currentPage, goToNextPage, setCurrentPage }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = e.members.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);


  // // Go to previous page
  // const goToPrevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // // Go to next page
  // const goToNextPage = () => {
  //   if (currentPage < Math.ceil(e.members.length / itemsPerPage)) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };


  return (
    <div>
      <div
        key={e.id}
        className={`grid md:grid-cols-2 bg-slate-600  items-center gap-6   p-6 `}
      >
        {e.members.map((e) => (
          <div className=" flex justify-center gap-6 flex-col p-8 md:flex md:justify-center md:flex-col md:gap-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  md:p-8     ">

            <img
              className=" text-center m-auto md:h-[300px]  md:w-[300px] h-[100px]w-[100px] object-cover"
              src={e.user_image}
              alt=""
            />

            <div className="text-center">{e.user_id}</div>
            <div
              className="text-center"
              dangerouslySetInnerHTML={{ __html: e.user_name }}
            ></div>{" "}


          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={goToPrevPage}
          className="px-4 py-2 mx-1 border rounded-full bg-white text-gray-700"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: Math.ceil(e.members.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 border rounded-full ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
              }`}
          >
            {index + 1}
          </button>
        ))}  <button
          onClick={goToNextPage}
          className="px-4 py-2 mx-1 border rounded-full bg-white text-gray-700"
          disabled={currentPage === Math.ceil(e.members.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};


const Clubdiamond = ({ e, goToPrevPage, currentPage, goToNextPage, setCurrentPage }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = e.members.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);


  // // Go to previous page
  // const goToPrevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // // Go to next page
  // const goToNextPage = () => {
  //   if (currentPage < Math.ceil(e.members.length / itemsPerPage)) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  return (
    <div>
      <div
        key={e.id}
        className=" grid grid-cols-1 bg-slate-600  items-center  md:overflow-x-scroll h-[500px] gap-6 p-6"
      >
        {e.members.map((e) => (
          <div className="bg-cyan-500 gap-6 p-8  h-[400px] flex justify-center items-center">

            <div className="font-extrabold">{e.notes}</div>

          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={goToPrevPage}
          className="px-4 py-2 mx-1 border rounded-full bg-white text-gray-700"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: Math.ceil(e.members.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 border rounded-full ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
              }`}
          >
            {index + 1}
          </button>
        ))}  <button
          onClick={goToNextPage}
          className="px-4 py-2 mx-1 border rounded-full bg-white text-gray-700"
          disabled={currentPage === Math.ceil(e.members.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export {
  ClubComponent,
  Clubbronze,
  Clubdiamond,
  Clubsilver,
  Clubplatinum,
  Clubgold,
};
