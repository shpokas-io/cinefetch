import React, { useMemo, useCallback } from "react";

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
  const pageCountToShow = 5;

  const paginationRange = useMemo(() => {
    if (totalPages <= pageCountToShow) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages: (number | string)[] = [];
    const firstPage = 1;
    const lastPage = totalPages;
    const left = Math.max(currentPage - 1, 2);
    const right = Math.min(currentPage + 1, totalPages - 1);
    pages.push(firstPage);
    if (left > 2) {
      pages.push("...");
    }
    for (let i = left; i <= right; i++) {
      pages.push(i);
    }
    if (right < totalPages - 1) {
      pages.push("...");
    }
    pages.push(lastPage);
    return pages;
  }, [currentPage, totalPages, pageCountToShow]);

  const handlePageChange = useCallback(
    (page: number) => {
      if (page !== currentPage) {
        onPageChange(page);
      }
    },
    [currentPage, onPageChange]
  );

  if (totalPages <= 1 || currentPage < 1 || currentPage > totalPages) {
    return null;
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      {paginationRange.map((page, index) =>
        page === "..." ? (
          <span
            key={`ellipsis-${currentPage}-${index}`}
            className="px-3 py-1 text-[var(--brand-color)]"
          >
            ...
          </span>
        ) : (
          <button
            key={`page-${page}`}
            onClick={() => handlePageChange(page as number)}
            aria-current={page === currentPage ? "page" : undefined}
            className={`px-3 py-1 border rounded transition ${
              page === currentPage
                ? "bg-[var(--pagination-active-bg)] text-[var(--pagination-active-text)] border-[var(--pagination-border)]"
                : "border-[var(--pagination-border)] text-[var(--brand-color)] hover:bg-[var(--pagination-hover-bg)] hover:text-[var(--pagination-hover-text)]"
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
