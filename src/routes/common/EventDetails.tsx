import React from 'react'

import dayjs from 'dayjs'
import { CalendarProp, CalendarType } from '../data'
import ClosableDialog from './DialogClosable'
import { Detail } from './Detail'

export function EventDetails({
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