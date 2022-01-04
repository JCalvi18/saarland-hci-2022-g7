import React, { useState } from 'react'
import { Colors } from '../../theme/types'
import { CalendarProp, CalendarType } from '../data'
import dayjs from 'dayjs'
import { Checkbox, Typography } from '@material-ui/core'

export function HCICard({
  data,
  onEventSelect,
}: {
  data: CalendarProp
  onEventSelect: VoidFunction
}) {

  const [check, setCheck] = useState(false)
  const [hovered, setHovered] = useState(false)

  const {
    type,
    date,
    title,
    body,
  } = data

  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => type === CalendarType.event ? onEventSelect() : null}
      style={{
        display: 'grid',
        cursor: type === CalendarType.event ? 'pointer' : undefined,
        placeItems: 'start',
        padding: 16,
        marginLeft: 24,
        boxShadow: hovered ? `0px 6px 6px ${Colors.green}` : undefined,
        backgroundColor: Colors.white,
        borderRadius: 24,
        gridTemplateColumns: 'minmax(2fr) minmax(1fr) minmax(1fr)',
        gridTemplateRows: 'repeat(3,1fr)',
        gridTemplateAreas: `
          'date repeat type'
          'title  covid type'
          'body  participants type'
        `,
      }}
    >
      <Typography variant='body1' style={{ gridArea: 'date' }}>
        {dayjs(date).format('HH:mm')}
      </Typography>
      <Typography variant='subtitle1' style={{ gridArea: 'title' }}>
        {title}
      </Typography>
      <Typography variant='body1' noWrap style={{ gridArea: 'body' }}>
        {body}
      </Typography>

      {
        type === CalendarType.task &&
        <Checkbox
          value={check}
          onChange={() => setCheck(!check)}
          color='primary'
          style={{
            gridArea: 'type',
            alignSelf: 'center',
            justifySelf: 'flex-end',
          }}
        />
      }

      {type === CalendarType.event &&
        <>
          {data.repeating &&
            <Typography variant='body1' style={{ gridArea: 'repeat' }}>
              {data.repeating}
            </Typography>
          }
          <Typography variant='body1' style={{ gridArea: 'covid' }}>
            {data.covidMeasure}
          </Typography>
          {data.participants &&
            <Typography variant='body1' style={{ gridArea: 'participants' }}>
              {data.participants}
            </Typography>
          }
        </>
      }
    </div>
  )
}