import styled, { ThemeContext } from 'styled-components'
import { Flex, Heading, Button } from '@metagg/mgg-uikit'

export const Card = styled.div`
  background-color: #0c012c;
  border: #008ffd 0.15rem solid;
  border-radius: 0.5rem;
  padding: 2rem;
  -moz-box-shadow: inset 0 0 2rem #000000, 0 0.3rem 0.5rem #008ffd;
  -webkit-box-shadow: inset 0 0 2rem #000000, 0 0.3rem 0.5rem #008ffd;
  box-shadow: inset 0 0 2rem #000000, 0 0.3rem 0.5rem #008ffd;
  z-index: 3;
  margin: 2rem;
  text-align: center;
`


export const Btn = styled(Button)`
  background-color: #00f4fd;
  color: black;
  border-radius: 0.3rem;
  margin: 0 auto;
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
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  row-gap: 2rem;
`
export const PageTitle = styled(Heading)`
  color: ${({theme}) => theme.colors.primary};
  font-size: 3.2em;
  border: 2px solid yellow; /* Yellow border */
  padding: 28px; 
  display: inline-block;
  box-shadow: 0 0 10px yellow; /* Glow effect */
  border-radius: 15px;
  margin-bottom: 20px; // Adjust the margin-bottom value as needed
  @media (max-width: 500px) {
   font-size: 2.5em;
  }  
`
