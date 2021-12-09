import React from "react";
import Pagination from "@material-ui/lab/Pagination";

export const PagePagination = ({setPage, numberOfPages = 10}) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <Pagination count={numberOfPages} onChange={(e) => handlePageChange(e.target.textContent)} color="primary" />
    </div>
  );
};

export default PagePagination;