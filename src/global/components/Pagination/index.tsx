import React, { useState } from "react";
import * as S from "./styles";
import { INumberPages } from "./types";

export function PaginationComponent({
  pages,
  setCurrentPage,
  currentPage,
}: INumberPages) {
  const [localPage, setLocalPage] = useState<any>(currentPage);

  const handlePrevPage = () => {
    const newPage = Math.max(localPage - 1, 1);
    setLocalPage(newPage);
    setCurrentPage(newPage);
  };

  const handleNextPage = () => {
    const newPage = Math.min(localPage + 1, pages);
    setLocalPage(newPage);
    setCurrentPage(newPage);
  };

  return (
    <S.Pagination>
      <button disabled={localPage === 1} onClick={handlePrevPage}>
        Voltar
      </button>

      {Array.from(Array(pages), (_value, index) => {
        const pageNumber = index + 1;

        const handleClick = () => {
          setLocalPage(pageNumber);
          setCurrentPage(pageNumber);
        };

        return (
          <S.Button
           key={index}
           index={index}
           value={index}
           currentPage={currentPage}
             onClick={handleClick}>
            {pageNumber}
          </S.Button>
        );
      })}

      <button disabled={localPage === pages} onClick={handleNextPage}>
        Avançar
      </button>
    </S.Pagination>
  );
}
