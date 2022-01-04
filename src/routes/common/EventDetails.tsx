import React from 'react'

import dayjs from 'dayjs'
import { CalendarProp, CalendarType } from '../data'
import ClosableDialog from './DialogClosable'
import { Detail } from './Detail'
import { Button } from '@material-ui/core'

export function EventDetails({
  open,
  onClose,
  data,
  publicEvent = false,
}: {
  open: boolean
  onClose: VoidFunction
  data: CalendarProp
  publicEvent?: boolean
}) {
  return (
    <ClosableDialog
      open={open}
      onClose={onClose}
      style={{
        flex: 1,
        justifyContent: 'space-between',
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
          {publicEvent &&
            <>
              <Button
                style={{ padding: '16px 8px', borderRadius: 16, }}
                variant="contained"
                color="primary"
                onClick={onClose}
              >
                Add to Calendar
              </Button>

              <Button
                style={{ padding: '16px 8px', borderRadius: 16, }}
                variant="contained"
                color="primary"
                onClick={onClose}
              >
                Copy as private Event
              </Button>
            </>
          }
        </>
      }
    </ClosableDialog>
  )
}