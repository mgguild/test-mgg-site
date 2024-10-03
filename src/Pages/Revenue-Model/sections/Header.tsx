import { Text } from '@metagg/mgg-uikit';
import styled from 'styled-components'
import React from 'react'
import { HeaderContainer } from './styled';
import { GlowTitle } from 'Pages/Homepage/sections/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 8px;
    margin: 0 auto;
    width: 100%;
    
    /* Mobile View */
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 12px; /* Adjust font size for mobile view */
    padding: 10px; /* Optional: Add padding for mobile */
  }

  /* Tablet View */
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 17px;
    width: 1200px;
  }
`;

const StyledGlowTitle = styled(GlowTitle)`
    margin: 20px 0; /* Adds vertical space around the title */
    /* Mobile View */
  ${({ theme }) => theme.mediaQueries.sm} {
    margin: 10px 0; /* Reduce margin for mobile view */
  }
`;

const Section: React.FC = () => {
    return (
        <HeaderContainer height='95' mobileHeight='70'>
            <Container>
                <StyledGlowTitle size='xl' color='primary' padding={4}>REVENUE MODEL</StyledGlowTitle>
                <Text as='p' fontSize='1.6em' bold paddingTop={5}>
                    With the possibilities of blockchain technology, NFT, cryptocurrency, and our strong play-to-earn GameFi community, MetaGaming Guild uses diversified sources of income such as 
                </Text>
            </Container>
        </HeaderContainer>
    );
};

export default Section;