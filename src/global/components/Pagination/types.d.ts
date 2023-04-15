import React, { SetStateAction } from 'react';

export interface INumberPages {
    pages: any;
    setCurrentPage: React.Dispatch<SetStateAction<number>>;
    currentPage: number;
}

export interface IStyledProps {
    index: number;
    currentPage: number;
}