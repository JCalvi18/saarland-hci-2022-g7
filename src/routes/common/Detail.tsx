import React, { ReactElement, useState } from 'react'
import { Typography } from '@material-ui/core'
import { Colors } from '../../theme/types'
import { map } from 'lodash'

interface DetailProps {
  label: string
  value?: string
  style?: React.CSSProperties
}
export function Detail({ label, value, style }: DetailProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 4,
        whiteSpace: 'normal',
        ...style
      }}
    >
      <Typography variant='subtitle2' style={{ color: Colors.black }}>
        {label}
      </Typography>
      <Typography variant='body2' style={{ color: Colors.black }}>
        {(value && value.length > 0) ? value : '-'}
      </Typography>
    </div>
  )
}


interface DetailsProps {
  label: string
  values: string[]
  style?: React.CSSProperties
}
export function Details({ label, values, style }: DetailsProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 8,
        ...style
      }}
    >
      <Typography variant='subtitle2' style={{ color: Colors.black }}>
        {label}
      </Typography>
      {map(values, (value, index) =>
        <Typography
          key={`${value}#${index}`}
          variant='body2'
          style={{ color: Colors.black }}>
          {value}
        </Typography>)}
    </div>
  )
}