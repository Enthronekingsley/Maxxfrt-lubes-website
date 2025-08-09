// import React from "react";
// import { NavLink } from "react-router-dom";
// import {
//   MainNavContainer,
//   MobileNavButton,
//   LogoContainer,
//   NavList,
//   NavItem,
//   Dropdown,
//   DropdownMenu,
//   DropdownMenuItem,
//   MobileMenuOverlay,
//   MobileMenuContainer,
//   MobileMenuHeader,
//   CloseButton,
//   MobileNavList,
//   MobileNavItem,
// } from "./styles";
// import { FiMenu, FiSearch, FiChevronDown, FiX } from "react-icons/fi";
// import logo from "../../assets/logo.png";

// const dropdownContent = {
//   company: [
//     { label: "About Us", href: "/about" },
//     { label: "Our Team", href: "/team" },
//     { label: "Careers", href: "/careers" },
//   ],
//   products: [
//     { label: "All Products", href: "/products" },
//     { label: "Industrial Grease", href: "/products/industrial" },
//     { label: "Engine Oil", href: "/products/engine" },
//     { label: "Food Grade", href: "/products/food" },
//   ],
//   services: [
//     { label: "All Services", href: "/services" },
//     { label: "Sales", href: "/services/sales" },
//     { label: "Maintenance", href: "/services/service" },
//     { label: "Consulting", href: "/services/consulting" },
//   ],
// };

// const navItems = [
//   { label: "Home", href: "/" },
//   { label: "Company", href: "/company", hasDropdown: true, key: "company" },
//   { label: "Products", href: "/products", hasDropdown: true, key: "products" },
//   { label: "Services", href: "/services", hasDropdown: true, key: "services" },
//   { label: "Contact", href: "/contact" },
// ];

// const MainNav: React.FC<{
//   onMenuClick: () => void;
//   onSearchClick: () => void;
//   isMobileMenuOpen: boolean;
//   closeMobileMenu: () => void;
// }> = ({ onMenuClick, onSearchClick, isMobileMenuOpen, closeMobileMenu }) => {
//   const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

//   const toggleDropdown = (key: string) => {
//     setOpenDropdown(openDropdown === key ? null : key);
//   };

//   return (
//     <MainNavContainer>
//       <MobileNavButton onClick={onMenuClick} aria-label="Menu">
//         <FiMenu size={24} />
//       </MobileNavButton>

//       <LogoContainer>
//         <NavLink to="/">
//           <img
//             src={logo}
//             alt="Company Logo"
//             style={{
//               height: "50px",
//               width: "auto",
//               maxWidth: "100%",
//             }}
//           />
//         </NavLink>
//       </LogoContainer>

//       <NavList>
//         {navItems.map((item) => (
//           <NavItem key={item.href}>
//             <NavLink
//               to={item.href}
//               className={({ isActive }) =>
//                 isActive && !item.hasDropdown ? "active" : ""
//               }
//               end
//             >
//               {item.label}
//               {item.hasDropdown && (
//                 <Dropdown>
//                   <FiChevronDown size={14} />
//                 </Dropdown>
//               )}
//             </NavLink>

//             {item.hasDropdown && (
//               <DropdownMenu>
//                 {dropdownContent[item.key as keyof typeof dropdownContent].map(
//                   (subItem) => (
//                     <DropdownMenuItem
//                       key={subItem.href}
//                       as={NavLink}
//                       to={subItem.href}
//                       className={({ isActive }) => (isActive ? "active" : "")}
//                       onClick={closeMobileMenu}
//                     >
//                       {subItem.label}
//                     </DropdownMenuItem>
//                   )
//                 )}
//               </DropdownMenu>
//             )}
//           </NavItem>
//         ))}
//       </NavList>

//       <MobileNavButton onClick={onSearchClick} aria-label="Search">
//         <FiSearch size={20} />
//       </MobileNavButton>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <>
//           <MobileMenuOverlay onClick={closeMobileMenu} />
//           <MobileMenuContainer $isOpen={isMobileMenuOpen}>
//             <MobileMenuHeader>
//               <CloseButton onClick={closeMobileMenu} aria-label="Close menu">
//                 <FiX size={24} />
//               </CloseButton>
//             </MobileMenuHeader>
//             <MobileNavList>
//               {navItems.map((item) => (
//                 <MobileNavItem key={item.href}>
//                   {item.hasDropdown ? (
//                     <div className="mobile-dropdown">
//                       <div
//                         className="mobile-dropdown-header"
//                         onClick={() => toggleDropdown(item.key)}
//                       >
//                         {item.label}
//                         <FiChevronDown
//                           size={18}
//                           style={{
//                             transform:
//                               openDropdown === item.key
//                                 ? "rotate(180deg)"
//                                 : "rotate(0)",
//                             transition: "transform 0.2s ease",
//                           }}
//                         />
//                       </div>
//                       <div
//                         className={`mobile-dropdown-content ${
//                           openDropdown === item.key ? "open" : ""
//                         }`}
//                       >
//                         {dropdownContent[
//                           item.key as keyof typeof dropdownContent
//                         ].map((subItem) => (
//                           <NavLink
//                             key={subItem.href}
//                             to={subItem.href}
//                             onClick={closeMobileMenu}
//                             className={({ isActive }) =>
//                               isActive ? "active" : ""
//                             }
//                           >
//                             {subItem.label}
//                           </NavLink>
//                         ))}
//                       </div>
//                     </div>
//                   ) : (
//                     <NavLink
//                       to={item.href}
//                       onClick={closeMobileMenu}
//                       className={({ isActive }) => (isActive ? "active" : "")}
//                     >
//                       {item.label}
//                     </NavLink>
//                   )}
//                 </MobileNavItem>
//               ))}
//             </MobileNavList>
//           </MobileMenuContainer>
//         </>
//       )}
//     </MainNavContainer>
//   );
// };

