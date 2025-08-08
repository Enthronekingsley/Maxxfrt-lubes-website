import React, { useEffect, useRef } from "react";
import { MobileSearchContainer, SearchInput, SearchButton } from "./styles";
import { FiX } from "react-icons/fi";

const MobileSearch: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <MobileSearchContainer $isOpen={isOpen}>
      <SearchInput ref={inputRef} type="text" placeholder="Search..." />
      <SearchButton onClick={onClose} aria-label="Close search">
        <FiX size={24} />
      </SearchButton>
    </MobileSearchContainer>
  );
};

export default MobileSearch;
