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

  // Generate pagination window
  const windowSize = 5;
  let startPage = Math.max(1, page - Math.floor(windowSize / 2));
  let endPage = Math.min(totalPages, startPage + windowSize - 1);
  if (endPage - startPage + 1 < windowSize) {
    startPage = Math.max(1, endPage - windowSize + 1);
  }
  const pageNumbers: number[] = [];
  for (let p = startPage; p <= endPage; p++) {
    pageNumbers.push(p);
  }

  return (
    <nav
      className={cn(
        "mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/80 pt-8 sm:flex-row",
        className
      )}
      aria-label="Gallery pagination"
    >
      <p className="text-sm text-muted-foreground">
        Showing <span className="font-semibold text-foreground">{from}–{to}</span> of{" "}
        <span className="font-semibold text-foreground">{totalItems}</span> photos
      </p>

      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-9 gap-1 px-3 text-xs"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
        >
          <ChevronLeft className="size-4" aria-hidden="true" />
          Previous
        </Button>

        <div className="flex items-center gap-1">
          {startPage > 1 && (
            <>
              <Button
                type="button"
                variant={page === 1 ? "default" : "ghost"}
                size="sm"
                className={cn(
                  "size-9 min-w-9 p-0 text-xs font-medium",
                  page === 1 && "bg-[var(--color-burgundy)] text-white hover:bg-[var(--color-burgundy)]/90"
                )}
                onClick={() => onPageChange(1)}
              >
                1
              </Button>
              {startPage > 2 && (
                <span className="px-1 text-xs text-muted-foreground" aria-hidden="true">
                  …
                </span>
              )}
            </>
          )}

          {pageNumbers.map((p) => (
            <Button
              key={p}
              type="button"
              variant={p === page ? "default" : "ghost"}
              size="sm"
              className={cn(
                "size-9 min-w-9 p-0 text-xs font-medium",
                p === page
                  ? "bg-[var(--color-burgundy)] text-white hover:bg-[var(--color-burgundy)]/90"
                  : "hover:bg-muted"
              )}
              onClick={() => onPageChange(p)}
              aria-current={p === page ? "page" : undefined}
            >
              {p}
            </Button>
          ))}

          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && (
                <span className="px-1 text-xs text-muted-foreground" aria-hidden="true">
                  …
                </span>
              )}
              <Button
                type="button"
                variant={page === totalPages ? "default" : "ghost"}
                size="sm"
                className={cn(
                  "size-9 min-w-9 p-0 text-xs font-medium",
                  page === totalPages && "bg-[var(--color-burgundy)] text-white hover:bg-[var(--color-burgundy)]/90"
                )}
                onClick={() => onPageChange(totalPages)}
              >
                {totalPages}
              </Button>
            </>
          )}
        </div>

        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-9 gap-1 px-3 text-xs"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          Next
          <ChevronRight className="size-4" aria-hidden="true" />
        </Button>
      </div>
    </nav>
  );
}
