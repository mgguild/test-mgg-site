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

  & > * {
    text-align: left;
  }

  & > *:nth-child(4) {
    border-top: 2px solid rgba(133, 133, 133, 0.1);
    border-bottom: 2px solid rgba(133, 133, 133, 0.1);
  }
`;

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 10;
  padding: 8px 0;

  ${StyledMenuEntry}:hover & {
    display: block;
  }
`;

const DropdownItem = styled.div`
  padding: 10px 16px;
  white-space: nowrap;

  &:hover {
    background-color: #f0f0f0;
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

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const NavbarTitle: React.FC<{ label: string; isActive?: boolean }> = ({
  label,
  isActive,
}) => {
  const theme = useContext(ThemeContext);
  switch (label) {
    case "More":
      return <MoreHorizontal color={isActive ? theme.colors.text : theme.colors.textSubtle} />;
    default:
      return (
        <Text fontSize="14px" color={isActive ? theme.colors.text : theme.colors.textSubtle}>
          {label}
        </Text>
      );
  }
};

const NavbarMenu: React.FC<{ links: Array<IMenuEntry> }> = ({ links }) => {
  const location = useLocation();
  const theme = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavBarContainer scrolled={scrolled}>
      <LinkContainer>
        {links.map((link) => (
          <StyledMenuEntry key={link.label}>
            <MenuLink href={link.href || "#"} onClick={scrollToTop}>
              <StyledLinkLabel isActive={link.href === location.pathname}>
                {link.label}
              </StyledLinkLabel>
            </MenuLink>

            {/* Render dropdown if subMenu exists */}
            {link.subMenu && (
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
          </StyledMenuEntry>
        ))}
      </LinkContainer>
    </NavBarContainer>
  );
};

export default NavbarMenu;
