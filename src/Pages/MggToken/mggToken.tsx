import React, { useContext } from 'react'
import { Text, Flex, Heading, Button } from '@metagg/mgg-uikit'
import styled, { ThemeContext } from 'styled-components'
import Page from 'components/layout/Page'
import { SvgProps } from 'components/SvgIcon/types'
import SvgIcon from 'components/SvgIcon/SvgIcon'
import Exchanges from 'config/constants/Exchanges'
import useMedia from 'use-media'
import { BgContainer } from '../../style/Global'
import {
  Card,
  Btn,
  Icons,
  IconHolder,
  PageTitle,
  Section,
  LogoHighlightLink
} from './styled'
import { CardContainer, Card as BoxCard } from 'Pages/Partners/styled'
import bgImage from 'assets/background/BGextra.png'
import GrowthBG from 'assets/background/GrowthBG.png'
import MGGLogo from 'assets/background/MGGLogo.png'
import EthLogo from 'assets/logo/ETH.png'
import BscLogo from 'assets/logo/BSC.png'
import FantomLogo from 'assets/logo/Fantom.png'
import GuildRwards from './icons/GuildRewards.png'
import GameFiVault from './icons/Ingame Rewards.png'
import LiquidityRewards from './icons/LiquidityRewards.png'
import Launchpad from './icons/Launchpad.png'
import DAOG from './icons/DAO Governance.png'
import { GlowTitle } from 'Pages/Homepage/sections/styled'


interface IconProps extends SvgProps {
  Img?: string
}

export const Icon: React.FC<IconProps> = (props) => {
  const { Img, width } = props
  return <SvgIcon width={width} Img={Img} />
}

const HoverCard = styled(Card)`
  width: 20rem;
  transition: color 0.3s ease, background-color 0.3s ease;
  &:hover {
    background-color: #000058; // Example background color on hover
    color: #007bff; // Example text color on hover
  }
  @media screen and (max-width: 768px) {
    width: 100%; // Full width on mobile view
  }
`;

const AdaptTxt = styled(Text)`
  font-size: 1rem;
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
  @media screen and (max-width: 300px) {
    font-size: 10px;
  }
`;

const TokenInfoContainer = styled(Flex)`
  flex-flow: row wrap;
  justify-content: center;
  column-gap: 0rem;
  @media screen and (max-width: 768px) {
    flex-flow: column;
    align-items: center;
  }
`;

const SectionContainer = styled(Section)`
  padding: 4rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column; // Stack items on mobile view
    text-align: center;
  }
`;


