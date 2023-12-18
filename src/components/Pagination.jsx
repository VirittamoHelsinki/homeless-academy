import React from 'react';
import { scrollToTop } from '../utils/utils';

function Pagination({ articlesPerPage, totalArticles, paginate, currentPage, scrollToEventsSection}) {

  const totalPages = Math.ceil(totalArticles / articlesPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageClick = (number) => {
    paginate(number);
    scrollToTop(); // Call the scrollToTop function here to scrolling to top when navigating through pagination
    scrollToEventsSection(); // Scroll to event section in Events component
  };

   return (
    <div className='join flex items-center justify-center'>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handlePageClick(number)}
          className={`join-item btn ${currentPage === number ? 'btn-active' : ''}`}>
          {number}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
