import styled from 'styled-components';

export const NavbarContainer = styled.div`
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

export const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;

export const SearchForm = styled.form`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

export const SearchBar = styled.input`
  width: 100%;
  max-width: 400px;
  height: 30px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 5px;
`;

export const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Dropdown = styled.div`
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

export const DropdownItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #dbdbdb;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;
