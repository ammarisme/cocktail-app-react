import React, { useState } from 'react';
import { searchCocktailsByName } from '../lib/api';
import SearchResult from '../components/SearchResult';
import { useFavorites } from '../context/FavoritesContext';

export default function SearchPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const { addToFavorites } = useFavorites();

    const handleSearch = async () => {
        setLoading(true);
        const results = await searchCocktailsByName(searchTerm);
        setSearchResults(results);
        setLoading(false);
    };

    return (
        <div>
            <h1>Search Page</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for a cocktail"
            />
            <button onClick={handleSearch}>Search</button>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="search-results">
                    {searchResults.map(cocktail => (
                        <SearchResult key={cocktail.idDrink} cocktail={cocktail} addToFavorites={addToFavorites} />
                    ))}
                </div>
            )}
        </div>
    );
}
