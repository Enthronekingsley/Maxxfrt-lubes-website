import React, { useState } from "react";
import { HeaderContainer, MobileMenuOverlay } from "./styles";
import TopBar from "./TopBar";
import MainNav from "./MainNav";
import MobileSearch from "./MobileSearch";
import { useMediaQuery } from "react-responsive";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      {!isMobile && <TopBar />}

      <MainNav
        onMenuClick={handleMenuClick}
        isMobileMenuOpen={isMenuOpen}
        closeMobileMenu={closeMobileMenu}
      />

      <MobileSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {(isMenuOpen || isSearchOpen) && (
        <MobileMenuOverlay
          onClick={() => {
            setIsMenuOpen(false);
            setIsSearchOpen(false);
          }}
        />
      )}
    </HeaderContainer>
  );
};

export default Header;