const MggToken = () => {
  const theme = useContext(ThemeContext)
  const isMobile = useMedia({ maxWidth: 500 })
  return (
    <>
         <Page>
        <BgContainer
          bgImage={bgImage}
          bgColor="#140937"
          size="cover"
          style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 100 }}
        >
          <Section>
            <PageTitle>$MGG Token</PageTitle>
            <img
              src={MGGLogo}
              style={{ maxWidth: '17rem', margin: '1rem auto' }}
              alt="MGG Logo"
            />
            <div style={{ maxWidth: '50rem', margin: '0 auto' }}>
              <Heading
                size={isMobile ? 'l' : 'lg'}
                style={{ margin: '1rem 0', textAlign: 'justify', textAlignLast: 'center', lineHeight: '2rem' }}
              >
                The $MGG token holds many utilities that generally fuel the overall MGG ecosystem.
                It is an ERC20 and BEP20 utility token designed to synergistically foster growth in
                the crypto space while distributing fair power and rewards among $MGG token holders.
              </Heading>
            </div>
          </Section>
        </BgContainer>

        <BgContainer bgColor="#140937" position="center bottom" style={{ flexFlow: 'column' }}>
          <TokenInfoContainer>
            <HoverCard>
              <Heading size="xl" color={theme.colors.primary}>
                $MGG
              </Heading>
              <Text>Ticker</Text>
            </HoverCard>

            <HoverCard>
              <Heading size="xl" color={theme.colors.primary}>
                1 BILLION
              </Heading>
              <Text>Total Supply</Text>
            </HoverCard>

            <HoverCard>
              <Heading size="xl" color={theme.colors.primary}>
                288,424,658
              </Heading>
              <Text>Circulating Supply</Text>
            </HoverCard>
          </TokenInfoContainer>

          <SectionContainer style={{ padding: '5rem 0' }}>
            <div style={{ flex: '1' }}>
              <Heading size="xl" color={theme.colors.primary}>
                What You Can Do with $MGG Token
              </Heading>
            </div>
            <div style={{ flex: '1', textAlign: 'right' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '20px',
                  justifyItems: 'center',
                  alignItems: 'end',
                }}
              >
                <div style={{ margin: '10px' }}>
                  <img src={GuildRwards} alt="Guild Rewards" width={125} />
                  <Text>Guild Rewards</Text>
                </div>

                <div style={{ margin: '10px' }}>
                  <img src={GameFiVault} alt="In-game Rewards" width={125} />
                  <Text>In-game Rewards</Text>
                </div>

                <div style={{ margin: '10px' }}>
                  <img src={LiquidityRewards} alt="Liquidity Rewards" width={125} />
                  <Text>Liquidity Rewards</Text>
                </div>

                <div style={{ margin: '10px' }}>
                  <img src={DAOG} alt="DAO Governance" width={125} />
                  <Text>DAO Governance</Text>
                </div>
              </div>
            </div>
          </SectionContainer>

        
            <Section style={{padding: '5rem 0 0 0'}}>
              <Heading size='xl' color={theme.colors.primary}>MGG Contract Address</Heading>
              <Flex style={{flexDirection: 'column', rowGap: '2.5rem', margin: '2rem 0 0 0'}}>
                <div>
                  <a target="_blank" href='https://etherscan.io/address/0x7237c0b30b1355f1b76355582f182f6f04b08740'>
                    <img src={`${EthLogo}`} style={{maxWidth: '12rem', margin: '1rem 0'}}></img>
                    <AdaptTxt>0x7237c0b30b1355f1b76355582f182f6f04b08740</AdaptTxt>
                    <Text color='#00f4fd'>Ethereum (ERC-20)</Text>
                  </a>
                </div>
                <div>
                  <a target="_blank" href='https://bscscan.com/address/0x6125adcab2f171bc70cfe2caecfec5509273a86a'>
                    <img src={`${BscLogo}`} style={{maxWidth: '12rem', margin: '1rem 0'}}></img>
                    <AdaptTxt>0x6125adcab2f171bc70cfe2caecfec5509273a86a</AdaptTxt>
                    <Text color='#00f4fd'>Binance Smart Chain (BEP-20)</Text>
                  </a>
                </div>
                {/* <div>
                  <a target="_blank" href='https://ftmscan.com/address/0xfda8355e8ce22ac44f2d175f4acfec8fac7472d7'>
                    <img src={`${FantomLogo}`} style={{maxWidth: '12rem', margin: '1rem 0'}}></img>
                    <AdaptTxt>0xfda8355e8ce22ac44f2d175f4acfec8fac7472d7</AdaptTxt>
                    <Text color='#00f4fd'>Fantom</Text>
                  </a>
                </div> */}
              </Flex>
            </Section>
            <Section style={{ padding: '5rem 0 0 0' }}>
            <Heading size='xl' color={theme.colors.primary}>BUY $MGG Token</Heading>
            <Flex style={{ flexFlow: 'row wrap', justifyContent: 'center', alignItems: 'center' }}>
              {
                Exchanges.map((exchange) => (
                  <LogoHighlightLink href={exchange.link} target='_blank' key={exchange.name}>
                    <img width='120px' src={exchange.image} alt='icon-exchange' />
                  </LogoHighlightLink>
                ))
              }
            </Flex>
          </Section>
          
        </BgContainer>
      </Page>
    </>
  )
}

export default MggToken