import styled from 'styled-components';
import { Heading, Flex } from '@metagg/mgg-uikit';
import { breakpoints } from '../../theme/Breakpoints';
import BackgroundImage from 'assets/background/BGGrid.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HeaderContainer = styled(Container)`
  margin: 0px auto;
  text-align: center;
  font-size: 24px;
  padding: 15px 5px;
  width: 600px;
  & > * {
    margin: 15px 0px;
  }
  
  @media screen and (max-width: ${breakpoints.Mobile.l}px) {
    font-size: 16px;
    width: 90vw; /* Smaller width for mobile */
    padding: 10px; /* Reduce padding */
  }
`;

export const ContentContainer = styled(Container)`
  margin-top: 15px;
  
  @media screen and (max-width: ${breakpoints.Mobile.l}px) {
    margin-top: 10px; /* Reduce margin on mobile */
  }
`;

export const PageTitle = styled(Heading)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.7em;
  border: 2px solid yellow; /* Yellow border */
  padding: 37px; 
  display: inline-block;
  box-shadow: 0 0 10px yellow; /* Glow effect */
  border-radius: 15px;
  margin-bottom: 20px; /* Adjust the margin-bottom value as needed */

  @media screen and (max-width: ${breakpoints.Mobile.l}px) {
    font-size: 1.2em; /* Smaller font size */
    padding: 20px; /* Less padding */
    border-radius: 10px; /* Smaller border radius */
  }
`;

export const CardContainer = styled.div`
  font-size: 14px;

  @media screen and (max-width: 800px) {
    font-size: 12px;
    margin-top: 2rem;
  }

  @media screen and (max-width: ${breakpoints.Mobile.l}px) {
    font-size: 11px; /* Further decrease font size */
    margin-top: 1rem; /* Less margin-top on mobile */
    padding: 10px; /* Additional padding for better spacing */
  }
`;

export const BgPage = styled.div`
  padding: 5rem;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 105%;
    height: 105%;
    z-index: 0;
    background-color: ${({ theme }) => theme.addOnColors.background1};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  @media screen and (max-width: 500px) {
    padding: 1rem; /* Reduce padding for small screens */
    height: auto; /* Allow dynamic height */
  }
`;