// export default MainNav;

import React from "react";
import { NavLink } from "react-router-dom";
import {
  MainNavContainer,
  MobileNavButton,
  LogoContainer,
  NavList,
  NavItem,
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  MobileMenuOverlay,
  MobileMenuContainer,
  MobileMenuHeader,
  CloseButton,
  MobileNavList,
  MobileNavItem,
  MobileSearchContainer,
  SearchInput,
  SearchButton,
} from "./styles";
import { FiMenu, FiSearch, FiChevronDown, FiX } from "react-icons/fi";
import logo from "../../assets/logo.png";

const dropdownContent = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Careers", href: "/careers" },
  ],
  products: [
    { label: "All Products", href: "/products" },
    { label: "Industrial Grease", href: "/products/industrial" },
    { label: "Engine Oil", href: "/products/engine" },
    { label: "Food Grade", href: "/products/food" },
  ],
  services: [
    { label: "All Services", href: "/services" },
    { label: "Sales", href: "/services/sales" },
    { label: "Maintenance", href: "/services/service" },
    { label: "Consulting", href: "/services/consulting" },
  ],
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company", hasDropdown: true, key: "company" },
  { label: "Products", href: "/products", hasDropdown: true, key: "products" },
  { label: "Services", href: "/services", hasDropdown: true, key: "services" },
  { label: "Contact", href: "/contact" },
];

const MainNav: React.FC<{
  onMenuClick: () => void;
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
}> = ({ onMenuClick, isMobileMenuOpen, closeMobileMenu }) => {
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const openSearch = () => {
    setIsSearchOpen(true);
    setTimeout(() => searchInputRef.current?.focus(), 100);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <MainNavContainer>
      <MobileNavButton onClick={onMenuClick} aria-label="Menu">
        <FiMenu size={24} />
      </MobileNavButton>

      <LogoContainer>
        <NavLink to="/">
          <img
            src={logo}
            alt="Company Logo"
            style={{
              height: "50px",
              width: "auto",
              maxWidth: "100%",
            }}
          />
        </NavLink>
      </LogoContainer>

      <NavList>
        {navItems.map((item) => (
          <NavItem key={item.href}>
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                isActive && !item.hasDropdown ? "active" : ""
              }
              end
            >
              {item.label}
              {item.hasDropdown && (
                <Dropdown>
                  <FiChevronDown size={14} />
                </Dropdown>
              )}
            </NavLink>

            {item.hasDropdown && (
              <DropdownMenu>
                {dropdownContent[item.key as keyof typeof dropdownContent].map(
                  (subItem) => (
                    <DropdownMenuItem
                      key={subItem.href}
                      as={NavLink}
                      to={subItem.href}
                      className={({ isActive }) => (isActive ? "active" : "")}
                      onClick={closeMobileMenu}
                    >
                      {subItem.label}
                    </DropdownMenuItem>
                  )
                )}
              </DropdownMenu>
            )}
          </NavItem>
        ))}
      </NavList>

      <MobileNavButton onClick={openSearch} aria-label="Search">
        <FiSearch size={20} />
      </MobileNavButton>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <MobileMenuOverlay onClick={closeMobileMenu} />
          <MobileMenuContainer $isOpen={isMobileMenuOpen}>
            <MobileMenuHeader>
              <CloseButton onClick={closeMobileMenu} aria-label="Close menu">
                <FiX size={24} />
              </CloseButton>
            </MobileMenuHeader>
            <MobileNavList>
              {navItems.map((item) => (
                <MobileNavItem key={item.href}>
                  {item.hasDropdown ? (
                    <div className="mobile-dropdown">
                      <div
                        className="mobile-dropdown-header"
                        onClick={() => toggleDropdown(item.key)}
                      >
                        {item.label}
                        <FiChevronDown
                          size={18}
                          style={{
                            transform:
                              openDropdown === item.key
                                ? "rotate(180deg)"
                                : "rotate(0)",
                            transition: "transform 0.2s ease",
                          }}
                        />
                      </div>
                      <div
                        className={`mobile-dropdown-content ${
                          openDropdown === item.key ? "open" : ""
                        }`}
                      >
                        {dropdownContent[
                          item.key as keyof typeof dropdownContent
                        ].map((subItem) => (
                          <NavLink
                            key={subItem.href}
                            to={subItem.href}
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              isActive ? "active" : ""
                            }
                          >
                            {subItem.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to={item.href}
                      onClick={closeMobileMenu}
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </MobileNavItem>
              ))}
            </MobileNavList>
          </MobileMenuContainer>
        </>
      )}

      {isSearchOpen && (
        <MobileSearchContainer $isOpen={isSearchOpen}>
          <SearchInput
            type="text"
            placeholder="Search..."
            ref={searchInputRef}
          />
          <SearchButton onClick={closeSearch}>
            <FiX size={24} />
          </SearchButton>
        </MobileSearchContainer>
      )}
    </MainNavContainer>
  );
};

export default MainNav;
