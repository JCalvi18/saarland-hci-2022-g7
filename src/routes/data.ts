export enum CalendarType {
  event = 'event',
  task = 'task',
}

abstract class ACalendar {
  type?: CalendarType
  date?: string
  title?: string
  body?: string
}

abstract class ATask extends ACalendar {
  type = CalendarType.task as const
  fulfilled?: boolean
}

abstract class AEvent extends ACalendar {
  type = CalendarType.event as const
  repeating?: 'dayly' | 'weekly'
  covidMeasure?: '2G' | '2G+' | 'test'
  participants?: number
}

export type CalendarProp = AEvent | ATask

export const calendarData: CalendarProp[] = [
  {
    type: CalendarType.event,
    date: '2022-01-04T12:00:00.787Z',
    title: 'Ping pong',
    body: 'Course at the university campus',
    repeating: 'weekly',
    covidMeasure: '2G+',
    participants: 10,
  }, {
    type: CalendarType.task,
    date: '2022-01-03T10:00:00.787Z',
    title: 'Study HCI',
    body: 'Catch up with lecture 05',
    fulfilled: true,
  }, {
    type: CalendarType.event,
    date: '2022-01-05T10:00:00.787Z',
    title: 'Yoga at the park',
    body: 'Yoga course with Selina',
    repeating: 'weekly',
    covidMeasure: '2G',
    participants: 5,
  }, {
    type: CalendarType.task,
    date: '2022-01-04T14:00:00.787Z',
    title: 'Dentist',
    body: 'Attend dentist at mainsStrasse 6602',
    fulfilled: false,
  }, {
    type: CalendarType.event,
    date: '2022-01-04T12:00:00.787Z',
    title: 'GYM',
    body: 'FitX at ArndtStrasse',
    repeating: 'dayly',
    covidMeasure: 'test',
  }, {
    type: CalendarType.task,
    date: '2022-01-05T10:00:00.787Z',
    title: 'Submit HCI',
    body: 'Submmit Assignment 5',
    fulfilled: false,
  },
  {
    type: CalendarType.event,
    date: '2022-01-07T12:00:00.787Z',
    title: 'Tame Impala Concert',
    body: 'Secret place in paris',
    covidMeasure: '2G+',
  }
]

