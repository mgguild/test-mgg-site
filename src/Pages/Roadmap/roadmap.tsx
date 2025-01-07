import React, { useState, useContext, useCallback } from 'react'
import { Text, Flex, Heading } from '@metagg/mgg-uikit'
import styled, { ThemeContext } from 'styled-components'
import Page from 'components/layout/Page'
import { NavOption } from '../../style/Global'
import roadmaps from '../../config/constants/roadmaps'
import { NavOptionContainer } from "style/Global"
import {
  BgPage,
  HeadingGlow,
  RdmapCards,
  Line,
  RTitle,
  Card,
  CardContainer,
  RdmapList,
  List,
  CheckList
} from './styled'


const Roadmap = () => {
  const [active, setActive] = useState(Object.keys(roadmaps).length)
  const [getYear, setYear] = useState(roadmaps[Object.keys(roadmaps).pop() ?? 0])

  return (
    <>
      <Page>
        <BgPage>
          <div style={{position: 'relative', zIndex: 2, paddingTop: 100,}}>
            <HeadingGlow size='xxl' color='#fdda00' >ROADMAP</HeadingGlow>
            <NavOptionContainer
              alignItems="center"
              margin="2.5rem 0px 2rem 0px"
              padding="0 0 1rem 0"
              maxScreen="423px"
            >
              <NavOption
                  key='all'
                  style={{borderRadius: '0.5rem', padding: '0 2rem'}}
                  onClick={() => {setActive(0)}}
                  activeIndex={active === 0}
                >
                All
              </NavOption>
              {Object.keys(roadmaps).map((year, index) => (
                <NavOption
                  key={year}
                  style={{borderRadius: '0.5rem', padding: '0 2rem'}}
                  onClick={() => {setActive(index + 1); setYear(roadmaps[year])}}
                  activeIndex={active === index + 1}
                >
                {year}
              </NavOption>
              ))}
            </NavOptionContainer>


            {active !== 0 ?
              <RdmapCards>
                {Object.keys(getYear).map((quarter) => (
                  <CardContainer key={quarter}>
                    {/* {quarter !== 'Q4' && <Line />} */}
                    <Card>
                      <RTitle size='xl' color='#00f4fd'>{quarter}</RTitle>
                     <RTitle size='xl' color='#00f4fd'></RTitle>
                      <RdmapList>
                        {getYear[quarter].map((list:any, ind: number) => (<div key={ind}>{list.check ? <CheckList>{list.txt}</CheckList> : <List>{list.txt}</List>}</div>))}
                      </RdmapList>
                    </Card>
                  </CardContainer>
                ))}
              </RdmapCards>
              :
              <div>
                {Object.keys(roadmaps).map((year) => (
                  <div style={{margin: '0 0 2rem 0'}} key={year}>
                    {/* <Heading size='xl'>{year}</Heading> */}
                    <RdmapCards>
                      {Object.keys(roadmaps[year]).map((quarter) => (
                        <CardContainer key={quarter}>
                          {/* {quarter !== 'Q4' && <Line />} */}
                          <Card>
                            <RTitle size='xl' color='#00f4fd'>{quarter}</RTitle>
                            <RTitle size='xl' color='#00f4fd'></RTitle>
                            <RdmapList>
                              {roadmaps[year][quarter].map((list: any, ind: number) => (<div key={ind}>{list.check ? <CheckList>{list.txt}</CheckList> : <List>{list.txt}</List>}</div>))}
                            </RdmapList>
                          </Card>
                        </CardContainer>
                      ))}
                    </RdmapCards>
                  </div>
                ))}
              </div>
            }

          </div>
        </BgPage>
      </Page>
    </>
  )
}

export default Roadmap
