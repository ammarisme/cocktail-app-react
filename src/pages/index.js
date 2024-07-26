import React, { useState, useEffect } from 'react';
import { fetchRandomCocktails, searchCocktailsByName } from '../lib/api';
import Post from '../components/Post';
import Navbar from '../components/Navbar';
import { useFavorites } from '../context/FavoritesContext';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 60px; /* To account for the fixed navbar */
  display: flex;
  justify-content: center;
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export default function HomePage() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const { favorites } = useFavorites();

  const loadRandomCocktails = async () => {
    setLoading(true);
    const randomCocktails = await fetchRandomCocktails();
    setCocktails(randomCocktails);
    setLoading(false);
  };

  const handleSearch = async (term) => {
    setLoading(true);
    const searchResults = await searchCocktailsByName(term);
    setCocktails(searchResults);
    setLoading(false);
  };

  const handleViewAllFavorites = () => {
    setCocktails(favorites);
  };

  useEffect(() => {
    loadRandomCocktails();
  }, []);

  const resetSearchTerm = () => setSearchTerm('');

  return (
    <>
      <Navbar
        onSearch={handleSearch}
        onLogoClick={loadRandomCocktails}
        resetSearchTerm={resetSearchTerm}
        onViewAllFavorites={handleViewAllFavorites}
      />
      <Container>
        <MainContent>
          {loading ? (
            <p>Loading...</p>
          ) : (
            cocktails.map((cocktail) => (
              <Post key={cocktail.idDrink} cocktail={cocktail} />
            ))
          )}
        </MainContent>
      </Container>
    </>
  );
}
