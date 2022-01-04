import React, { useState } from 'react'
import { Colors } from '../theme/types'

import { Search as SearchIcon } from '@material-ui/icons'

import { map } from 'lodash'

import { calendarData, CalendarProp, CalendarType } from './data'
import dayjs from 'dayjs'

import ClosableDialog from './common/DialogClosable'
import { Detail } from './common/Detail'
import { Box, Checkbox, TextField, Typography } from '@material-ui/core'

export function CalendarPage() {

  const [selectedEvent, setSelectedEvent] = useState<number>(-1)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: '8px 0px',
        backgroundColor: Colors.gray2,
        gap: 24,
      }}
    >
      <Box sx={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}>
        <SearchIcon />
        <TextField color='primary' label='Search' variant='standard' />
      </Box>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          gap: 16,
          padding: 16
        }}
      >
        {
          map(calendarData, (entry, i) =>
            <Card
              data={entry}
              onEventSelect={() => setSelectedEvent(i)}
            />
          )
        }
      </div>
      <EventDetails
        open={selectedEvent >= 0}
        onClose={() => setSelectedEvent(-1)}
        data={selectedEvent >= 0 ? calendarData[selectedEvent] : calendarData[0]}
      />
    </div>
  )
}


function EventDetails({
  open,
  onClose,
  data,
}: {
  open: boolean
  onClose: VoidFunction
  data: CalendarProp

}) {
  return (
    <ClosableDialog
      open={open}
      onClose={onClose}
      style={{
        gap: 32,
        padding: '16px 32px'

      }}
    >
      {
        data.type === CalendarType.event &&
        <>
          <Detail label='Event' value={data.title} />
          <Detail label='Description' value={data.body} />
          <Detail label='Evento' value={data.title} />
          <Detail label='Date:' value={dayjs(data?.date).format(`DD-MM-YYYY`)} />
          <Detail label='Time:' value={dayjs(data?.date).format(`HH:mm`)} />
          <Detail label='Covid Measure:' value={data.covidMeasure} />
          {data?.repeating &&
            <Detail label='Reapeating Event:' value={data.repeating} />
          }
          {data?.participants &&
            <Detail label='Number of Participants:' value={data.participants?.toString()} />
          }
        </>
      }
    </ClosableDialog>
  )
}

function Card({
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
        boxShadow: hovered ? `0px 4px 4px ${Colors.purpleLight}` : undefined,
        backgroundColor: Colors.white,
        borderRadius: 24,
        gridTemplateColumns: '2fr 1fr 1fr',
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