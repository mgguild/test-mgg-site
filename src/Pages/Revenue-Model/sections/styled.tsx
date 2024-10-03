import styled from 'styled-components';
import MainBG from 'assets/background/BGUtilities@4x.png';
import { Flex, Text } from '@metagg/mgg-uikit';
import { breakpoints } from '../../../theme/Breakpoints';

export const SectionContainer = styled.div<{ height?: string; mobileHeight?: string }>`
  min-height: 65vh;
  display: flex;
  padding: 15px;

  @media screen and (max-width: ${breakpoints.Mobile.tablet}px) {
    padding: 10px; /* Adjusted padding for mobile */
  }
`;

export const HeaderContainer = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.addOnColors.background1};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;

  @media screen and (max-width: ${breakpoints.Mobile.tablet}px) {
    padding: 20px; /* Increased padding for a better look on mobile */
  }
`;

export const DetailsContainer = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.addOnColors.background1};
  background-image: url(${MainBG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;

  @media screen and (max-width: ${breakpoints.Mobile.tablet}px) {
    padding: 20px;
    background-size: cover; /* Adjust background size for mobile */
  }

  @media (min-width: 768px) {
    .desktop-view {
    }

    .mobile-view {
      display: none;
    }
  }

  @media (max-width: 767px) {
    .desktop-view {
      display: none;
    }

    .mobile-view {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Box = styled(Flex)`
  max-width: 1440px;
  padding: 24px;

  @media screen and (max-width: ${breakpoints.Mobile.tablet}px) {
    padding: 16px; /* Reduced padding for mobile view */
    flex-direction: column; /* Stack elements vertically */
  }

  .text-section {
    display: flex;
    flex-direction: column;
    flex: 1;

    @media screen and (max-width: ${breakpoints.Mobile.tablet}px) {
      align-items: center; /* Center text on mobile */
    }
  }

  .icon-element {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    & > * {
      width: 50%;
    }

    @media screen and (max-width: ${breakpoints.Mobile.l}px) {
      flex-direction: column;
      text-align: center;
    }

    @media screen and (max-width: ${breakpoints.Mobile.tablet}px) {
      & > * {
        width: 250px;
      }
    }
  }
`;

export const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 15px;
  font-weight: bold;

  @media screen and (max-width: ${breakpoints.Mobile.tablet}px) {
    font-size: 30px; /* Adjust font size for mobile */
    margin-bottom: 15px; /* Adjust margin for mobile */
  }
`;
