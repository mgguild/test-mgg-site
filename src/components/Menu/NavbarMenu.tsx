import React, { useContext, useState, useEffect } from "react";
import styled, { ThemeContext } from "styled-components";
import { useLocation } from "react-router-dom";
import { MoreHorizontal } from "react-feather";
import { Dropdown, Text, Flex } from "@metagg/mgg-uikit";
import { LinkLabel, MenuEntry } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { MenuEntry as IMenuEntry } from "./types";

const LinkContainer = styled.div`
  display: flex;
  position: relative;
  gap: 20px; 
`;

const StyledMenuEntry = styled(MenuEntry)`
  background-color: transparent;
  padding: 0;
  position: relative;

`;

const NavBarContainer = styled.div<{ scrolled: boolean }>`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  background-color: ${({ scrolled }) =>
    scrolled ? "rgba(9, 1, 52, 0.8)" : "transparent"};
  transition: background-color 0.3s ease-in-out;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledLinkLabel = styled(LinkLabel)`
  text-align: left;
  ${({ isActive, theme }) =>
    isActive &&
    `
&::before {
  transform: translateX(-50%);
  position: absolute;
  height: 8px;
  bottom: 43%;
  content: '';
  width: 8px;
  left: 0;
}
`}
`;

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #142966;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 10;
  padding: 8px 0;
  gap: 10px; /* Adds spacing between dropdown items */

  ${StyledMenuEntry}:hover & {
    display: block;
  }
`;

const DropdownItem = styled.div`
  padding: 12px 16px; /* Adds padding inside each dropdown item */
  white-space: nowrap;
  margin-bottom: 4px; /* Adds a small gap between dropdown items */

  &:hover {
    background-color: #080E4B;
  }

  &:last-child {
    margin-bottom: 0; /* Removes gap after the last dropdown item */
  }
`;

const DisabledMenuEntry = styled(StyledMenuEntry)`
  pointer-events: none;
  color: #aaa;
`;

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const NavbarTitle: React.FC<{ label: string; isActive?: Array<{ label: string; href: string }> }> = ({
  label,
  isActive,
}) => {
  const theme = useContext(ThemeContext);
  switch (label) {
    case "More":
      return <MoreHorizontal color={isActive?.length !== 0 ? theme.colors.text : theme.colors.textSubtle} />;
    default:
      return (
        <Text fontSize="14px" color={isActive?.length !== 0 ? theme.colors.text : theme.colors.textSubtle}>
          {label}
        </Text>
      );
  }
};

const NavbarMenu: React.FC<{ links: Array<IMenuEntry> }> = ({ links }) => {
  const location = useLocation();
  const theme = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // New state for dropdown visibility

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavBarContainer scrolled={scrolled}>
      <LinkContainer>
        {links.map((link) => (
          <StyledMenuEntry key={link.label}>
            {link.label === "Earn" ? (
              <>
                <StyledLinkLabel 
                  isActive={link.href === location.pathname} 
                  onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown on click
                >
                  {link.label}
                </StyledLinkLabel>
                {link.subMenu && dropdownOpen && ( // Show dropdown if open
                  <DropdownMenu>
                    {link.subMenu.map((subLink) => (
                      <DropdownItem key={subLink.label}>
                        <MenuLink href={subLink.href} onClick={scrollToTop}>
                          {subLink.label}
                        </MenuLink>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                )}
              </>
            ) : (
              <MenuLink href={link.href || "#"} onClick={scrollToTop}>
                <StyledLinkLabel isActive={link.href === location.pathname}>
                  {link.label}
                </StyledLinkLabel>
              </MenuLink>
            )}
          </StyledMenuEntry>
        ))}
      </LinkContainer>
    </NavBarContainer>
  );
};


export default NavbarMenu;