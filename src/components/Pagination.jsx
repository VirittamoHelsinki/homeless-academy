import React from 'react';

function Pagination({ articlesPerPage, totalArticles, paginate, currentPage }) {

  const totalPages = Math.ceil(totalArticles / articlesPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className='join flex items-center justify-center'>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`join-item btn ${currentPage === number ? 'btn-active' : ''}`}>
          {number}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
