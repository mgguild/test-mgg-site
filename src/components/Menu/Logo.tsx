import styled from 'styled-components'
import React from 'react'
import { Flex } from '@metagg/mgg-uikit'
import { Link } from 'react-router-dom'
import { Menu } from 'react-feather'
import MGGLogo from 'assets/static/logo.png'
import MenuButton from './MenuButton';

interface Props {
    isPushed: boolean;
    togglePush: () => void;
    href: string;
    isMobile: boolean;
  }

  const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 156px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

const LogoText = styled.span`
  color: white; /* White text color */
  font-size: 24px; /* Adjust font size as needed */
  margin-left: 8px; /* Space between logo and text */
`;

const Logo:React.FC<Props> = ({isPushed, togglePush, href, isMobile }) => {
    const innerLogo = <img alt='mgg-logo' src={MGGLogo} width='60px' />

    return (
        <Flex alignItems='center'>
            {
                isMobile && (
                    <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
                        <Menu />
                    </MenuButton>
                )
            }

            <StyledLink to={href} aria-label='MGG Homepage'>
                {innerLogo}
            </StyledLink>
            <LogoText>MetaGaming Guild</LogoText>
        </Flex>
    )
}

export default Logo;