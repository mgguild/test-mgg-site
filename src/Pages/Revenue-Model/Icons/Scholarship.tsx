import React from 'react'
import { ThemeContext } from 'styled-components'
import PNG from 'assets/revenue-model/RM_PnE.png'
import { SvgProps } from 'components/SvgIcon/types'
import SvgIcon from 'components/SvgIcon/SvgIcon'

const Icon: React.FC<SvgProps> = (props) => {
  return <SvgIcon Img={PNG} />
}

export default Icon