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