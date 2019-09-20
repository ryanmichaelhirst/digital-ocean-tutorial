import React from "react";
import ReactPaginate from 'react-paginate';
import Loader from "./loader";

const Pagination = ({ pageCount, data, perPage, onClick }) => {
    const handlePageClick = ({ selected }) => {
        const lower = selected === 0 ? 0 : (perPage * selected + 1) - 1;
        const upper = selected === 0 ? perPage : perPage * (selected + 1);

        onClick(data.slice(lower, upper));
    };

    if (data === null) {
        return <Loader />;
    }

    return (
        <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
        />
    );
};

export default Pagination;