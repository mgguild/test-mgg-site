import React, { useState, useContext, useCallback } from 'react'
import { Text, Flex, Heading, Button } from '@metagg/mgg-uikit'
import styled, { ThemeContext } from 'styled-components'
import Page from 'components/layout/Page'
import Utilities from './Utilities'
import Timer from './Timer'
import nftbg from '../../assets/Nft/nftbg.png'
import Nfts from '../../assets/Nft/0.png'
import NftsGif from '../../assets/Nft/NFT.gif'
import {
  BgPage,
  HeadingGlow,
  Card,
  Btn,
  InformativeButton
} from './styled'


const BadgesContainer = styled(Flex)`
  flex-flow: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url(${nftbg});
    background-repeat: no-repeat;
    // background-position: center;
    background-size: cover;
  }
  @media screen and (max-width: 1000px) {
    flex-flow: column;
  }
`

const BadgesDesc = styled.div`
  max-width: 35rem;
  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`

const DescText = styled.div`
 text-align: center;
 @media screen and (max-width: 1000px) {
    text-align: center;
  }
`

const InfoSection = styled(Flex)`
`

const NFTpage = () => {
  const theme = useContext(ThemeContext)

  return (
    <>
      <Page>
        <BgPage padding='0'>
          <div style={{position: 'relative', zIndex: 2}}>
            <BadgesContainer className='pad-5rem'>
              <BadgesDesc>
                <DescText>
                  <HeadingGlow size='xl' color='#fdda00' glow="#fdda00">MINT IS LIVE!</HeadingGlow>
                  <br />
                  <br />
                  <Heading size='lg' color={theme.colors.MGG_accent2}>Limited edition MetaGaming Guild PFP NFTs</Heading>
                  <br />
                  <br />
                  <Text>The opportunity to own the first PFP NFTs in MetaGaming Guild has arrived!</Text>
                  <br />
                  <br />
                  <Text  color='textSubtle'>MetaGaming NFTs are rare collectible PFP NFTs in the MetaGaming Guild ecosystem. A total of 5,000 individually designed NFTs will be up for grabs on August 2022.</Text>
                </DescText>

              
              </BadgesDesc>
              <InfoSection   alignItems='center' justifyContent='center' margin='1rem 0 0 0'>
                    <InformativeButton background='#012c07' borderColor='#054824'>Allowlist - 0.07E</InformativeButton>
                    <InformativeButton background='#2d2b02' borderColor='#515022'>Waitlist - 0.09E</InformativeButton>
                    <InformativeButton background='#2d0102' borderColor='#73102f'>General Public - 0.09E</InformativeButton>
                </InfoSection>

                {/* <Btn disabled style={{margin: '3rem 0 0 0'}}>BUY A LIMITED EDITION MGG NFT</Btn> */}
                <Btn style={{margin: '3rem 0 0 0'}}>MINT</Btn>
              {/* <Flex>
                <div>
                <img style={{display: 'block', width: 'auto', height: 'auto', maxHeight: '35rem'}} src={Nfts}/>
                </div>
              </Flex> */}
            </BadgesContainer>
            <Utilities />
            <div style={{margin: '5rem 0 0 0'}} className='pad-5rem'>
              <HeadingGlow size='xl' color='#fdda00' glow="#fdda00">Flex and Show Off Your MGG NFTs!</HeadingGlow>
              <br />
              <br />
              <Heading size='l'>Each of these MetaGaming NFTs holds digital rarity, exclusive privileges and special utilities that can maximize your benefits in the MetaGaming Guild ecosystem.</Heading>
              <br />
              <br />
              {/* <Text>What's in it for you: special ranks; exclusive offers & discounts; privileged access; bonus unlocks; redemption values and MORE!</Text> */}
              <Flex style={{justifyContent: 'center'}}>
                <div>
                  <img style={{display: 'block', width: 'auto', height: 'auto', maxHeight: '20rem'}} src={NftsGif}/>
                </div>
              </Flex>

              <Card>
                <Flex style={{flexFlow: 'row wrap', columnGap: '2rem', justifyContent: 'space-evenly'}}>
                  <div>
                    <HeadingGlow size='xl' glow="#fdda00" color={theme.colors.primary}>5,000</HeadingGlow>
                    <Text>Total Supply</Text>
                  </div>
                  <div style={{minWidth: '5rem'}}>
                    <HeadingGlow size='xl' glow="#fdda00" color={theme.colors.primary}>TBA</HeadingGlow>
                    <Text>Available NFTs</Text>
                  </div>
                  <div>
                    <HeadingGlow size='xl' glow="#fdda00" color={theme.colors.primary}>TBA</HeadingGlow>
                    <Text>Price</Text>
                  </div>
                </Flex>
              </Card>
              <br />
              <Text>The number of PFP NFTs is fixed at 5,000 and purchase will only be available in 2022</Text>
              <br />
              <Heading>Hurry! Don't miss your chance to own a LIMITED EDITION MetaGaming NFT!</Heading>

              {/* <Btn disabled style={{margin: '3rem 0 5rem 0', padding: '2rem 5rem'}}>GO GET ONE! <Text style={{padding: '0 0 0.5rem 0'}}>&nbsp;👉</Text></Btn> */}
              <Btn style={{margin: '3rem 0 5rem 0', padding: '1rem 0rem'}}>August 22, 2022 1:00 PM UTC</Btn>

              <Card>
                <div style={{padding: '1rem'}}>
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 5fr', gap: '2rem', textAlign: 'left'}}>
                    <Heading size='l' color={theme.colors.MGG_accent2}>Contact Address</Heading>
                    <Text>To be added</Text>

                    <Heading size='l' color={theme.colors.MGG_accent2}>Token ID</Heading>
                    <Text>To be added</Text>

                    <Heading size='l' color={theme.colors.MGG_accent2}>Blockchain</Heading>
                    <Text>Ethereum</Text>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </BgPage>
      </Page>
    </>
  )
}

export default NFTpage
