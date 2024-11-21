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
`;

const StyledMenuEntry = styled(MenuEntry)`
  background-color: transparent;
  padding: 0;
`;

const NavBarContainer = styled.div<{ scrolled: boolean }>`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  background-color: ${({ scrolled }) => 
    scrolled ? "rgba(9, 1, 52, 0.8)" : "transparent"}; /* Change color and transparency */
  transition: background-color 0.3s ease-in-out;
  z-index: 1000; /* Stay above other content */
  transition: background-color 0.3s ease-in-out;

  & > * {
    text-align: left;
  }

  & > *:nth-child(4) {
    border-top: 2px solid rgba(133, 133, 133, 0.1);
    border-bottom: 2px solid rgba(133, 133, 133, 0.1);
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
  background: ${theme.colors.primary};
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
          link.href && (
            <MenuEntry key={link.label}>
              <MenuLink href={link.href} onClick={scrollToTop}>
                <LinkLabel isActive={link.href === location.pathname}>
                  {link.label}
                </LinkLabel>
              </MenuLink>
            </MenuEntry>
          )
        ))}
      </LinkContainer>
    </NavBarContainer>
  );
};

export default NavbarMenu;