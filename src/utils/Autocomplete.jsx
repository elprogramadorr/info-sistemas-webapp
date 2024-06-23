import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Autocomplete = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const storedSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    setRecentSearches(storedSearches);
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value === '') {
      setSuggestions([]);
    } else {
      const filteredSuggestions = recentSearches.filter(search =>
        search.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    updateRecentSearches(suggestion);
  };

  const updateRecentSearches = (search) => {
    const updatedSearches = [search, ...recentSearches.filter(item => item !== search)];
    if (updatedSearches.length > 5) {
      updatedSearches.pop(); // Limita a las últimas 5 búsquedas
    }
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  };

  const handleSearch = () => {
    if (query.trim() !== '') {
      updateRecentSearches(query);
      setSuggestions([]);
    }
  };

  return (
    <div style={{ position: 'relative', width: '300px' }}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box',backgroundColor:'white', color:'black' }}
      />
      {suggestions.length > 0 && (
        <ul style={{ listStyle: 'none', padding: '0', margin: '0', position: 'absolute', width: '100%', boxShadow: '0 2px 5px rgba(0,0,0)', backgroundColor: 'white' }}>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{ padding: '0.5rem', cursor: 'pointer', backgroundColor:'white', color:'black' }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
