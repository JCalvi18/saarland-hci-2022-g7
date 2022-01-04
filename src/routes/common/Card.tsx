import React, { CSSProperties, useState } from 'react'
import { Colors } from '../../theme/types'
import { CalendarProp, CalendarType } from '../data'
import dayjs from 'dayjs'
import { Checkbox, Typography } from '@material-ui/core'
import {
  Schedule as ScheduleIcon,
  Person as PersonIcon,
  Visibility as VisibilityIcon,
  Repeat as RepeatIcon,
  Assignment as AssignmentIcon,
  EmojiPeople as EmojiPeopleIcon,
} from '@material-ui/icons'

const typographyWithIcon: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8
}

export function HCICard({
  data,
  onEventSelect,
  showEventType = false,
}: {
  data: CalendarProp
  onEventSelect: VoidFunction
  showEventType?: boolean
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
        gridTemplateColumns: '2fr 1fr 1fr',
        gridTemplateRows: 'repeat(3,1fr)',
        gridTemplateAreas: `
          'date repeat typeName'
          'title  covid type'
          'body  participants type'
        `,
      }}
    >
      {showEventType &&
        <div style={{ gridArea: 'typeName', ...typographyWithIcon, justifySelf: 'flex-end' }}>
          {type === CalendarType.event
            ? <EmojiPeopleIcon />
            : <AssignmentIcon />
          }
          <Typography variant='body1'>
            {type === CalendarType.event ? 'Event' : 'Task'}
          </Typography>
        </div>}

      <div style={{ gridArea: 'date', ...typographyWithIcon }}>
        <ScheduleIcon />
        <Typography variant='body1'>
          {dayjs(date).format('HH:mm')}
        </Typography>
      </div>
      <Typography variant='h6' style={{ gridArea: 'title', fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography variant='body1' noWrap style={{ marginLeft: 4, gridArea: 'body', whiteSpace: 'pre-line' }}>
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
            <div style={{ gridArea: 'repeat', ...typographyWithIcon }}>
              <RepeatIcon />
              <Typography variant='body1' >
                {data.repeating}
              </Typography>
            </div>
          }
          <div style={{ gridArea: 'covid', ...typographyWithIcon }}>
            <VisibilityIcon />
            <Typography variant='body1' >
              {data.covidMeasure}
            </Typography>
          </div>
          {data.participants &&
            <div style={{ gridArea: 'participants', ...typographyWithIcon }}>
              <PersonIcon />
              <Typography variant='body1' >
                {data.participants}
              </Typography>
            </div>
          }
        </>
      }
    </div>
  )
}