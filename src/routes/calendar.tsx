import React, { useState } from 'react'
import { Colors } from '../theme/types'
import {
  Search as SearchIcon,
  Add as AddIcon,
} from '@material-ui/icons'
import { chain, map } from 'lodash'
import { calendarData, CalendarProp, CalendarType } from './data'
import dayjs from 'dayjs'
import ClosableDialog from './common/DialogClosable'
import { Detail } from './common/Detail'
import { Box, Checkbox, IconButton, TextField, Typography } from '@material-ui/core'
import { CalendarForm } from './common/calendarForm'

export function CalendarPage() {
  const [selectedEvent, setSelectedEvent] = useState<CalendarProp | undefined>(undefined)
  const [openForm, setFormOpen] = useState<boolean>(false)

  const orderedDate = chain(calendarData)
    .orderBy([entry => entry.date], ['asc'])
    .groupBy((entry) => dayjs(entry.date).format('YYYY-MM-DD'))
    .value()
  console.log(orderedDate)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        padding: '8px 0px',
        backgroundColor: Colors.gray2,
        gap: 24,
      }}
    >

      <Box sx={{
        display: 'flex',
        alignSelf: 'center',
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
        {Object.entries(orderedDate).map(([key, value]) =>
          <>
            <Typography style={{
              backgroundColor: Colors.purpleLight,
              padding: '16px 8px',
              borderRadius: 16,
            }} >
              {dayjs(key).format('dddd DD.MM.YYYY')}
            </Typography>
            {
              map(value, (entry, i) =>
                <Card
                  key={`${entry}-${i}`}
                  data={entry}
                  onEventSelect={() => setSelectedEvent(entry)}
                />
              )
            }
          </>
        )}
      </div>
      <IconButton
        style={{
          position: 'absolute',
          bottom: 150,
          backgroundColor: Colors.purple,
          alignSelf: 'flex-end',
          marginRight: 32,
        }}
        onClick={() => setFormOpen(true)}
      >
        <AddIcon />
      </IconButton>
      {selectedEvent &&
        <EventDetails
          open={!!selectedEvent}
          onClose={() => setSelectedEvent(undefined)}
          data={selectedEvent}
        />}
      <CalendarForm
        open={openForm}
        onClose={() => setFormOpen(false)}
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
          <Detail label='Title' value={data.title} />
          <Detail label='Description' value={data.body} />
          <Detail label='Date:' value={dayjs(data?.date).format(`DD-MM-YYYY`)} />
          <Detail label='Time:' value={dayjs(data?.date).format(`HH:mm`)} />
          <Detail label='Covid Measure:' value={data.covidMeasure} />
          {data?.repeating &&
            <Detail label='Reapeating Event:' value={data.repeating} />
          }
          {data?.participants ?? 0 > 0
            ? <Detail label='Number of Participants:' value={data.participants?.toString()} />
            : <Detail label='Event Type' value={'Private'} />
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
        marginLeft: 24,
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