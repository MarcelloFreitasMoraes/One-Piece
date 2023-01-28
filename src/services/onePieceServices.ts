import { API } from "@/global/config/api";

export const getPiece = async () => {
  try {
    const data  = await API.get('/characters.json');

    if (data) {
      return data;
    }

    return new Error('Erro ao listar todos os personagens');
  } catch (error) {
    return new Error('Erro ao listar todos os personagens');
  }
};

export const ServiceCharacters = {
  getPiece,
};