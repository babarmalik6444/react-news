const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageButtons = () => {
    const pageButtons = [];
    const maxButtonsToShow = 2; // Number of buttons to show before and after the active page

    // Calculate the range of pages to display
    let startPage = Math.max(1, currentPage - maxButtonsToShow);
    let endPage = Math.min(totalPages, currentPage + maxButtonsToShow);

    // Add "Previous" button
    pageButtons.push(
      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`} key="previous">
        <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>
          Previous
        </button>
      </li>
    );

    // Add page buttons within the calculated range
    for (let page = startPage; page <= endPage; page++) {
      pageButtons.push(
        <li className={`page-item ${currentPage === page ? 'active' : ''}`} key={page}>
          <button className="page-link" onClick={() => onPageChange(page)}>
            {page}
          </button>
        </li>
      );
    }

    // Add "Next" button
    pageButtons.push(
      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`} key="next">
        <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>
          Next
        </button>
      </li>
    );

    return pageButtons;
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">{renderPageButtons()}</ul>
    </nav>
  );
};

export default Pagination;
