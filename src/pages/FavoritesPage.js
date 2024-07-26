import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import FavoriteItem from '../components/FavoriteItem';

function FavoritesPage() {
    const { favorites, removeFromFavorites } = useFavorites();

    return (
        <div>
            <h1>Favorites Page</h1>
            <div className="favorites-list">
                {favorites.length === 0 ? (
                    <p>No favorite cocktails yet.</p>
                ) : (
                    favorites.map(cocktail => (
                        <FavoriteItem
                            key={cocktail.idDrink}
                            cocktail={cocktail}
                            removeFromFavorites={removeFromFavorites}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default FavoritesPage;
