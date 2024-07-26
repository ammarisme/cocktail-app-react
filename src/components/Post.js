import React from 'react';
import styled from 'styled-components';
import { useFavorites } from '../context/FavoritesContext';
import { toast } from 'react-toastify';

const PostContainer = styled.div`
  width: 100%;
  background-color: white;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #dbdbdb;
`;

const PostContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const PostFooter = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: ${props => props.isRemove ? '#ff4d4d' : '#0095f6'};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.isRemove ? '#e60000' : '#007bb5'};
  }
`;

const Post = ({ cocktail }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const isFavorite = favorites.some(fav => fav.idDrink === cocktail.idDrink);

  const handleAddToFavorites = () => {
    addToFavorites(cocktail);
    toast.success(`${cocktail.strDrink} added to favorites!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleRemoveFromFavorites = () => {
    removeFromFavorites(cocktail.idDrink);
    toast.info(`${cocktail.strDrink} removed from favorites.`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <PostContainer>
      <PostHeader>
        <div>{cocktail.strDrink}</div>
      </PostHeader>
      <PostContent>
        <PostImage src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      </PostContent>
      <PostFooter>
        <div>{cocktail.strCategory}</div>
        {isFavorite ? (
          <Button isRemove onClick={handleRemoveFromFavorites}>Remove</Button>
        ) : (
          <Button onClick={handleAddToFavorites}>Add</Button>
        )}
      </PostFooter>
    </PostContainer>
  );
};

export default Post;
