import React from "react";

// write render
// isprevAval
// isNextAval

const Pagination = ({
  goPrev,
  goNext,
  currentPage,
  totalItems,
  itemsPerPage,
}) => {
  const isPrevAval = currentPage > 1;
  const isNextAval = totalItems - itemsPerPage * currentPage > 0;
  console.log(isPrevAval);
  console.log(isNextAval);
  return (
    <div className="pagination">
      <button className="btn" disabled={!isPrevAval} onClick={goPrev}>
        {isPrevAval && "←"}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" disabled={!isNextAval} onClick={goNext}>
        {isNextAval && "→"}
      </button>
    </div>
  );
};
export default Pagination;
