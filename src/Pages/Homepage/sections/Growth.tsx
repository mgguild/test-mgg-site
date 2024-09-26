import React from "react";
import styled from "styled-components";
import { Text, Heading, Flex } from "@metagg/mgg-uikit";
import { Grid } from "@mui/material";
import { GlowTitle, GrowthContainer, PageTitle } from "./styled";
import { Figures } from "../../../config/constants/homepageConfig";


const Container = styled.div`
  margin: 30px auto;
  display: flex;
  padding: 25px;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;

const FigureWrapper = styled.div`
  padding: 1rem;
`;

const GridAdapt = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: no-wrap;
  gap: 1rem;
`;

const FigureGridItem = styled.div`
  border: 2px solid blue;
  padding: 1rem;
  width: 100%; /* Make the width consistent */
  max-width: 30rem;
  min-height: 200px; /* Set a minimum height to keep borders equal */
  border-radius: 15px; /* Curved edges */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: color 0.3s ease, background-color 0.3s ease;
  &:hover {
    background-color: #000058;  // Example background color on hover
    color: #007bff;             // Example text color on hover
  }
`;

const FigureComponent = () => {
  return (
    <FigureWrapper>
      <GridAdapt>
        {Figures.map((figure) => (
          <FigureGridItem key={figure.subtitle}>
            <Heading size="xl">{figure.amount}</Heading>
            <Text className="subtitle" fontSize="1.5em">
              {figure.subtitle}
            </Text>
          </FigureGridItem>
        ))}
      </GridAdapt>
    </FigureWrapper>
  );
};


const Section: React.FC = () => {
  return (
    <GrowthContainer height='50'>
        <div style={{textAlign: 'center'}}>
        <GlowTitle><PageTitle size="xl">METAGAMING GUILD GROWTH FIGURES</PageTitle></GlowTitle>
          <Text fontSize="1.2em" marginTop={4}>
            Since the project was launched in 2021, MetaGaming Guild has
            maintaned a 50% Month-on-Month growth
          </Text>
        </div>
      <Container style={{padding: '0'}}>
        <FigureComponent />
      </Container>
    </GrowthContainer>
  );
};

export default Section;
