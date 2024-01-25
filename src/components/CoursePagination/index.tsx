import React from "react";
import prevPageIcon from "../../../public/images/prePage.svg";
import nextPageIcon from "../../../public/images/nextPage.svg";

interface PaginationProps {
  currentPage: number;
  totalPage?: number;
  onNextPage: (newPage: number) => void;
  onPrevPage: (newPage: number) => void;
}

const CoursePagination: React.FC<
  PaginationProps
> = ({
  currentPage,
  totalPage,
  onNextPage,
  onPrevPage,
}) => {
  const onPageChange = (newPage: number) => {
    if (newPage !== currentPage) {
      newPage < 1
        ? onPrevPage(newPage)
        : newPage > (totalPage || 1)
        ? onNextPage(newPage)
        : onNextPage(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pages: React.ReactNode[] = [];

    if (
      totalPage !== undefined &&
      totalPage > 3 &&
      currentPage > 2
    ) {
      pages.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className={`text-mainColor`}>
          1
        </button>
      );

      currentPage > 3 &&
        pages.push(
          <span key="ellipsis-start">---</span>
        );
    }

    for (
      let i = Math.max(1, currentPage - 1);
      i <=
      Math.min(totalPage || 1, currentPage + 1);
      i++
    ) {
      const isCurrentPage = i === currentPage;
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`text-mainColor ${
            isCurrentPage
              ? "font-bold border-b-2 border-mainColor"
              : ""
          }`}>
          {i}
        </button>
      );
    }

    // Display dots after 3rd page
    if (
      totalPage !== undefined &&
      totalPage > 3 &&
      currentPage < totalPage - 1
    ) {
      currentPage >= 3 &&
        pages.push(
          <span key="ellipsis-mid">---</span>
        );
    }

    // Display ellipses before and after last 3 pages
    if (
      totalPage !== undefined &&
      totalPage > 3 &&
      currentPage < (totalPage || 1) - 1
    ) {
      currentPage < totalPage - 2 &&
        pages.push(
          <span key="ellipsis-end">---</span>
        );

      pages.push(
        <button
          key={totalPage}
          onClick={() =>
            onPageChange(totalPage || 1)
          }
          className={`text-mainColor`}>
          {totalPage}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex justify-center gap-5 mt-4 pb-16 items-center">
      <button
        onClick={() =>
          onPrevPage(currentPage - 1)
        }
        disabled={currentPage === 1}
        className="text-mainColor">
        <img src={prevPageIcon} alt="" />
      </button>
      {renderPageNumbers()}
      <button
        onClick={() =>
          onNextPage(currentPage + 1)
        }
        disabled={
          totalPage !== undefined &&
          currentPage >= (totalPage || 1)
        }
        className="text-mainColor">
        <img src={nextPageIcon} alt="" />
      </button>
    </div>
  );
};

export default CoursePagination;
