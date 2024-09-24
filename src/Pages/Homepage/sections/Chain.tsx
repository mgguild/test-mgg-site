import React from "react";
import styled from "styled-components";
import { Flex, Text } from "@metagg/mgg-uikit";
import { ChainContainer, PageTitle } from "./styled";
import BSC from "assets/logo/BSC.png";
import ETH from "assets/logo/ETH.png";
import FANTOM from "assets/logo/Fantom.png";
import MGGLogo from "assets/background/MGGLogo.png";
import MenuLink from "components/Menu/MenuLink";
import { Grid } from "@mui/material";
import useMedia from 'use-media'
import { Card, CardContainer } from "Pages/Partners/styled";
import BGGameFinanceDemocratized from "assets/background/BGGameFinanceDemocratized.png";

const SectionContainer = styled.div<{ height?: string }>`
  max-width: 100vw;
  display: flex;
  padding: 15px;
  background-image: url(${BGGameFinanceDemocratized}); /* Use the imported image */
  background-size: cover; /* Makes sure the image covers the container */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent image from repeating */
  ${({ height }) => height && `height: ${height};`}
  height: 90vh; /* Set a height if it's missing */

`;

const Container = styled.div`
  font-size: 12px;
  min-width: 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0px auto;
  padding: 25px;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 16px;
  }
  
`;
const StyledImg = styled.img`
  width: 300px;
  margin: 5px auto;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 350px;
    margin: 0px auto;
  }
`;

const Content = styled(Flex)`
  width: 100%;
  text-align: center;
`;

const chains = [
  {
    icon: BSC,
    link: "https://bscscan.com/address/0x6125adcab2f171bc70cfe2caecfec5509273a86a",
  },
  {
    icon: ETH,
    link: "https://etherscan.io/address/0x7237c0b30b1355f1b76355582f182f6f04b08740",
  },
  {
    icon: FANTOM,
    link: "https://ftmscan.com/address/0xfda8355e8ce22ac44f2d175f4acfec8fac7472d7",
  },
];

const Section: React.FC = () => {
  const isMobile = useMedia({ maxWidth: 550 })

  return (
    <SectionContainer>
      <Container>
        <Content
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
        >
          <PageTitle size="xl">Game Finance. Democratized.</PageTitle>
          <Text fontSize="1.3em">
            Users Get Real-time Cross-Chain Interoperability
          </Text>
        </Content>
        <Flex
          justifyContent="space-evenly"
          alignItems="center"
          style={{ width: "100%" }}
          flexWrap="wrap"
          margin="0em 0"
        >
          {chains.map((src) => (
            <MenuLink href={src.link} key={src.icon}>
              <StyledImg src={src.icon} alt="chain-icon" style={{ margin: '0 20px' }} />
            </MenuLink>
          ))}
        </Flex>
        
        {/* <Content flexDirection='column'>
          <Grid container margin='1em 0' style={{justifyContent: 'center'}}>
            <Grid item md={3} style={{width: '100%', margin: '1rem'}}>
              <Card>
                <Text fontSize="1.2em">MGG creates opportunities beyond scholarships.</Text>
              </Card>
            </Grid>
            <Grid item md={3} style={{width: '100%', margin: '1rem'}}>
              <Card>
                <Text fontSize="1.2em">MGG reinvents P2E gaming by introducing player-centric protocols.</Text>
              </Card>
            </Grid>
            <Grid item md={3} style={{width: '100%', margin: '1rem'}}>
              <Card>
                <Text fontSize="1.2em">
                  MGG introduced the first form of game yield farming for
                  blockchain games!
                </Text>
              </Card>
            </Grid>
            <Grid item md={3} style={{width: '100%', margin: '1rem'}}>
              <Card>
                <Text fontSize='1.2em'>
                  MGG is on a mission to formalize NFT gaming and build an
                  inclusive community of tactical gamers who actively
                  play-to-earn.
                </Text>
              </Card>
            </Grid>
            <Grid item md={3} style={{width: '100%', margin: '1rem'}}>
              <Card>
                <Text fontSize='1.2em'>
                  Enjoy P2E gaming, P2E training, yield farming and more with
                  MetaGaming Guild! We’d love for you to join us! 🎮
                </Text>
              </Card>
            </Grid>
          </Grid>

          </Content> 
        <Content flexDirection="column" margin="1em 0">
          <PageTitle size="xl">A Global GameFi Guild</PageTitle>
          <div style={{ textAlign: "center", margin: '1em 0' }}>
            <Text
              as="p"
              fontSize="1.5em"
            >
              Our gaming community is expanding to Asia, Europe, Africa and the rest of the world!
            </Text>
            <br />
            <Text
              as="p"
              fontSize="1.5em"
            >
              With our proven tactics, MGG has won the support of premier gaming partners and active global gamers making us very well-positioned to go dominate the GameFi industry!
            </Text>
            <br />
            <Text
              as="p"
              fontSize="1.5em"
            >
              What are you waiting for? Build strong allies with the tactical gamers at MGG today!
            </Text>

          </div>
          {/* <Text
            as="p"
            fontSize="1.5em"
          >
            Our gaming community is expanding to Asia, Europe, Africa and the
            rest of the world. With our proven tactics, MGG has won the support
            of premier gaming partners and active global gamers making us very
            well-positioned to go dominate the GameFi industry! What are you
            waiting for? Build strong allies with the tactical gamers at MGG
            today!
          </Text> 
        </Content>*/}
      </Container>
    </SectionContainer>
  );
};

export default Section;
