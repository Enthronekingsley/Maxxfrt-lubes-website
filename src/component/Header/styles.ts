import styled from "styled-components";
import { NavLink } from "react-router-dom";

const BaseLinkStyles = `
  text-decoration: none;
  color: #333;
  font-weight: 500;
  position: relative;
  transition: all 0.2s ease;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #007bff;
    transition: width 0.2s ease;
  }

  &:hover:after {
    width: 100%;
  }

  &.active:after {
    width: 100%;
  }
`;

export const HeaderContainer = styled.header`
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 5%;
  background: #1e79bd;
  font-size: 0.9rem;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContactInfo = styled.div`
  span {
    margin-right: 20px;
    color: #fff;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: stretch;
  background-color: white;
  border-radius: 999px;
  overflow: hidden;

  input {
    padding: 0.3rem 0.6rem;
    font-size: 0.85rem;
    border: 1px solid #ccc;
    border-right: none;
    border-radius: 999px 0 0 999px;
    outline: none;
  }

  button {
    background-color: #333;
    color: white;
    border: none;
    padding: 0 0.75rem;
    font-size: 0.85rem;
    border-radius: 0 999px 999px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease;
  }

  button:hover {
    background-color: #555;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MainNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5%;
  position: relative;

  @media (max-width: 768px) {
    padding: 10px 5%;
    justify-content: center;
  }
`;

export const MobileNavButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  padding: 8px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    &:first-child {
      left: 15px;
    }

    &:last-child {
      right: 15px;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;

  img {
    height: 40px;
    width: auto;
    max-width: 180px;

    @media (max-width: 768px) {
      height: 32px;
      max-width: 150px;
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 20px);
  left: 0;
  min-width: 103px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
  z-index: 100;
  padding: 8px 0;
`;

export const Dropdown = styled.span`
  margin-left: 5px;
  display: inline-flex;
  transition: transform 0.2s ease;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  position: relative;
  margin: 0 15px;

  a {
    ${BaseLinkStyles}
    padding: 8px 0;
  }

  &:hover {
    ${DropdownMenu} {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    ${Dropdown} {
      transform: rotate(180deg);
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s ease;

  &.active {
    border-bottom: 2px solid #007bff;
  }

  &:hover {
    border-bottom: 2px solid #007bff;
  }
`;

export const DropdownMenuItem = styled(NavLink)`
  display: block;
  padding: 10px 16px !important;
  // padding: 10px 16px 10px 24px !important;
  color: #333;
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    background-color: #f5f5f5;
    color: #0066cc;
  }

  &.active {
    background-color: #f0f7ff;
    color: #0066cc;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background-color: #007bff;
    }
  }
`;

export const MobileMenuContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 85%;
  max-width: 400px;
  height: 100vh;
  background: white;
  z-index: 1001;
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "100%")});
  transition: transform 0.3s ease;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
`;

export const MobileNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;

  .mobile-dropdown {
    width: 100%;
    margin-bottom: 0;
  }

  .mobile-dropdown-header {
    padding: 1rem;
    font-weight: 600;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-bottom: 1px solid #eee;
  }

  .mobile-dropdown-content {
    padding-left: 1.5rem;
    display: none; // Hide by default
    flex-direction: column;
    background-color: #f9f9f9;

    &.open {
      display: flex; // Show when open
    }

    a {
      padding: 0.8rem 1rem;
      border-bottom: 1px solid #eee;
      color: #555;
      text-decoration: none;
      transition: all 0.2s ease;

      &:hover {
        background-color: #f0f0f0;
        color: #007bff;
      }

      &.active {
        color: #007bff;
        font-weight: 600;
      }
    }
  }
`;

export const MobileNavItem = styled.li`
  a {
    ${BaseLinkStyles}
    font-size: 1.1rem;
    display: block;
    padding: 1rem;
    border-bottom: 1px solid #eee;
  }
`;

export const MobileSearchContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 15px;
  z-index: 1001;
  display: flex;
  transform: translateY(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  margin-left: 10px;
  cursor: pointer;
  color: #333;
`;

export const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  backdrop-filter: blur(2px);
`;

export const LanguageContainer = styled.div`
  position: relative;
`;

export const LanguageButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  font-weight: 500;

  &:hover {
    color: #0066cc;
  }
`;

export const LanguageMenu = styled.ul`
  position: absolute;
  right: 0;
  top: 100%;
  background: white;
  list-style: none;
  padding: 10px 0;
  margin: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  min-width: 120px;

  li {
    padding: 8px 15px;
    cursor: pointer;

    &:hover {
      background: #f5f5f5;
    }
  }
`;
