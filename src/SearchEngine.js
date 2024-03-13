import React, { useState } from 'react';

const SearchEngine = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.example.com/search?q=${query}`);
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <div>
      <h1>Search Engine</h1>
      <input
        type="text"
        placeholder="Enter search query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchEngine;
