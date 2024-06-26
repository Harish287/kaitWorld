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
