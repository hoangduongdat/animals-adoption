import React from 'react';
import './pagination.css'
import { useState } from 'react';
const Pagination = (props) => {
    const { setPage, page, totalPage } = props;
    const [indexRange, setIndexRange] = useState(0)

    const rangeTotal = [...Array(totalPage).keys()]

    const range = rangeTotal.slice(indexRange, indexRange + 5)

    const handleClickPage = (item) => {
        if (item > 0 && item < totalPage - 1) {
            if (item === range[4]) setIndexRange(indexRange + 1)
            if (item === range[0]) setIndexRange(indexRange - 1)
        }
        setPage(item + 1)
    }

    const handleNextPage = () => {
        if (page < totalPage) {
            if (page === range[4]) setIndexRange(indexRange + 1)
            setPage(page + 1)
        }
    }
    const handlePrevPage = () => {
        if (page > 1) {
            if (page === range[2] && page > 2) setIndexRange(indexRange - 1)
            setPage(page - 1)
        }
    }

    return (
        <div className="pagination">
            <div onClick={handlePrevPage} >&laquo;</div>
            {range.map((item, index) => (
                <div
                    onClick={() => handleClickPage(item)}
                    key={index}
                    className={page === (item + 1) ? 'active' : ''}
                >
                    {item + 1}
                </div>
            ))
            }
            <div onClick={handleNextPage}>&raquo;</div>
        </div>
    );
};

export default Pagination;