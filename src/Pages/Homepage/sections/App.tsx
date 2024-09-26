import React from "react";
import styled from "styled-components";
import { Text, Heading, Flex } from "@metagg/mgg-uikit";
import { Grid } from "@mui/material";
import { GlowTitle, GrowthContainer, PageTitle } from "./styled";
import { App } from "../../../config/constants/homepageConfig";


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
        {App.map((figure) => (
          <FigureGridItem key={figure.description}>
            <Text className="description" fontSize="1.5em" color="#00F4FD" bold>
              {figure.description}
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
        <GlowTitle><PageTitle size="xl">METAGAMING GUILD APP FEATURES</PageTitle></GlowTitle>
        </div>
      <Container style={{padding: '0'}}>
        <FigureComponent />
      </Container>
    </GrowthContainer>
  );
};

export default Section;
