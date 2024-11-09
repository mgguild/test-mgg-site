import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Flex, Heading, Text } from '@metagg/mgg-uikit';
import styled, { ThemeContext } from 'styled-components';
import { BgPage, Btn, Card, HeadingGlow, InformativeButton } from './styled';
import useWeb3 from "../../hooks/useWeb3";
import { getBalanceAmount, getBalanceNumber, toBigNumber } from "../../utils/formatBalance";
import LogoRonin from '../../assets/images/Logo_Ronin.png';
import CarvIcon from '../../assets/images/Logo_Carv.png';
import DymIcon from '../../assets/images/Logo_Dymension.png';
import StakingImg from '../../assets/images/Staking.png';
import Page from 'components/layout/Page';

const TableDesc = styled.div`
  text-align: center;
  font-size: 1.2rem;

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const TableDesc2 = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: white;

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const DescText = styled.div`
  margin-top: 0.5rem;
  font-size: 1.2rem;
  color: white;

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

const InfoSection = styled(Flex)`
  margin-top: 1.5rem;
  font-size: 1rem;
  color: white;
  text-align: justify;

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    font-size: 0.9rem;
    text-align: left; /* Align text left for mobile */
  }
`;

const TableRow = styled(Flex)`
  padding: 1rem;
  border: 1px solid #1E90FF;
  border-radius: 8px;
  background-color: #0c0f2c;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 1rem;
  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
  &:hover {
    border-color: #DAF7A6; 
    box-shadow: 0 0 8px 2px #DAF7A6; /* Optional shadow effect for highlight */
  }
    
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 0.75rem; /* Adjust padding for smaller screens */
  }
`;

const TableRowContent = styled(Flex)`
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 1.5rem; /* Reduce gap for mobile */
  }
`;

const StakingCard = styled(Card)`
  padding: 2rem;
  text-align: center;
  border: 1px solid #1E90FF;
  background-color: #0c0f2c;
  width: 100%;
  max-width: 400px;
  margin: 1rem;
  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
  
  &:hover {
    border-color: #DAF7A6; /* Change to highlight color on hover */
    box-shadow: 0 0 8px 2px #DAF7A6; /* Optional shadow effect for highlight */
  }

  @media screen and (max-width: 600px) {
    padding: 1.5rem; /* Adjust padding */
    margin: 0.5rem; /* Adjust margin */
    width: 100%; /* Ensure it takes full width */
  }
`;



async function fetchPriceData() {
  return {
    ronPrice: 1.42,
    ronTotalStake: '2,057,245 RON',
    ronApr: '11.07/9.88%',
  };
}

const Staking: React.FC = () => {
  const [totalStake, setTotalStake] = useState("TBA");
  const [apr, setApr] = useState("TBA");
  const [price, setPrice] = useState<string | number>("TBA");

  useEffect(() => {
    // Fetch the data when the component mounts
    fetchPriceData().then((data) => {
      setPrice(data.ronPrice);
      setTotalStake(data.ronTotalStake);
      setApr(data.ronApr);
    }).catch((error) => {
      console.error("Failed to fetch price data:", error);
    });
  }, []);

  return (
    <Page>
    <BgPage padding="0">
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ margin: '0rem 0', padding: window.innerWidth <= 768 ? '0rem' : '8rem', paddingTop: window.innerWidth <= 768 ? '5rem' : '8rem', }}>
          <div style={{ display: 'inline-flex', gap: '50px', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'left', alignContent: 'center' }}>
              <HeadingGlow size="xxl" color="#fdda00" glow="#fdda00" marginBottom= '1rem'>
                Earn Staking Rewards
              </HeadingGlow>
              <br />
              <DescText>Stake your RON, CARV, and earn rewards.</DescText>
            </div>
            <div style={{ margin: '10px' }}>
              <img src={StakingImg} alt="Guild Rewards" width={300} />
            </div>
          </div>

          <Flex flexDirection="column" alignItems="center" style={{ margin: '5rem 0 3rem 0rem' }}>
            <TableRow>
              <TableRowContent>
                <img src={LogoRonin} alt="RON" style={{ width: '50px', height: '50px' }} />
                <Heading size="xl" color="white">RON</Heading>
              </TableRowContent>
              <Flex
                    style={{
                      gap: window.innerWidth <= 768 ? '3rem' : '12rem', // Adjust gap for mobile view
                      color: '#FFD700',
                      paddingRight: window.innerWidth <= 768 ? '0rem' : '10rem', // Adjust paddingRight for mobile view
                      paddingTop: window.innerWidth <= 768 ? '3rem' : '0rem', 
                      alignItems: 'center',
                    }}
                  >
                <div style={{ display: 'flex', flexDirection: 'column', color: '#FFD700' }}>
                  <TableDesc color="#fdda00">Price:</TableDesc>
                  <TableDesc2>${price}</TableDesc2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', color: '#FFD700' }}> 
                  <TableDesc color="#fdda00">Total Stake:</TableDesc>
                  <TableDesc2>{totalStake}</TableDesc2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', color: '#FFD700' }}> 
                  <TableDesc color="#fdda00">APR:</TableDesc>
                  <TableDesc2>{apr}</TableDesc2>
                </div>
              </Flex>
            </TableRow>
          </Flex>

          <Flex justifyContent="center" flexWrap="wrap" style={{ gap: '1rem' }}>
            <StakingCard style={{ minHeight: '420px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={LogoRonin} alt="RONIN" style={{ width: '95px', height: '95px', marginBottom: '2rem' }} />
              <Heading size="l" color="cyan"marginTop={"1rem"}>RONIN</Heading>
              <InfoSection color="white" style={{ textAlign: 'justify' }}>
                Ronin Token is the native cryptocurrency of the Ronin blockchain, designed specifically for gaming and digital asset ownership.
              </InfoSection>
              <a href="https://app.roninchain.com/validator/0xea94e2f3f1b24214f9d9bfb5608084476f34d48a" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginTop: 'auto' }}>
                <InformativeButton style={{ marginTop: '2rem' }}>Stake</InformativeButton>
              </a>
            </StakingCard>
            <StakingCard style={{ minHeight: '420px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={CarvIcon} alt="CARV" style={{ width: '95px', height: '95px', marginBottom: '2rem' }} />
              <Heading size="l" color="cyan" marginTop={"1rem"}>CARV</Heading>
              <InfoSection color="white" style={{ textAlign: 'justify' }}>
                Carv Token is a utility cryptocurrency designed to enhance the Carv ecosystem, which focuses on decentralized social networking and user-generated content.
              </InfoSection>
              <a href="https://explorer.carv.io/verifiers" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginTop: 'auto' }}>
                <InformativeButton style={{ marginTop: '2rem' }}>Stake</InformativeButton>
              </a>
            </StakingCard>
          </Flex>
        </div>
      </div>
    </BgPage>
    </Page>
  );
};

export default Staking;
