import { Flex, Heading, Text } from '@metagg/mgg-uikit'
import styled from 'styled-components'
import React from 'react'
import MGGLogo from 'assets/background/MGGLogo.png'
import { HomeContainer, PageTitle } from './styled'


const Container = styled(Flex)`
  min-width: 0px;
  max-width: 720px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  margin: 0px auto;
  position: relative;
  font-size: 12px;

  :before {
    top: 150px;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    background-image: url(${MGGLogo});
    background-repeat: no-repeat;
    background-size: 40%;
    background-position: center 10px;
    content: ' ';
    z-index: 0;
  }

  & :first-child {
    letter-spacing: 2px;
    line-height: 1em;
    z-index: 1;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    min-width: 720px;
    font-size: 19px;
  }

  /* Mobile view styles */
  @media (max-width: 500px) {
    max-width: 80%; 
    font-size: 14px; 
    padding: 20px; 
    :before {
      top: 120px; /* Adjust the top position of the background image */
      background-size: 80%; /* Increase the background size for mobile */
    }
  }

`
const Section:React.FC = () => {

    return (
        <HomeContainer height='100'>
            <Container>
                <Text fontSize="2.5em" bold marginTop='500px'>We Create Metaverse Gaming Opportunities for P2E Masses </Text>
            </Container>
        </HomeContainer>
    )
}

export default Section