// useCaracter.ts
import { useEffect, useState } from 'react';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

interface CharactersQuery {
  page?: number;
  name?: string;
  status?: string; 
  species?: string;
  type?: string;
  gender?: string;
}

const useCharacters = ({ page = 1, name = '', status, species, gender }: CharactersQuery) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);

      let url = `https://rickandmortyapi.com/api/character?page=${page}`;

      if (name) {
        url += `&name=${name}`;
      }

      if (status) {
        url += `&status=${status}`;
      }
      if (species) {
        url += `&species=${species}`;
      }
      if (gender) {
        url += `&gender=${gender}`;
      }

    
      try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch characters');
      }
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      // Gestisci l'errore qui, ad esempio impostando uno stato per segnalare l'errore
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

    fetchCharacters();
  }, [page, name, status, species, gender]);

  return { characters, isLoading };
};

export default useCharacters;
