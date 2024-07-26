import React from 'react';

export default function FavoriteItem({ cocktail, removeFromFavorites }) {
    return (
        <div className="favorite-item">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <h2>{cocktail.strDrink}</h2>
            <button onClick={() => removeFromFavorites(cocktail.idDrink)}>Remove</button>
        </div>
    );
}