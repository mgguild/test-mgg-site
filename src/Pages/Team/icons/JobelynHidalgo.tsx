import React, { SVGAttributes, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import PNG from 'assets/teams/Jobelyn Ella A Hidalgo.png'
import { SvgProps } from 'components/SvgIcon/types'
import SvgIcon from 'components/SvgIcon/SvgIcon'

const Icon: React.FC<SvgProps> = (props) => {
  return <SvgIcon Img={PNG} width={props.width} />
}

export default Icon