import { SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { Data } from "../@types/types";
import { API } from "../config/api";

type MyContextProps = {
  personagemAtual: any;
  setPersonagemAtual: React.Dispatch<SetStateAction<any>>;
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
};

type MyProviderProps = {
  children: React.ReactNode;
};

const OnePieceContext = createContext<MyContextProps>({
  personagemAtual: [],
  setPersonagemAtual: () => {},
  loading: false,
  setLoading: () => {},
});

const OnePieceContextProvider = ({ children }: MyProviderProps) => {
  const [personagemAtual, setPersonagemAtual] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchOnePieceData = async () => {
      setLoading(true);
      try {
        const response = await API.get('/characters.json');
        setPersonagemAtual(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOnePieceData();
  }, []);

  return (
    <OnePieceContext.Provider value={{ personagemAtual, setPersonagemAtual, loading, setLoading }}>
      {children}
    </OnePieceContext.Provider>
  );
};

export const useOnePiece = () => useContext(OnePieceContext);

export default OnePieceContextProvider;
