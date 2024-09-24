import React, { SVGAttributes, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import PNG from 'assets/teams/Morris Perico.png'
import { SvgProps } from 'components/SvgIcon/types'
import SvgIcon from 'components/SvgIcon/SvgIcon'

const Icon: React.FC<SvgProps> = (props) => {
  return <SvgIcon Img={PNG} width={props.width} />
}

export default Icon