import React, { useState, useEffect, useRef } from "react";
import Banner from "../assets/KAIT King.png";
import {
  // ClubComponent,
  Clubbronze,
  Clubgold,
  Clubsilver,
  Clubplatinum,
  Clubdiamond,
  Clubdoublediamond,
  Clubtriplediamond,
  Clubkaitking} from "./Clubbronze";


import axios from "axios";
// import "./global.css"


const Club = () => {
  const [tab, setTab] = useState("bronze");

  const ClubRef = useRef(null);

  const updateTab = (e) => {
    setTab(e);
    // console.log(e);
  };

  const [filterlist, setFilterlist] = useState([]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => ClubRef.current.scrollIntoView({ behavior: 'smooth' }), 1000);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://admin.kaitworld.org/club/api.php"
        );
        setData(response.data);
        setLoading(false);
        console.log(data)
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);





  const [silvercurrentPage, setsilverCurrentPage] = useState(1);
  const silverpaginate = pageNumber => setsilverCurrentPage(pageNumber);

  // Go to previous page
  const goTosilverPrevPage = () => {
    if (silvercurrentPage > 1) {
      setsilverCurrentPage(silvercurrentPage - 1);
    }
  };

  // Go to next page
  const goTosilverNextPage = () => {
    // if (currentPage < Math.ceil(e.members.length / itemsPerPage)) {
    setsilverCurrentPage(silvercurrentPage + 1);
    // }
  };




  const [platinumcurrentPage, setplatinumCurrentPage] = useState(1);
  const platinumpaginate = pageNumber => setplatinumCurrentPage(pageNumber);

  // Go to previous page
  const goToplatinumPrevPage = () => {
    if (platinumcurrentPage > 1) {
      setplatinumCurrentPage(platinumcurrentPage - 1);
    }
  };

  // Go to next page
  const goToplatinumNextPage = () => {
    // if (currentPage < Math.ceil(e.members.length / itemsPerPage)) {
    setplatinumCurrentPage(platinumcurrentPage + 1);
    // }
  };


  const [diamondcurrentPage, setdiamondCurrentPage] = useState(1);
  const diamondpaginate = pageNumber => setdiamondCurrentPage(pageNumber);

  // Go to previous page
  const goTodiamondPrevPage = () => {
    if (diamondcurrentPage > 1) {
      setdiamondCurrentPage(diamondcurrentPage - 1);
    }
  };

  // Go to next page
  const goTodiamondNextPage = () => {
    // if (currentPage < Math.ceil(e.members.length / itemsPerPage)) {
    setdiamondCurrentPage(diamondcurrentPage + 1);
    // }
  };





  const [goldcurrentPage, setgoldCurrentPage] = useState(1);
  const goldpaginate = pageNumber => setgoldCurrentPage(pageNumber);

  // Go to previous page
  const goTogoldPrevPage = () => {
    if (goldcurrentPage > 1) {
      setgoldCurrentPage(goldcurrentPage - 1);
    }
  };

  // Go to next page
  const goTogoldNextPage = () => {
    // if (currentPage < Math.ceil(e.members.length / itemsPerPage)) {
    setgoldCurrentPage(goldcurrentPage + 1);
    // }
  };



  const [doublediamondcurrentPage, setdoublediamondCurrentPage] = useState(1);
  const doublediamondpaginate = pageNumber => setdoublediamondCurrentPage(pageNumber);

  // Go to previous page
  const goTodoublediamondPrevPage = () => {
    if (doublediamondcurrentPage > 1) {
      setdoublediamondCurrentPage(doublediamondcurrentPage - 1);
    }
  };

  // Go to next page
  const goTodoublediamondNextPage = () => {
    // if (currentPage < Math.ceil(e.members.length / itemsPerPage)) {
    setdoublediamondCurrentPage(doublediamondcurrentPage + 1);
    // }
  };


  const [triplediamondcurrentPage, settriplediamondCurrentPage] = useState(1);
  const triplediamondpaginate = pageNumber => settriplediamondCurrentPage(pageNumber);

  // Go to previous page
  const goTotriplediamondPrevPage = () => {
    if (triplediamondcurrentPage > 1) {
      settriplediamondCurrentPage(triplediamondcurrentPage - 1);
    }
  };

  // Go to next page
  const goTotriplediamondNextPage = () => {
    // if (currentPage < Math.ceil(e.members.length / itemsPerPage)) {
    settriplediamondCurrentPage(triplediamondcurrentPage + 1);
    // }
  };



  const [kaitkingcurrentPage, setkaitkingCurrentPage] = useState(1);
  const kaitkingpaginate = pageNumber => setkaitkingCurrentPage(pageNumber);

  // Go to previous page
  const goTokaitkingPrevPage = () => {
    if (kaitkingcurrentPage > 1) {
      setkaitkingCurrentPage(kaitkingcurrentPage - 1);
    }
  };

  // Go to next page
  const goTokaitkingNextPage = () => {
    // if (currentPage < Math.ceil(e.members.length / itemsPerPage)) {
    setkaitkingCurrentPage(kaitkingcurrentPage + 1);
    // }
  };


  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50); // Number of items to display per page

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentMembers = e.members.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Go to previous page
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Go to next page
  const goToNextPage = () => {
    // if (currentPage < Math.ceil(e.members.length / itemsPerPage)) {
    setCurrentPage(currentPage + 1);
    // }
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }




  const handleFilter = (e) => {
    const value = (e.target.value || "").toLowerCase();

    console.log(value);
    const filteredMembers = data.data.map((link) => {
      const filtered = link.members.filter((member) =>
        (member.user_id || "").toLowerCase().includes(value) ||
        (member.user_name || "").toLowerCase().includes(value)
      );
      console.log(filtered);
      setCurrentPage(1);
      setsilverCurrentPage(1);
      setgoldCurrentPage(1);
      return { ...link, members: filtered };
    });
    setFilterlist(filteredMembers);
  };

  return (
    <div>
      <img className="w-[100%]" src={Banner} alt="" />
      <h1 ref={ClubRef} className="flex justify-center text-xl font-bold mt-9 mb-9">Club</h1>
      <div className=" md:flex md:justify-center container">
        {" "}
        <div className="md:flex px-0 md:px-28 gap-6 justify-center text-center">
          {data.data.map((link, index) => (
            <>
              <div>
                <div
                  key={link.id}
                  onClick={() => updateTab(link.club)}
                  className={`md:my-0 my-7 flex flex-col  hover:text-blue-500  ${tab === link.club ? " text-blue-500" : " text-black"
                    } font-semibold hover:cursor-pointer  active:text-gray-400`}
                >
                  {link.club}
                  <div
                    className={`h-1 w-28 mx-auto bg-white hover:bg-white ${tab === link.club ? " bg-white" : " bg-white"
                      }`}
                  ></div>
                </div>
              </div>
            </>
          ))}
        </div>
        <form class="max-w-md ml-auto mr-[40px]">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative flex">
            <div class=" inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-1 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleFilter}
              placeholder="Search user ID"
              required
            />
          </div>
        </form>
      </div>


      <div className="  w-[100%]">
        {(filterlist.length > 0 ? filterlist : data.data).map((link, index) => (
          <div className="" key={link.id}>
            {tab === "bronze" && link.club === "bronze" && (
              <Clubbronze e={link} goToNextPage={goToNextPage} currentPage={currentPage} setCurrentPage={setCurrentPage} goToPrevPage={goToPrevPage} />
            )}

            {tab === "silver" && link.club === "silver" && (
              <Clubsilver e={link} goTosilverNextPage={goTosilverNextPage} silvercurrentPage={silvercurrentPage} setsilverCurrentPage={setsilverCurrentPage} goTosilverPrevPage={goTosilverPrevPage} />
            )}

            {tab === "gold" && link.club === "gold" && (
              <Clubgold e={link} goTogoldNextPage={goTogoldNextPage} goldcurrentPage={goldcurrentPage} setgoldCurrentPage={setgoldCurrentPage} goTogoldPrevPage={goTogoldPrevPage} />
            )}

            {tab === "platinum" && link.club === "platinum" && (
              <Clubplatinum e={link} goToplatinumNextPage={goToplatinumNextPage} platinumcurrentPage={platinumcurrentPage} setplatinumCurrentPage={setplatinumCurrentPage} goToplatinumPrevPage={goToplatinumPrevPage} />
            )}
            {tab === "diamond" && link.club === "diamond" && (
              <Clubdiamond e={link} goTodiamondNextPage={goTodiamondNextPage} diamondcurrentPage={diamondcurrentPage} setdiamondCurrentPage={setdiamondCurrentPage} goTodiamondPrevPage={goTodiamondPrevPage} />
            )}
            {tab === "doublediamond" && link.club === "doublediamond" && (
              <Clubdoublediamond e={link} goTodoublediamondNextPage={goTodoublediamondNextPage} doublediamondcurrentPage={doublediamondcurrentPage} setdoublediamondCurrentPage={setdoublediamondCurrentPage} goTodoublediamondPrevPage={goTodoublediamondPrevPage} />
            )}
            {tab === "triplediamond" && link.club === "triplediamond" && (
              <Clubtriplediamond e={link} goTotriplediamondNextPage={goTotriplediamondNextPage} triplediamondcurrentPage={triplediamondcurrentPage} settriplediamondCurrentPage={settriplediamondCurrentPage} goTotriplediamondPrevPage={goTotriplediamondPrevPage} />
            )}

            {tab === "kaitking" && link.club === "kaitking" && (
              <Clubkaitking e={link} goTokaitkingNextPage={goTokaitkingNextPage} kaitkingcurrentPage={kaitkingcurrentPage} setkaitkingCurrentPage={setkaitkingCurrentPage} goTokaitkingPrevPage={goTokaitkingPrevPage} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Club