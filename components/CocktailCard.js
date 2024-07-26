import React from 'react';

export default function CocktailCard({ cocktail }) {
    return (
        <div className="cocktail-card">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <h2>{cocktail.strDrink}</h2>
            <p>{cocktail.strCategory}</p>
        </div>
    );
}
