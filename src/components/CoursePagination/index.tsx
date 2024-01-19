import React from "react";

interface PaginationProps {
    currentPage: number;
    totalPage?: number;
    onNextPage: (newPage: number) => void;
    onPrevPage: (newPage: number) => void;
  }
  
  const CoursePagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPage,
    onNextPage,
    onPrevPage,
  }) => {
    const renderPageNumbers = () => {
      const pages: React.ReactNode[] = [];
  
      // Display ellipses before and after page 3
      if (totalPage !== undefined && totalPage > 3 && currentPage > 2) {
        pages.push(<button key={1} onClick={() => onPageChange(1)} className={`text-mainColor`}>1</button>);
        if (currentPage > 3) {
          pages.push(<span key="ellipsis-start">...</span>);
        }
      }
  
      for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPage || 1, currentPage + 1); i++) {
        const isCurrentPage = i === currentPage;
        pages.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`text-mainColor ${isCurrentPage ? 'font-bold' : ''}`}
          >
            {i}
          </button>
        );
      }
  
      // Display dots after 3rd page
      if (totalPage !== undefined && totalPage > 3 && currentPage < totalPage - 1) {
        if (currentPage >= 3) {
          pages.push(<span key="ellipsis-mid">---</span>);
        }
      }
  
      // Display ellipses before and after last 3 pages
      if (totalPage !== undefined && totalPage > 3 && currentPage < (totalPage || 1) - 1) {
        if (currentPage < totalPage - 2) {
          pages.push(<span key="ellipsis-end">...</span>);
        }
        pages.push(<button key={totalPage} onClick={() => onPageChange(totalPage || 1)} className={`text-mainColor`}>{totalPage}</button>);
      }
  
      return pages;
    };
  
    const onPageChange = (newPage: number) => {
      if (newPage !== currentPage) {
        if (newPage < 1) {
          onPrevPage(newPage);
        } else if (newPage > (totalPage || 1)) {
          onNextPage(newPage);
        } else {
          onNextPage(newPage);
        }
      }
    };
  
  return (
    <div className="flex justify-center gap-5 mt-4 pb-24">
      <button onClick={() => onPrevPage(currentPage - 1)} disabled={currentPage === 1} className="text-mainColor">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <g clip-path="url(#clip0_310_8848)">
    <g filter="url(#filter0_d_310_8848)">
      <path d="M17.9998 31.4996C25.9075 31.4996 32.318 25.0892 32.318 17.1815C32.318 9.27375 25.9075 2.86328 17.9998 2.86328C10.0921 2.86328 3.68164 9.27375 3.68164 17.1815C3.68164 25.0892 10.0921 31.4996 17.9998 31.4996Z" fill="#435FB5" fill-opacity="0.25"/>
    </g>
    <path d="M20 21L16 17L20 13" stroke="#435FB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <filter id="filter0_d_310_8848" x="-5.31836" y="-4.13672" width="46.6362" height="46.6367" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="2"/>
      <feGaussianBlur stdDeviation="4.5"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_310_8848"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_310_8848" result="shape"/>
    </filter>
    <clipPath id="clip0_310_8848">
      <rect width="36" height="36" fill="white"/>
    </clipPath>
  </defs>
</svg>
      </button>
      {renderPageNumbers()}
      <button onClick={() => onNextPage(currentPage + 1)} disabled={totalPage !== undefined && currentPage >= (totalPage || 1)} className="text-mainColor">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <g clip-path="url(#clip0_310_8857)">
    <g filter="url(#filter0_d_310_8857)">
      <path d="M18.0002 31.4996C10.0925 31.4996 3.682 25.0892 3.682 17.1815C3.682 9.27375 10.0925 2.86328 18.0002 2.86328C25.9079 2.86328 32.3184 9.27375 32.3184 17.1815C32.3184 25.0892 25.9079 31.4996 18.0002 31.4996Z" fill="#435FB5" fill-opacity="0.25"/>
    </g>
    <path d="M16 21L20 17L16 13" stroke="#435FB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <filter id="filter0_d_310_8857" x="-5.31787" y="-4.13672" width="46.6362" height="46.6367" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="2"/>
      <feGaussianBlur stdDeviation="4.5"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_310_8857"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_310_8857" result="shape"/>
    </filter>
    <clipPath id="clip0_310_8857">
      <rect width="36" height="36" fill="white" transform="matrix(-1 0 0 1 36 0)"/>
    </clipPath>
  </defs>
</svg>
      </button>
    </div>
  );
};

export default CoursePagination;
