import React from 'react'
import { Colors } from '../theme/types'
import { Typography } from '@material-ui/core'
import saarLogo from '../assets/logo.svg'

export function HomePage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: '32px 24px',
        backgroundColor: Colors.redLight,
        gap: 24,
      }}
    >
      <Typography variant='h3'>
        Human Computer Interface
      </Typography>
      <Typography variant='h4'>
        HIFI prototype
      </Typography>

      <Typography variant='subtitle1' align='center'>
        <div>Anna Kenter (2570778),</div>
        <div>Chengjiangrong Peng (7010944),</div>
        <div>Jorge Calvimontes (7024517)</div>
        <div>G701</div>
      </Typography>

      <img src={saarLogo} style={{ width: 200, objectFit: 'fill' }} />
    </div>
  )
}
