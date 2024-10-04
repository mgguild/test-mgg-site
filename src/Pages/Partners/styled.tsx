import styled, { keyframes } from 'styled-components'
import { Flex, Heading } from '@metagg/mgg-uikit'
import GridGradient from '../../assets/background/BGGridperspective.png'
import GridGradientFlipped from '../../assets/background/BGGridperspectiveInverted.png'
import BgGrid from '../../assets/background/BGGrid.png'

// Keyframes for a continuous left and right turn animation
const continuousTurn = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  25% {
    transform: rotateY(40deg);
  }
  50% {
    transform: rotateY(0deg);
  }
  75% {
    transform: rotateY(-40deg);
  }
  100% {
    transform: rotateY(0deg);
  }
`;

export const Card = styled.div<{ border?: string; fontSize?: string }>`
  background-color: #0c012c;
  border-radius: 50%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12rem;
  width: 12rem; /* Set width to match height */
  ${({ fontSize }) => fontSize && `
    font-size: ${fontSize}px;
  `}
  transition: transform 0.6s ease-in-out;

  &:hover {
    animation: ${continuousTurn} 1.8s ease-in-out infinite; /* Infinite animation on hover */
  }

  @media screen and (max-width: 768px) {
    height: 8rem;
    width: 8rem; /* Reduce size for mobile view */
    padding: 0.5rem;
  }
`;

export const Logo = styled.img`
  height: 5rem;

  @media screen and (max-width: 768px) {
    height: 3rem; /* Adjust logo size for mobile */
  }
`;

export const CardContainer = styled.div`
  flex-basis: calc(100% / 6);
  max-width: 16rem;
  min-width: 0rem;
  position: relative;
  padding-left: 55px;

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    max-width: 100%;
    padding-left: 15px;
    margin: 0 0 1rem 0; /* Add margin for spacing on mobile */
  }
`;

export const CheckList = styled.li`
  padding: 1rem 0 0 1rem;
  &:before{
    content: "✔";
    color: #06ff65;
    font-weight: bold;
    display: inline-block;
    width: 1rem;
    margin-left: -1rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem 0 0 0.5rem; /* Adjust padding for mobile */
  }
`;

export const List = styled.li`
  padding: 1rem 0 0 1rem;
  &:before{
    content: "●";
    color: #fdda00;
    font-weight: bold;
    display: inline-block;
    width: 1rem;
    margin-left: -1rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem 0 0 0.5rem; /* Adjust padding for mobile */
  }
`;

export const BgPage = styled.div`
  padding: 5rem;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 98%;
  position: relative;
  background-color: ${({ theme }) => theme.addOnColors.background2};
  background-image: url(${GridGradient});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: contain;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 1rem; /* Adjust padding for mobile */
  }

  @media screen and (max-width: 500px) {
    padding: 1rem; /* Adjust padding for smaller screens */
  }
`;

export const Logos = styled(Flex)`
  margin: 2rem 0 0 0;
  flex-flow: row wrap;
  column-gap: 1rem;
  row-gap: 1rem;
  justify-content: center;
  align-items: stretch;
  position: relative;

  @media (max-width: 768px) {
    flex-flow: row wrap; /* Ensure it remains in row wrap */
    justify-content: flex-end;; 
    
    & > * {
      flex-basis: calc(50% - 1rem); /* Set width for two items per row */
    }
  }
`;

export const PageTitle = styled(Heading)`
  color: ${({theme}) => theme.colors.primary};
  font-size: 3.5em;
  border: 2px solid yellow; /* Yellow border */
  padding: 20px;
  display: inline-block;
  box-shadow: 0 0 10px yellow; /* Glow effect */
  border-radius: 15px;
  margin-bottom: 20px; /* Adjust the margin-bottom value as needed */
  text-align: center; /* Center text inside PageTitle */
  background-color: ${({ theme }) => theme.addOnColors.background2};

  @media screen and (max-width: 768px) {
    font-size: 2.5em; /* Adjust font size for mobile */
    padding: 15px; /* Adjust padding for mobile */
  }

  @media screen and (max-width: 500px) {
    font-size: 2.9em; /* Further adjust font size for smaller screens */
    padding: 10px; /* Further adjust padding */
  }
`;

export const Title = styled(Heading)`
  color: ${({theme}) => theme.colors.primary};
  font-size: 2em;
  border: 2px solid yellow; /* Yellow border */
  padding: 20px;
  display: inline-block;
  box-shadow: 0 0 6px yellow; /* Glow effect */
  border-radius: 15px;
  margin-bottom: 20px; /* Adjust the margin-bottom value as needed */
  text-align: center; /* Center text inside PageTitle */

  @media screen and (max-width: 768px) {
    font-size: 1.5em; /* Adjust font size for mobile */
    padding: 15px; /* Adjust padding for mobile */
  }

  @media screen and (max-width: 500px) {
    font-size: 1.2em; /* Further adjust font size for smaller screens */
    padding: 10px; /* Further adjust padding */
  }
`;

export const Line = styled.div`
  width: 10%;
  background-color: rgb(253,218,0);
  z-index: 0;
  position: absolute;
  top: 5rem;
  left: 100%;
  border: solid #fdda00;
  box-shadow: 0 0 1rem #fdda00;

  @media (max-width: 1280px) {
    width: 0.1rem;
    left: 50%;
    top: 100%;
    height: 15%;
  }

  @media (max-width: 768px) {
    width: 0.1rem;
    height: 20%;
    top: 80%;
    left: 50%;
  }
`;
