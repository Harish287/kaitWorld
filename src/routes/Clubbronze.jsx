import React, { useState } from "react";
// import Page from "./clubsilver";
// import PaginationNav from "./pagination";
// import Image1 from "../assets/imgData.jpeg";
//C:\Users\User\Desktop\kait\src\assets\imgData.jpeg

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';











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
  const [itemsPerPage] = useState(52); // Number of items to display per page

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = e.members.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (event, pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="grid md:grid-cols-4 items-center container gap-6 p-6">
        {currentMembers.map((member, index) => (
          <div key={index} className={`bg-gradient-to-r ${index % 2 === 0 ? "bg-gradient-to-r from-purple-700 via-purple-500 to-blue-700" : "bg-gradient-to-r from-purple-700 via-purple-500 to-blue-700"} gap-6 p-8 flex box-border rounded-[90px] text-white`}>
            <div className="lg:w-96 md:w-[10px]">{member.user_name}</div>
            <div>{member.user_id}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination
          count={Math.ceil(e.members.length / itemsPerPage)}
          page={currentPage}
          onChange={paginate}
          color="primary"
          size="large"
        />
      </div>
    </div>
  );
};

export default Clubbronze;




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
      <div className={`grid md:grid-cols-4  items-center gap-20 p-6 md:flex-col  container md: justify-center `}>
        {currentMembers.map(member => (

          <div key={member.user_id} className={` test-silver flex-row justify-center items-center  `}>
            <div className="mt-[38px] ml-[45px]  lg:mt-[34px] lg:ml-[42px]  md:mt-[108px] sm:mt-[160px] relative   ">
              <img
                className="h-[195px] w-[195px] object-cover  box-border rounded-[300px]  "
                src={member.user_image}
                alt=""
              /></div>

            <div className=" mt-8">
              <div
                className="text-center"
                dangerouslySetInnerHTML={{ __html: member.user_name }}
              ></div>

              <div className="text-center">{member.user_id}</div>
            </div>


          </div>
        ))}
      </div>


      <div className="flex justify-center mt-[50px]">
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
        className={`grid lg:grid-cols-4 md:grid-cols-2  items-center gap-6  container  p-6 `}
      >
        {currentMembers.map((member) => (
          <div className=" flex justify-center gap-6 m-auto  flex-col p-8 md:flex md:justify-center md:flex-col md:gap-5  md:p-8  md:h-[300px]  mt-12 lg:mt-0  goldclubvback  ">
            <div className="mt-[160px]  lg:mt-[107px] mr-[-116px] md:mt-[108px] sm:mt-[160px]  ">
              <div className="">
                <img
                  className="h-[140px] w-[140px] m-auto object-cover flex justify-center  mt-16"
                  src={member.user_image}
                  alt=""
                />
              </div>  </div>
            <div className="relative">
              <div
                className="text-center"
                dangerouslySetInnerHTML={{ __html: member.user_name }}
              ></div>

              <div className="text-center">{member.user_id}</div>
            </div>
          </div>


        ))}
      </div>
      <div className="flex justify-center mt-8">
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

const Clubplatinum = ({ e, goToplatinumPrevPage, platinumcurrentPage, goToplatinumNextPage, setplatinumCurrentPage }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);

  const indexOfLastItem = platinumcurrentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = e.members.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setplatinumCurrentPage(pageNumber);


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
        className={`grid md:grid-cols-2 items-center gap-6 container   p-6 `}
      >
        {e.members.map((e) => (
          <div className=" flex justify-center gap-6 flex-col p-8 md:flex md:justify-center md:flex-col md:gap-5  md:p-8     ">

            <img
              className=" text-center m-auto md:h-[330px]  md:w-[400px] h-[100px]w-[100px] object-cover box-border rounded-[30px]"
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
          onClick={goToplatinumPrevPage}
          className="px-4 py-2 mx-1 border rounded-full bg-white text-gray-700"
          disabled={platinumcurrentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: Math.ceil(e.members.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 border rounded-full ${platinumcurrentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
              }`}
          >
            {index + 1}
          </button>
        ))}  <button
          onClick={goToplatinumNextPage}
          className="px-4 py-2 mx-1 border rounded-full bg-white text-gray-700"
          disabled={platinumcurrentPage === Math.ceil(e.members.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};




const Clubdiamond = ({ e, goTodiamondPrevPage, diamondcurrentPage, goTodiamondNextPage, setdiamondCurrentPage }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(1);

  const indexOfLastItem = diamondcurrentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = e.members.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setdiamondCurrentPage(pageNumber);


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
        className={`grid md:grid-cols-2  items-center gap-6 container   p-6 `}
      >
        {e.members.map((e) => (
          <div className=" flex justify-center gap-6 flex-col p-8 md:flex md:justify-center md:flex-col md:gap-5   md:p-8     ">

            <img
              className=" text-center m-auto md:h-[350px]  md:w-[500px] h-[100px]w-[100px] object-cover  box-border rounded-[30px]"
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
          onClick={goTodiamondPrevPage}
          className="px-4 py-2 mx-1 border rounded-full bg-white text-gray-700"
          disabled={diamondcurrentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: Math.ceil(e.members.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 border rounded-full ${diamondcurrentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
              }`}
          >
            {index + 1}
          </button>
        ))}  <button
          onClick={goTodiamondNextPage}
          className="px-4 py-2 mx-1 border rounded-full bg-white text-gray-700"
          disabled={diamondcurrentPage === Math.ceil(e.members.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};


const Clubdoublediamond = ({ e, goTodoublediamondPrevPage, doublediamondcurrentPage, goTodoublediamondNextPage, setdoublediamondCurrentPage }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(1);

  const indexOfLastItem = doublediamondcurrentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = e.members.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setdoublediamondCurrentPage(pageNumber);


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
          onClick={goTodoublediamondPrevPage}
          className="px-4 py-2 mx-1 border rounded-full bg-white text-gray-700"
          disabled={doublediamondcurrentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: Math.ceil(e.members.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 border rounded-full ${doublediamondcurrentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
              }`}
          >
            {index + 1}
          </button>
        ))}  <button
          onClick={goTodoublediamondNextPage}
          className="px-4 py-2 mx-1 border rounded-full bg-white text-gray-700"
          disabled={doublediamondcurrentPage === Math.ceil(e.members.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};


const Clubtriplediamond = ({ e, goTotriplediamondPrevPage, triplediamondcurrentPage, goTotriplediamondNextPage, settriplediamondCurrentPage }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(1);

  const indexOfLastItem = triplediamondcurrentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = e.members.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => settriplediamondCurrentPage(pageNumber);


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
          onClick={goTotriplediamondPrevPage}
          className="px-4 py-2 mx-1 border rounded-full bg-white text-gray-700"
          disabled={triplediamondcurrentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: Math.ceil(e.members.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 border rounded-full ${triplediamondcurrentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
              }`}
          >
            {index + 1}
          </button>
        ))}  <button
          onClick={goTotriplediamondNextPage}
          className="px-4 py-2 mx-1 border rounded-full bg-white text-gray-700"
          disabled={triplediamondcurrentPage === Math.ceil(e.members.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Clubkaitking = ({ e, goTokaitkingPrevPage, kaitkingcurrentPage, goTokaitkingNextPage, setkaitkingCurrentPage }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(1);

  const indexOfLastItem = kaitkingcurrentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = e.members.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setkaitkingCurrentPage(pageNumber);


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
          onClick={goTokaitkingPrevPage}
          className="px-4 py-2 mx-1 border rounded-full bg-white text-gray-700"
          disabled={kaitkingcurrentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: Math.ceil(e.members.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 border rounded-full ${kaitkingcurrentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
              }`}
          >
            {index + 1}
          </button>
        ))}  <button
          onClick={goTokaitkingNextPage}
          className="px-4 py-2 mx-1 border rounded-full bg-white text-gray-700"
          disabled={kaitkingcurrentPage === Math.ceil(e.members.length / itemsPerPage)}
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
  Clubdoublediamond,
  Clubtriplediamond,
  Clubkaitking,
};