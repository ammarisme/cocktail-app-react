import React, { useState } from 'react';
import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { useFavorites } from '../context/FavoritesContext';

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;

const SearchForm = styled.form`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

const SearchBar = styled.input`
  width: 100%;
  max-width: 400px;
  height: 30px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 5px;
`;

const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background-color: white;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 300px;
  max-height: 400px;
  overflow-y: auto;
`;

const DropdownItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #dbdbdb;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

const Navbar = ({ onSearch, onLogoClick, resetSearchTerm, onViewAllFavorites }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { favorites } = useFavorites();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  const handleLogoClick = () => {
    onLogoClick();
    setSearchTerm('');
    resetSearchTerm();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <NavbarContainer>
      <Logo onClick={handleLogoClick}>CocktailApp</Logo>
      <SearchForm onSubmit={handleSearch}>
        <SearchBar
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
        />
      </SearchForm>
      <IconContainer onClick={toggleDropdown}>
        <FiHeart size={24} />
        {dropdownOpen && (
          <Dropdown>
            {favorites.length === 0 ? (
              <DropdownItem>No favorites yet.</DropdownItem>
            ) : (
              <>
                {favorites.map((cocktail) => (
                  <DropdownItem key={cocktail.idDrink}>
                    {cocktail.strDrink}
                  </DropdownItem>
                ))}
                <DropdownItem onClick={onViewAllFavorites}>
                  View All
                </DropdownItem>
              </>
            )}
          </Dropdown>
        )}
      </IconContainer>
    </NavbarContainer>
  );
};

export default Navbar;
