import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div>
            <button onClick={() => onPageChange(currentPage - 1)}>Previous</button>
            <span>{currentPage} of {totalPages}</span>
            <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
        </div>
    );
};

export default Pagination;
