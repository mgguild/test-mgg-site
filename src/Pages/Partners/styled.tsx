import styled, { keyframes } from 'styled-components'
import { Flex, Heading } from '@metagg/mgg-uikit'
import GridGradient from '../../assets/background/BGGridperspective.png'
import GridGradientFlipped from '../../assets/background/BGGridperspectiveInverted.png'
import BgGrid from '../../assets/background/BGGrid.png'

// Keyframes for left turn animation
const leftTurn = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-20deg);
  }
`;

// Keyframes for right turn animation
const rightTurn = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(20deg);
  }
`;


export const Card = styled.div<{border?: string; fontSize?: string}>`
  background-color: #0c012c;
  border-radius: 50%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12rem;
  width: 12rem;  // Set width to match height
  ${({fontSize}) => fontSize && `
    font-size: ${fontSize}px;
  `}
    transition: transform 0.6s ease-in-out;
  
  &:hover {
    /* Flip the logo like a coin to the left or right */
    animation: turn 0.6s forwards;
  }

  &:active {
    /* When the logo is clicked, reverse the coin flip */
    animation: turn-back 0.6s forwards;
  }

  /* Keyframes for turning to the left (hover effect) */
  @keyframes turn {
    0% {
      transform: rotateY(20deg);
    }
    50% {
      transform: rotateY(50deg); /* Midpoint where it disappears */
    }
    
  }

  /* Keyframes for turning back to the right (active effect) */
  @keyframes turn-back {
    0% {
      transform: rotateY(50deg);
    }
    50% {
      transform: rotateY(20deg); /* Midpoint where it disappears */
    }
  }
`;

export const Logo = styled.img`
  height: 5rem;
`

export const CardContainer = styled.div`
  flex-basis: calc(100% / 6);
  max-width: 16rem;
  min-width: 0rem;
  position: relative;
  padding-left: 55px;
`

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
`

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
`

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

  @media screen and (max-width: 500px) {
    padding: 0.5rem;
  }
`

export const Logos = styled(Flex)`
  margin: 2rem 0 0 0;
  flex-flow: row wrap;
  column-gap: 1rem;
  row-gap: 1rem;
  justify-content: center;
  align-items: stretch;
  position: relative;

  /* @media (max-width: 1280px) {
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  } */
`

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
`

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
`


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
`