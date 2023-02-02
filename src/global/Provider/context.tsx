import { createContext, useContext, useEffect, useState } from "react";
import { Data } from "../@types/types";

type MyContextProps = {
    personagemAtual: Array<Data>;
    setPersonagemAtual: (personagemAtual: Array<Data>) => void;
};
type MyProviderProps = {
    children: React.ReactNode;
};

const OnePieceContext = createContext({} as MyContextProps);

const OnePieceContextProvider = ({ children }: MyProviderProps) => {
    const [personagemAtual, setPersonagemAtual] = useState<Array<Data>>([])

    useEffect(() => {
        if (typeof window !== "undefined") {
            const item = window.localStorage.getItem('name');
            if (item !== null) {
                const response = JSON.parse(item);
                if (response) setPersonagemAtual(response)
            }
        }
    }, [])

    return (
        <OnePieceContext.Provider value={{ personagemAtual, setPersonagemAtual }}>
            {children}
        </OnePieceContext.Provider>
    );
};

export const usePiece = () => {
    const context = useContext(OnePieceContext);
    const { personagemAtual, setPersonagemAtual } = context;
    return { personagemAtual, setPersonagemAtual };

}
export default OnePieceContextProvider;