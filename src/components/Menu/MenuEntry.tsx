import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed?: boolean; isActive?: boolean }>`
  color: ${({ theme, isActive }) => isActive && theme.colors.text};
  cursor: pointer;
  transition: color 0.4s;
  flex-grow: 1;
  display: inline-block;
  vertical-align: top;
  position: relative;
  text-align: center;
  padding: 7px 0px;
  &:hover {
    &::before {
      position: absolute;
        transform: translateX(-50%);
        background: ${({theme}) => theme.colors.primary};
        bottom: 0;
        height: 2px;
        content: '';
        width: 100%;
        left: 50%;
      }
  }
  @media (max-width: 836px){
    &::before {
      display: none;
  }

  ${({theme}) => theme.mediaQueries.md} {
    padding: 20px 10px;
  }
`;

const MenuEntry = styled.div<Props>`
  // cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "0 32px" : "0 16px")};
  font-size: ${({ secondary }) => (secondary ? "12px" : "14px")};
  background-color: ${({ secondary, theme }) => (secondary ? theme.colors.background : "transparent")};
  color: white;
  // box-shadow: ${({ isActive, theme }) => (isActive ? `0 5px 5px ${theme.colors.primary}` : "none")};
  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: center;

  }
  svg {
    fill: ${({ theme, isActive }) => (isActive ? theme.colors.primary : theme.colors.textSubtle)};
  }
  // Safari fix
  flex-shrink: 0;
  &.rainbow {
    -webkit-background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 200% 100%;
    font-weight: bold;
    color: white;
  }
  &.rainbow svg {
    fill: white;
  }
    // Add media query for mobile view
  @media (max-width: 768px) {
    height: 50px; // Set a different height for mobile devices
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownMenu = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  position: absolute;
  top: 2.5rem;
  background-color: #000023;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px;
  overflow: hidden;
`;

const DropdownMenuItem = styled.a`
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #0c0c48;
  }
`;

export { MenuEntry, LinkLabel, DropdownContainer, DropdownMenu, DropdownMenuItem };