import React from "react";
import {
  MobileMenuContainer,
  MobileMenuHeader,
  CloseButton,
  MobileNavList,
  MobileNavItem,
} from "./styles";
import { FiX } from "react-icons/fi";

const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  return (
    <MobileMenuContainer $isOpen={isOpen}>
      <MobileMenuHeader>
        <CloseButton onClick={onClose} aria-label="Close menu">
          <FiX size={24} />
        </CloseButton>
      </MobileMenuHeader>

      <MobileNavList>
        {["Home", "About", "Services", "Products", "Contact"].map((item) => (
          <MobileNavItem key={item}>
            <a href={`/${item.toLowerCase()}`} onClick={onClose}>
              {item}
            </a>
          </MobileNavItem>
        ))}
      </MobileNavList>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
