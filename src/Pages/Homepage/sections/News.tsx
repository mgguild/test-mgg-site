import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Button, Flex, Text } from "@metagg/mgg-uikit";
import { Grid } from "@mui/material";
import { breakpoints } from "theme/Breakpoints";
import { SvgProps } from "components/SvgIcon/types";
import { EcoContainer, GlowTitle, PageTitle } from "./styled";
import { INews } from "config/constants/types";
import { News } from "config/constants/homepageConfig";
import * as IconModule from "./icons";
import MenuLink from "components/Menu/MenuLink";


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

// Create a custom button with a blue-to-white gradient
const GradientButton = styled(Button)`
  background: linear-gradient(to right, #0000ff, #00a0ff);
  color: #000;  // You can customize the text color if needed
  border-radius: 10px;
  &:hover {
    background: #e6e600;
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

const Card: React.FC<INews> = ({
  image,
  name,
  description,
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
        <Text className="title"  fontSize="1.2em" color="#00F4FD">
          {description}
        </Text>
        <GradientButton mt="16px">
          <Text color="white">Read More</Text> 
        </GradientButton>
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
      justifyContent="space-between"
      alignItems="center"
      direction="row"
      wrap="nowrap"
    >
      {News.map((Ecosystem) => {
        const { name, description, image, link } = Ecosystem;
        return (
          <Grid key={name} item xs={12} sm={12} md={6}>
            <Card
              name={name}
              description={description}
              image={image}
              link={link}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

const Section: React.FC = () => {
  return (
    
    <EcoContainer height="100">
      <Container>
        <GlowTitle><PageTitle size="xl" >MGG NEWS AND UPDATE</PageTitle></GlowTitle>
        <Cards />
      </Container>
    </EcoContainer>
  );
};

export default Section;
