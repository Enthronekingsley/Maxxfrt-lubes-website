import { useState } from "react";
import { LanguageContainer, LanguageButton, LanguageMenu } from "./styles";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");

  const languages = ["English", "中文", "日本語", "Español"];

  return (
    <LanguageContainer>
      <LanguageButton onClick={() => setIsOpen(!isOpen)}>
        {currentLanguage} ▼
      </LanguageButton>
      {isOpen && (
        <LanguageMenu>
          {languages.map((lang) => (
            <li
              key={lang}
              onClick={() => {
                setCurrentLanguage(lang);
                setIsOpen(false);
              }}
            >
              {lang}
            </li>
          ))}
        </LanguageMenu>
      )}
    </LanguageContainer>
  );
};

export default LanguageSelector;
