"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type GalleryPaginationProps = {
  page: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  className?: string;
};

export function GalleryPagination({
  page,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  className,
}: GalleryPaginationProps) {
  if (totalPages <= 1) return null;

  const start = (page - 1) * pageSize;
  const from = start + 1;
  const to = Math.min(start + pageSize, totalItems);

  const windowSize = 7;
  let startPage = Math.max(1, page - Math.floor(windowSize / 2));
  let endPage = Math.min(totalPages, startPage + windowSize - 1);
  if (endPage - startPage + 1 < windowSize) {
    startPage = Math.max(1, endPage - windowSize + 1);
  }
  const pageNumbers: number[] = [];
  for (let p = startPage; p <= endPage; p++) pageNumbers.push(p);

  return (
    <nav
      className={cn(
        "mt-10 flex flex-col items-stretch gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between",
        className
      )}
      aria-label="Gallery pagination"
    >
      <p className="text-center text-sm text-muted-foreground sm:text-left">
        Showing <span className="font-medium text-foreground">{from}</span>–
        <span className="font-medium text-foreground">{to}</span> of{" "}
        <span className="font-medium text-foreground">{totalItems}</span>
      </p>

      <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-2">
        <div className="flex items-center justify-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="gap-1"
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
          >
            <ChevronLeft className="size-4" aria-hidden />
            Previous
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="gap-1"
            disabled={page >= totalPages}
            onClick={() => onPageChange(page + 1)}
          >
            Next
            <ChevronRight className="size-4" aria-hidden />
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1">
          {startPage > 1 ? (
            <>
              <Button
                type="button"
                variant={page === 1 ? "default" : "ghost"}
                size="icon-xs"
                className="size-8 min-w-8"
                onClick={() => onPageChange(1)}
              >
                1
              </Button>
              {startPage > 2 ? (
                <span className="px-1 text-muted-foreground" aria-hidden>
                  …
                </span>
              ) : null}
            </>
          ) : null}

          {pageNumbers.map((p) => (
            <Button
              key={p}
              type="button"
              variant={p === page ? "default" : "ghost"}
              size="icon-xs"
              className="size-8 min-w-8"
              onClick={() => onPageChange(p)}
              aria-current={p === page ? "page" : undefined}
            >
              {p}
            </Button>
          ))}

          {endPage < totalPages ? (
            <>
              {endPage < totalPages - 1 ? (
                <span className="px-1 text-muted-foreground" aria-hidden>
                  …
                </span>
              ) : null}
              <Button
                type="button"
                variant={page === totalPages ? "default" : "ghost"}
                size="icon-xs"
                className="size-8 min-w-8"
                onClick={() => onPageChange(totalPages)}
              >
                {totalPages}
              </Button>
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
