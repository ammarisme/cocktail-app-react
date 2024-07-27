import React from 'react';
import styled from 'styled-components';
import { useFavorites } from '../context/FavoritesContext';

const FavoriteItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #dbdbdb;
  background-color: #fff;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin-right: 10px;
`;

const ItemName = styled.div`
  font-size: 16px;
`;

const RemoveButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #e60000;
  }
`;

const FavoriteItem = ({ cocktail }) => {
  const { removeFromFavorites } = useFavorites();

  const handleRemove = () => {
    removeFromFavorites(cocktail.idDrink);
  };

  return (
    <FavoriteItemContainer>
      <ItemDetails>
        <ItemImage src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <ItemName>{cocktail.strDrink}</ItemName>
      </ItemDetails>
      <RemoveButton onClick={handleRemove}>Remove</RemoveButton>
    </FavoriteItemContainer>
  );
};

export default FavoriteItem;
