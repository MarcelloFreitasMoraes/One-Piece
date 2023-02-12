import React from 'react'

import * as S from './styles';
import { INumberPages } from './types';

export function PaginationComponent({ pages, setCurrentPage, currentPage }: INumberPages) {
  return (
    <S.Pagination>
      {Array.from(Array(pages), (_item, index) => {
        return(
        <S.Button
          onClick={(event: any) => setCurrentPage(Number(event.target.value))}
          value={index}
          index={index}
          currentPage={currentPage}
          key={index}
        >
          {index + 1}
        </S.Button>
       );
    })}
    </S.Pagination>
  )
}