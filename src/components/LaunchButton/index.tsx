import React from 'react'
import styled from 'styled-components'
import { breakpoints } from 'theme/Breakpoints'

export const StyledLaunchButton = styled.button`
    background-image: linear-gradient(to right, blue, white);
    color: #0a0a0c;
    font-weight: bold;
    padding: 3px;
    border-radius: 15px;    
    text-align: center;
    font-size: 0.5rem;
    
    ${({theme}) => `@media screen and (max-width: ${breakpoints.Mobile.tablet}px)`} {
      font-size: 1rem;
      padding: 10px;
    }
    
    ${({theme}) => theme.mediaQueries.md} {
      padding: 15px;
      font-size: 1rem;
    }
`
const LaunchButton:React.FC = () => {
    return (
        <StyledLaunchButton as="a" href="https://app.metagg.com/#/farms" color='white'>
        Launch App
      </StyledLaunchButton>
    )
}

export default LaunchButton;