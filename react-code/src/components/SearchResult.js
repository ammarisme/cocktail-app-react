import React from 'react';

function SearchResult({ cocktail, addToFavorites }) {
    return (
        <div className="search-result">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <h2>{cocktail.strDrink}</h2>
            <button onClick={() => addToFavorites(cocktail)}>Add</button>
        </div>
    );
}

export default SearchResult;
