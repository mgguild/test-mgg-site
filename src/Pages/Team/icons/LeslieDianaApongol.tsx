import React from 'react'
import PNG from 'assets/teams/Leslie Diana Apongol.png'

const Icon: React.FC<{ width?: string | number }> = ({ width }) => {
  return <img src={PNG} width={width} alt="Icon" />
}

export default Icon
