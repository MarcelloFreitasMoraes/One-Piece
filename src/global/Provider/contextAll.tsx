import { SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { Data } from "../@types/types";
import { API } from "../config/api";
import { useRouter } from "next/router";

type MyContextProps = {
  resposta: any
  setResposta: React.Dispatch<SetStateAction<Data[]>>
};

type MyProviderProps = {
  children: React.ReactNode;
};

const OnePieceContext = createContext<MyContextProps>({
  resposta: [],
  setResposta: () => {},  
});

const OnePieceContextProvider = ({ children }: MyProviderProps) => {
  const [resposta, setResposta] = useState<any>();
  const router = useRouter();
  const { id } = router.query;
  
    const fetchOnePieceData = async () => {
      try {
        const response = await API.get(`/characters/${id}.json/`);
        console.log(response,'response');
        setResposta(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
    fetchOnePieceData();
  }, [id]);

  console.log(resposta,'resposta');
 
  return (
    <OnePieceContext.Provider value={{ resposta, setResposta }}>
      {children}
    </OnePieceContext.Provider>
  );
};

export const useOnePiece = () => useContext(OnePieceContext);

export default OnePieceContextProvider;
