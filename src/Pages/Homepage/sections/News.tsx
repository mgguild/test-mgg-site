import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Button, Flex, Text } from "@metagg/mgg-uikit";
import { Grid } from "@mui/material";
import { breakpoints } from "theme/Breakpoints";
import { SvgProps } from "components/SvgIcon/types";
import { EcoContainer, GlowTitle, NewsContainer, PageTitle } from "./styled";
import { INews } from "config/constants/types";
import { News } from "config/constants/homepageConfig";
import * as IconModule from "./icons";
import MenuLink from "components/Menu/MenuLink";

// Container styles for responsive view
const Container = styled(Flex)`
  padding: 2rem 260px 50px 260px;
  flex-direction: column;
  text-align: center;
  margin: 0px auto;
  max-width: 1400px;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: ${breakpoints.Mobile.tablet}px) {
    padding: 1rem; // Adjusted padding for tablet view
  }

  @media screen and (max-width: 500px) {
    padding: 0; // Minimal padding for mobile view
  
  }
`;

// Create a custom button with a blue-to-white gradient
const GradientButton = styled(Button)`
  background: linear-gradient(to right, #0000ff, #00a0ff);
  color: #fff; // Adjusted text color for better contrast
  border-radius: 10px;
  &:hover {
    background: #e6e600;
  }

  @media screen and (max-width: ${breakpoints.Mobile.tablet}px) {
    font-size: 13px; // Adjust font size for tablet view
  }

  @media screen and (max-width: 500px) {
    font-size: 12px; // Adjust font size for mobile view
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
  justify-content: space-between; /* Space content evenly */
  align-items: center; /* Center all child elements horizontally */
  cursor: default;

  ${({ link }) =>
    link &&
    `
    cursor: pointer;
  `}

  @media screen and (max-width: ${breakpoints.Mobile.tablet}px) {
    height: 300px;
    padding: 16px;
  }

  @media screen and (max-width: 500px) {
    height: 380px;
    padding: 10px;
  }
`;

const CardSection = styled(Flex)`
  flex-grow: 1; /* Ensure this section grows to fill space */
  display: flex;
  flex-direction: column; /* Arrange items in a column */
  align-items: center; /* Center items horizontally */
  justify-content: center; /* Center items vertically within the available space */

  & > ${Text}.status {
    color: ${({ theme }) => theme.colors.MGG_accent1};
    margin: 0.5rem 0rem;
  }

  & > ${Text}.desc {
    color: ${({ theme }) => theme.colors.text};
    margin: 0px;
    text-align: center; /* Center the text content */
  }

  & > div.action {
    margin-top: auto; /* Push the action (button) to the bottom */
  }
`;

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const Card: React.FC<INews> = ({ image, name, description, link = "" }) => {
  const theme = useContext(ThemeContext);
  const Icon = Icons[image];
  const iconElement: React.ReactElement = <Icon />;
  return (
    <MenuLink href={link}>
      <StyledCard link={link !== ''}>
        {iconElement}
        <CardSection>
          <Text className="title" fontSize="1.2em" color="#00F4FD" paddingTop="2rem">
            {description}
          </Text>
          <div className="action">
            <GradientButton mt="16px">
              <Text color="white">Read More</Text>
            </GradientButton>
          </div>
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
      justifyContent="center" // Center content on all screen sizes
      alignItems="center"
      direction="row"
      wrap="wrap" // Allow wrapping for smaller screens
    >
      {News.map((Ecosystem) => {
        const { name, description, image, link } = Ecosystem;
        return (
          <Grid key={name} item xs={12} sm={6} md={4}>
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
    <NewsContainer height="100">
      <Container>
        <GlowTitle>
          <PageTitle size="xl">MGG NEWS AND UPDATE</PageTitle>
        </GlowTitle>
        <Cards />
      </Container>
    </NewsContainer>
  );
};

export default Section;
