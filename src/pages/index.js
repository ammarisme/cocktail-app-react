import React, { useState, useEffect } from 'react';
import { fetchRandomCocktails } from '../lib/api';
import CocktailCard from '../components/CocktailCard';

export default function HomePage() {
    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadRandomCocktails = async () => {
        setLoading(true);
        const randomCocktails = await fetchRandomCocktails();
        setCocktails(randomCocktails);
        setLoading(false);
    };

    useEffect(() => {
        loadRandomCocktails();
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={loadRandomCocktails}>Refresh</button>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="cocktail-list">
                    {cocktails.map(cocktail => (
                        <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
                    ))}
                </div>
            )}
        </div>
    );
}
