import { Heading } from "@metagg/mgg-uikit";
import styled from "styled-components";
import BackgroundImage from "assets/background/GrowthBG.png";
import BGLanding from "assets/background/BGLanding.png";
import LandingLogo from "assets/background/LandingLogo.png";
// Sections

const SectionContainer = styled.div<{ height?: string }>`
  min-height: ${({ height }) => height ?? "100"}vh;
  display: flex;
  padding: 15px;
`;

export const HomeContainer = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.addOnColors.background1};
  background-image: url(${LandingLogo});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center top;
`;
export const EcoContainer = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.addOnColors.background2};
  padding: 24px;
`;

export const GrowthContainer = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.addOnColors.background1};

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 24px;
  flex-direction: column;
`;

export const ChainContainer = styled(SectionContainer)`
    background-color ${({theme}) => theme.addOnColors.background2};
`
// Components

export const PageTitle = styled(Heading)`
  color: ${({ theme }) => theme.colors.primary};
  margin: 30px 0px;
  letter-spacing: 1px;
`;

export const GlowTitle = styled(Heading)`
  border: 2px solid yellow; /* Yellow border */
  padding-left: 30px; /* Optional padding inside the border */
  padding-right: 30px;
  display: inline-block;
  box-shadow: 0 0 10px yellow; /* Glow effect */
  border-radius: 15px;
   margin-bottom: 20px; // Adjust the margin-bottom value as needed 
`;