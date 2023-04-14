import React from 'react'
import * as S from './styles';
import { INumberPages } from './types';

export function PaginationComponent({ pages, setCurrentPage, currentPage, setPage }: INumberPages) {
  return (
    <S.Pagination>
      {Array.from({ length: pages }, (_item, index) => {
          const pageNumber = index + 1;
          const isActive:any = currentPage === pageNumber;
    
          const handleClick = () => {
            setCurrentPage(pageNumber);
          };
        return(
            <>
        <S.Button
        key={index}
        value={index}
        index={index}
        isActive={isActive}
        onClick={handleClick}
        >
          {index + 1}
          auihsuahsuahuhsua
        </S.Button>
           </>
       );
    })} 
    {/* <button onClick={() => setPage(pages)}>PREV</button>
    <button onClick={() => setPage(currentPage - 1)}>NEXT</button> */}
    </S.Pagination>
  )
}