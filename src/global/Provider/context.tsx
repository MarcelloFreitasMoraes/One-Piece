import { SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { Data } from "../@types/types";
import { API } from "../config/api";

type MyContextProps = {
  data: any;
  setData: React.Dispatch<SetStateAction<Data[]>>;
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  fetchOnePieceData: () => void;
};

type MyProviderProps = {
  children: React.ReactNode;
};

const PieceContext = createContext<MyContextProps>({
  data: [],
  setData: () => {},
  loading: false,
  setLoading: () => {},
  fetchOnePieceData: () => {},
});

export const PieceContextProvider = ({ children }: MyProviderProps) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  
    const fetchOnePieceData = async () => {
      setLoading(true);
      try {
        const response = await API.get('/characters.json');
        setData(Object.entries(response.data));
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
    fetchOnePieceData();
  }, []);

  const contextValue: MyContextProps = {
    data,
    setData,
    loading,
    setLoading,
    fetchOnePieceData,
  };

  
  return (
    <PieceContext.Provider value={contextValue}>
      {children}
    </PieceContext.Provider>
  );
};

export const usePiece = () => useContext(PieceContext)