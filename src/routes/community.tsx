import React, { useState } from 'react'
import { Colors } from '../theme/types'
import {
  Search as SearchIcon,
  Add as AddIcon,
} from '@material-ui/icons'
import { chain, map } from 'lodash'
import { communityData, AEvent } from './data'
import dayjs from 'dayjs'
import { Box, IconButton, TextField, Typography } from '@material-ui/core'
import { CalendarForm } from './common/calendarForm'
import { EventDetails } from './common/EventDetails'
import { HCICard } from './common/Card'

export function CommunityPage() {
  const [selectedEvent, setSelectedEvent] = useState<AEvent | undefined>(undefined)
  const [openForm, setFormOpen] = useState<boolean>(false)

  const orderedDate = chain(communityData)
    .orderBy([entry => entry.date], ['asc'])
    .groupBy((entry) => dayjs(entry.date).format('YYYY-MM-DD'))
    .value()
  console.log(orderedDate)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: '32px 0px 8px',
        backgroundColor: Colors.blueLight,
        gap: 4,
      }}
    >

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 16,
        }}
      >
        <Typography variant='h4' >
          Community
        </Typography>
        <Box sx={{
          display: 'flex',
          alignSelf: 'center',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>

          <SearchIcon />
          <TextField color='primary' label='Search' variant='standard' />
        </Box>
      </div>
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
              backgroundColor: Colors.greenLight,
              padding: '16px 8px',
              borderRadius: 16,
            }} >
              {dayjs(key).format('dddd DD.MM.YYYY')}
            </Typography>
            {
              map(value, (entry, i) =>
                <HCICard
                  key={`${entry}-${i}`}
                  data={entry}
                  onEventSelect={() => setSelectedEvent(entry)}
                />
              )
            }
          </>
        )}
      </div>
      {selectedEvent &&
        <EventDetails
          open={!!selectedEvent}
          onClose={() => setSelectedEvent(undefined)}
          data={selectedEvent}
          publicEvent
        />}

    </div>
  )
}
