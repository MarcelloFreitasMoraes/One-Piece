export interface NavProps <T = any>{
    data?: Data
    pieceFilter?: T;
    IsSearch?: boolean
    isBack?: boolean
    value?: Data
    searchTerm?: T
    setSearchTerm?: T
  }
  