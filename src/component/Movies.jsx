import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

import ReactPaginate from "react-paginate";

// // 2
function Movies() {
  const [data, setData] = useState([]);

  //   3
  useEffect(() => {
    // 4
    fetch("https://api.sampleapis.com/movies/family")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  //   5
  function Item({ currentItemProps }) {
    return (
      <>
        {currentItemProps &&
          currentItemProps.map((eachelement, index) => (
            <MovieCard dataProps={eachelement} key={eachelement.id} />
          ))}
      </>
    );
  }

  //   6
  function PaginateItems({ itemsPerPage }) {
    const [page, setPage] = useState(0);

    const endPage = page + itemsPerPage;

    const currentItems = data.slice(page, endPage);

    const pageCount = Math.ceil(data.length / itemsPerPage);

    const handlePageClick = (eventPage) => {
      const newPage = (eventPage.selected * itemsPerPage) % data.length;

      setPage(newPage);
    };

    // 7
    return (
      <>
        <Item currentItemProps={currentItems} />

        <ReactPaginate
          breakLabel="..."
          nextLabel="next>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        />
      </>
    );
  }

  //   8
  return (
    <div className="moviesCard">
      {/* 9 call the function PaginateItems */}
      <PaginateItems itemsPerPage={4} />
    </div>
  );
}

export default Movies;
