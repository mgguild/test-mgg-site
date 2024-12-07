import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
  links: any[]; // Assume 'links' is an array with your menu items
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;

const DropdownContainer = styled.div<{ isOpen: boolean; isMobile: boolean }>`
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  padding-left: ${(props) => (props.isMobile ? "20px" : "0")};
  background-color: ${(props) => props.isMobile ? "lightgray" : "transparent"};
  padding-top: ${(props) => (props.isMobile ? "0px" : "0")};
  padding-bottom: ${(props) => (props.isMobile ? "0px" : "0")};
  position: absolute;
  left: 0;
  top: 100%; /* Ensures it is positioned directly under the "Earn" button */
  width: 100%;
  z-index: 100;  /* Ensure dropdown is above other items */
`;

const EarnMenuEntry = styled(MenuEntry)<{ isOpen: boolean }>`
  position: relative;  /* So the dropdown can be positioned under this item */
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isEarnActive, setIsEarnActive] = useState<boolean>(false);

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  const toggleDropdown = (label: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    setActiveDropdown((prev) => (prev === label ? null : label)); // Toggle active dropdown

    // Set state to move the "Partner" button down when "Earn" is active
    if (label === "Earn") {
      setIsEarnActive((prev) => !prev); // Toggle "Earn" dropdown active state
    }
  };

  return (
    <Container>
      {links.map((entry) => {
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.subMenu) {
          return (
            <EarnMenuEntry
              key={entry.label}
              isActive={activeDropdown === entry.label}
              className={calloutClass}
              isOpen={activeDropdown === entry.label}  // Pass down the open state
            >
              <MenuLink href="#" onClick={(e) => toggleDropdown(entry.label, e)}>
                <LinkLabel isActive={activeDropdown === entry.label} isPushed={isPushed}>
                  {entry.label}
                </LinkLabel>
              </MenuLink>
              <DropdownContainer isOpen={activeDropdown === entry.label} isMobile={isMobile}>
                {entry.subMenu.map((item) => (
                  <MenuEntry
                    key={item.href}
                    secondary
                    isActive={item.href === location.pathname}
                    onClick={handleClick}
                  >
                    <MenuLink target="_self" href={item.href}>
                      {item.label}
                    </MenuLink>
                  </MenuEntry>
                ))}
              </DropdownContainer>
            </EarnMenuEntry>
          );
        }

        return (
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
            <MenuLink href={entry.href} onClick={handleClick}>
              <LinkLabel isActive={entry.href === location.pathname} isPushed={isPushed}>
                {entry.label}
              </LinkLabel>
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default PanelBody;
