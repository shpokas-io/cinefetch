import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;
  const getPaginationRange = (): (number | string)[] => {
    const pageCountToShow = 5;
    if (totalPages <= pageCountToShow)
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages: (number | string)[] = [];
    const firstPage = 1;
    const lastPage = totalPages;
    const left = Math.max(currentPage - 1, 2);
    const right = Math.min(currentPage + 1, totalPages - 1);
    pages.push(firstPage);
    if (left > 2) pages.push("...");
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < totalPages - 1) pages.push("...");
    pages.push(lastPage);
    return pages;
  };

  const paginationRange = getPaginationRange();
  let ellipsisCounter = 0;

  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      {paginationRange.map((page) =>
        page === "..." ? (
          <span
            key={`ellipsis-${++ellipsisCounter}`}
            className="px-3 py-1 text-[#4ade80]"
          >
            ...
          </span>
        ) : (
          <button
            key={`page-${page}`}
            onClick={() => onPageChange(page as number)}
            className={`px-3 py-1 border rounded transition ${
              page === currentPage
                ? "bg-[#4ade80] text-black border-[#4ade80]"
                : "border-[#4ade80] text-[#4ade80] hover:bg-[#4ade80] hover:text-black"
            }`}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
};

export default Pagination;
