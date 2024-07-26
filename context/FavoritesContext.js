import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
    return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (cocktail) => {
        setFavorites([...favorites, cocktail]);
    };

    const removeFromFavorites = (idDrink) => {
        setFavorites(favorites.filter(cocktail => cocktail.idDrink !== idDrink));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};
