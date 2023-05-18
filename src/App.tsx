//App,tsx

import React, { useState } from 'react';
import { Card, CardLoader } from './components/Card/Card';
import useCharacters from './hooks/useCharacter';
import Search from './components/Search';
import Button from './components/Button';
import './App.css';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

const App = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [gender, setGender] = useState('');
  const { characters, isLoading } = useCharacters({ page, name: searchTerm, status, species, gender });

 
  const handleSearch = async (searchTerm: string, selectedStatus: string, selectedSpecies: string, selectedGender: string) => {
    setSearchTerm(searchTerm);
    setStatus(selectedStatus);
    setSpecies(selectedSpecies);
    setGender(selectedGender);
    setPage(1); // Reset della pagina quando viene eseguita una nuova ricerca
   
  };
  
  
  
  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <Search 
      onSearch={handleSearch} 
      searchTerm={searchTerm} 
      status={status} 
      species={species} 
      gender={gender}  />
      <Button label="Prev Page" onClick={handlePrevPage} />
      <span> {page}</span>
      <Button label="Next Page" onClick={handleNextPage} />
      <div className='row' style={{ display: 'flex' }}>
        {isLoading ? (
          <CardLoaderContainer count={20} />
        ) : (
          characters.map((character: Character) => (
            <div className='col' key={character.id}>
              <Card 
              name={character.name} 
              imageUrl={character.image} 
              status={character.status}
               species={character.species} 
              gender={character.gender}/>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const CardLoaderContainer = (props: { count: number }) => {
  return <>{Array.from({ length: props.count }, (_, index) => <CardLoader key={index} />)}</>;
};

export default App;
