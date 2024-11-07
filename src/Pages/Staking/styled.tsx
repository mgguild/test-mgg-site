import styled from 'styled-components'
import { Flex, Heading, Button } from '@metagg/mgg-uikit'
import BGimage from '../../assets/background/BGStaking1.png'

export const Card = styled.div`
  background-color: #0c012c;
  border: #008ffd 0.15rem solid;
  border-radius: 0.5rem;
  padding: 3rem;
  z-index: 3;
  margin: 1rem;
  text-align: center;
`

export const Btn = styled(Button)`
  border-radius: 2rem;
  width: 250px;
  background-color: rgb(0, 196, 204);
  color: black;
  
`

export const InformativeButton = styled(Button)`
  width: 150px;
  height: 45px;
  margin: 0.5rem 0;
  position: relative;
  padding: 1px;

  background-image: linear-gradient(blue, skyblue);
  border: none;
  border-radius: 4px;
  transition: box-shadow 0.3s ease-in-out, background-image 0.3s ease-in-out; /* Smooth transition for color */
  &:hover {
    background-image: linear-gradient( skyblue, blue); /* New gradient on hover */
  }
`;




export const CardContainer = styled.div`
  flex: 1;
  max-width: 26rem;
  min-width: 16rem;
  position: relative;
`

export const RdmapList = styled.ul`
  text-align: left;
  color: white;
  list-style-type: none;
  line-height: 1.5;
  font-weight: 400;
`

export const CheckList = styled.li`
  padding: 1rem 0 0 1rem;
  &:before{
    content: "✔";
    color: #06ff65;
    font-weight: bold;
    display: inline-block;
    width: 1rem;
    margin-left: -1rem;
  }
`

export const List = styled.li`
  padding: 1rem 0 0 1rem;
  &:before{
    content: "●";
    color: #fdda00;
    font-weight: bold;
    display: inline-block;
    width: 1rem;
    margin-left: -1rem;
  }
`

export const BgPage = styled.div<{padding?: string}>`
  padding: ${({padding}) => padding ? padding: '5rem 0'};
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  & .pad-5rem {
    padding: 3rem;
    @media screen and (max-width: 500px) {
      padding: 2rem 0;
    }
  }
  & .pad-10rem {
    padding: 10rem;
    @media screen and (max-width: 500px) {
      padding: 5rem 0;
    }
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-image: url(${BGimage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  @media screen and (max-width: 500px) {
    padding: 0.5rem;
  }
`


export const HeadingGlow = styled(Heading)<{ glow?: string }>`
  text-shadow: 0 0 0.5rem ${({ glow }) => (glow ??'#00f4fd')};
`
