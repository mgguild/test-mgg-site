import styled, { ThemeContext, keyframes } from 'styled-components'
import { Flex, Heading, Button } from '@metagg/mgg-uikit'

export const Card = styled.div`
  border: #008ffd 0.15rem solid;
  border-radius: 0.5rem;
  padding: 4rem;
  z-index: 3;
  margin: 2rem;
  text-align: center;
`

export const PageTitle = styled(Heading)`
  color: ${({theme}) => theme.colors.primary};
  font-size: 3em;
  border: 2px solid yellow; /* Yellow border */
  padding: 20px;
  display: inline-block;
  box-shadow: 0 0 10px yellow; /* Glow effect */
  border-radius: 15px;
  margin-bottom: 20px; /* Adjust the margin-bottom value as needed */
  text-align: center; /* Center text inside PageTitle */
`

export const Btn = styled(Button)`
  background-color: #00f4fd;
  color: black;
  border-radius: 0.3rem;
  margin: 0 auto;
  padding: 4px;
`

export const Icons = styled(Flex)`
  max-width: 50rem;
  flex-flow: row wrap;
  column-gap: 1rem;
  row-gap: 3rem;
  justify-content: center;
  align-items: baseline;
  position: relative;
`
export const IconHolder = styled.div`
  min-width: 15rem;
`

export const Section = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  row-gap: 2rem;
`

export const LogoHighlightLink = styled.a`
  cursor: pointer;
  position: relative;
  box-shadow: 0 0 0px rgba(0, 234, 255, 0.1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  margin: 0.5rem;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 20px rgba(0, 251, 255, 0.5);
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover {
    z-index: 3;
    transform: scale(1.2, 1.2);
    &::after {
      opacity: 1;
    }
  }
`