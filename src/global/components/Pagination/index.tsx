import React, { useEffect, useState } from "react";
import * as M from "@mui/material";
import * as S from "./styles";
import { INumberPages } from "./types";
import { ArrowBack, ArrowForward } from '@mui/icons-material';

export function PaginationComponent({
  pages,
  setCurrentPage,
  currentPage,
}: INumberPages) {

  const [first, setFirst] = useState<any>()

  const MAX_ITEMS = 5
  const MAX_LEFT = (MAX_ITEMS - 1) / 2
  const totalPage = Math.ceil(pages)

  useEffect(() => {
    if (currentPage === totalPage) {
      if (totalPage === 4) {
        setFirst(currentPage - 3)
      } else if (totalPage === 3) {
        setFirst(currentPage - 2)
      } else if (totalPage === 2) {
        setFirst(currentPage - 1)
      } else if (totalPage === 1) {
        setFirst(Math.max(currentPage - MAX_LEFT, 1))
      } else {
        setFirst(currentPage - 4)
      }
    } else if (currentPage === totalPage - 1) {
      if (totalPage - 1 === 3) {
        setFirst(currentPage - 2)
      } else if (totalPage - 1 === 2) {
        setFirst(currentPage - 1)
      } else if (totalPage - 1 === 1) {
        setFirst(Math.max(currentPage - MAX_LEFT, 1))
      } else {
        setFirst(currentPage - 3)
      }
    } else {
      setFirst(Math.max(currentPage - MAX_LEFT, 1))
    }
  }, [currentPage])

  const handlePrevPage = () => {
    const newPage = Math.max(currentPage - 1);
    setCurrentPage(newPage);
  };

  const handleNextPage = () => {
    const newPage = Math.min(currentPage + 1, pages);
    setCurrentPage(newPage);
  };

  return (
    <S.Pagination>

      {currentPage > 0 && (     
        <S.ContainerButton>      
        <M.Button  
        sx={{color: '#FFFFFF', marginRight: '10px'}} 
        onClick={handlePrevPage}
         disabled={currentPage === 0}
        startIcon={<ArrowBack />}
        />
      </S.ContainerButton> 
      )}

      {Array.from({ length: Math.min(MAX_ITEMS, totalPage) })
        .map((_item, index) => index + first)
        .map((page) => {
          return (
            <S.Button
              key={page.id}
              onClick={() => setCurrentPage(page)}
              disabled={page === currentPage}
            >
              {page}
            </S.Button>
          );
        })}

      {currentPage < pages && (        
         <S.ContainerButton> 
         <M.Button 
         sx={{color: '#FFFFFF'}} 
            onClick={handleNextPage}
            disabled={currentPage === pages}
            startIcon={<ArrowForward />}/>       
        </S.ContainerButton>
      )}
    </S.Pagination>
  );
}
