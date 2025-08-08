import { TopBarContainer, ContactInfo, SearchContainer } from "./styles";
import { FiSearch } from "react-icons/fi";

const TopBar = () => {
  return (
    <TopBarContainer>
      <ContactInfo>
        <span>E-Mail: info@maxxfrtlube.com</span>
        <span>Tel: +86 18126677577</span>
      </ContactInfo>

      <SearchContainer>
        <input type="text" placeholder="Search..." />
        <button aria-label="Search">
          <FiSearch size={18} />
        </button>
      </SearchContainer>
    </TopBarContainer>
  );
};

export default TopBar;
