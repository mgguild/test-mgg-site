import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Button, Flex, Text } from "@metagg/mgg-uikit";
import { Grid } from "@mui/material";
import { breakpoints } from "theme/Breakpoints";
import { SvgProps } from "components/SvgIcon/types";
import { EcoContainer, GlowTitle, PageTitle } from "./styled";
import { IEcosystems } from "config/constants/types";
import { Ecosystems } from "config/constants/homepageConfig";
import * as IconModule from "./icons";
import MenuLink from "components/Menu/MenuLink";
import TeaserVideo from "../../../assets/video/MGG_teaser_video.mp4"

const Container = styled(Flex)`
  padding: 2rem 260px 50px 260px;
  flex-direction: column;
  text-align: center;
  margin: 0px auto;
  max-width: 1400px;
  align-items: space-between;
  justify-content: space-evenly;

  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;
const StyledCard = styled.div<{ link?: boolean }>`
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.MGG_accent2};
  background-color: ${({ theme }) => theme.addOnColors.background1};
    border-radius: 15px;
  height: 400px;
  display: flex;
  flex-direction: column;
  cursor: default;
  // justify-content: space-around;
  ${({ link }) =>
    link &&
    `
  cursor: pointer;
  `}
  @media screen and (max-width: ${breakpoints.Mobile.tablet}px) {
    font-size: 12px;
  }
  & > * {
    margin: 0 0 1rem 0;
  }
`;
const CardSection = styled(Flex)`
  align-items: center;
  & > ${Text}.status {
    color: ${({ theme }) => theme.colors.MGG_accent1};
    margin: 0.5rem 0rem;
  }
  & > ${Text}.desc {
    color: ${({ theme }) => theme.colors.text};
    margin: 0px;
  }
  & > div.action {
    border: 1px solid red;
  }
`;

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const Card: React.FC<IEcosystems> = ({
  image,
  name,
  subtitle,
  description,
  status = "",
  link = "",
}) => {
  const theme = useContext(ThemeContext);
  const Icon = Icons[image];
  const iconElement: React.ReactElement = <Icon />;
  return (
    <MenuLink href={link}>
    <StyledCard link={link !== ''}>
      {iconElement}
      <CardSection flexDirection="column">
        <Text
          className="title"
          fontSize="1.5em"
          bold
          color={theme.colors.MGG_accent2}
        >
          ({name})
        </Text>

        <Text
          className="title"
          fontSize="1.2em"
          marginTop="-7px"
          color={theme.colors.MGG_accent2}
        >
          ({subtitle})
        </Text>
        <Text className="status" textTransform="uppercase" bold>
          {status && status}
        </Text>
        <Text className="desc" as="p" fontSize="0.9em" >
          {description}
        </Text>
      </CardSection>
    </StyledCard>
    </MenuLink>
  );
};

const Cards: React.FC = () => {
  return (
    <Grid
      container
      spacing={4}
      padding-top={3}
      justifyContent="center"
      alignItems="center"
    >
      {Ecosystems.map((Ecosystem) => {
        const { name, subtitle, description, status, image, link } = Ecosystem;
        return (
          <Grid key={name} item xs={12} sm={12} md={6}>
            <Card
              name={name}
              subtitle={subtitle}
              description={description}
              status={status}
              image={image}
              link={link}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

const DescriptionContainer = styled(Flex)`

    // margin-top: 30px;
    & > * {
        margin: 10px 0px;
    }
`

const Section: React.FC = () => {
  return (
    
    <EcoContainer height="100">
      <Container>
      <DescriptionContainer flexDirection='column' alignItems='space-around' padding='30px 20px'>
          <PageTitle size='xl'> About MetaGaming Guild </PageTitle>
               <Text as='p' fontSize='1.2em' >
                        MetaGaming Guild (MGG) is a unified DAO-based ecosystem of gaming guild, strategic investments, and blockchain validation aimed at democratizing game finance.
                    </Text>
               <Text fontSize='1.2em' >
                        Our vision is to become the most community-centric DAO in the GameFi metaverse, with a focus on empowering players, driving innovation, and support the future of GameFi.
                    </Text>
          </DescriptionContainer>
        <GlowTitle><PageTitle size="xl" >META GAMING GUILD ECOSYSTEMS</PageTitle></GlowTitle>
        <Cards />
      </Container>
    </EcoContainer>
  );
};

export default Section;
