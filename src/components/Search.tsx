
// export default Search;


import React, { useState } from 'react';

interface SearchProps {
  onSearch: (searchTerm: string, status: string, species: string, gender: string) => void;
  searchTerm: string;
  status: string;
  species: string; 
  gender: string;
}


const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState(''); // Stato selezionato
  const [species, setSpecies] = useState(''); // Stato selezionato
  const [gender, setGender] = useState(''); // Stato selezionato



  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm, status, species, gender);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  const handleSpeciesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSpecies(event.target.value);
  };
  

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress} // Aggiungi l'evento onKeyPress
      />
      <select value={status} onChange={handleStatusChange}>
      <option value="">... </option>
        <option value="alive">Alive </option>
        <option value="dead">Dead </option>
        <option value="unknown">unknown </option>
      </select>
      <select value={species} onChange={handleSpeciesChange}>
      <option value="">... </option>
        <option value="Alien">Alien </option>
        <option value="Human">Human</option>
      </select>
      <select value={gender} onChange={handleGenderChange}>
        <option value="">... </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="unknown">unknown</option>
      </select>
      <button onClick={handleSearch}>Cerca</button>
    </div>
  );
};

export default Search;

