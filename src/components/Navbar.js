import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { useFavorites } from '../context/FavoritesContext';
import {
  NavbarContainer,
  Logo,
  SearchForm,
  SearchBar,
  IconContainer,
  Dropdown,
  DropdownItem,
} from './NavbarStyles';

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
