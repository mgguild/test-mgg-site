import React, { useContext, useState } from 'react'
import { Text, Flex, Heading, Button } from '@metagg/mgg-uikit'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'
import styled, { ThemeContext } from 'styled-components'
import PageContainer from 'components/layout/Page'
import { BgContainer } from '../../style/Global'
import {
  Card,
  Btn,
  Icons,
  IconHolder,
  PageTitle,
  Section,
} from './styled'
import bgImage from 'assets/background/revTokenBG.png'
import PDF from 'assets/whitepaper/MGG White Paper-FINAL.pdf'
import whitepaper from '../../config/constants/whitepaper'

const MggToken = () => {
  const theme = useContext(ThemeContext)

  return (
    <>
      <PageContainer>

        <BgContainer  bgColor='#140937' size='cover' style={{alignItems: 'center', justifyContent: 'center'}}>
          <Section style={{margin: '0 0rem 0 0', paddingTop: '9rem'}}>
          <PageTitle style={{margin: '0 0rem 0 0'}} size='xxl' color={theme.colors.primary} >White Paper</PageTitle>
            <div style={{position: 'relative', zIndex: 1, width: '100%', maxWidth: '50rem'}}>
              <ImageGallery items={whitepaper} showPlayButton={false} thumbnailPosition='right' lazyLoad={true} />
              <a target='_blank' href={PDF} download>
                <Btn style={{margin: '1rem 4.5rem 0 0'}}>Download PDF</Btn>
              </a>
            </div>
          </Section>
        </BgContainer>

      </PageContainer>
    </>
  )
}

export default MggToken