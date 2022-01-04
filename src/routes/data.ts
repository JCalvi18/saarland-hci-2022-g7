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

export abstract class AEvent extends ACalendar {
  type = CalendarType.event as const
  repeating?: 'daily' | 'weekly'
  covidMeasure?: '2G' | '2G+' | 'test' | 'online'
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
    repeating: 'daily',
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
    covidMeasure: 'online',
  }
]


export const communityData: AEvent[] = [
  {
    type: CalendarType.event,
    date: '2022-01-05T12:00:00.787Z',
    title: 'HCI Q&A',
    body: 'Meeting at Teams',
    repeating: 'weekly',
    covidMeasure: 'online',
    participants: 15,
  }, {
    type: CalendarType.event,
    date: '2022-01-06T20:00:00.787Z',
    title: 'Saar Kino',
    body: 'Movie night',
    repeating: 'weekly',
    covidMeasure: 'online',
  }, {
    type: CalendarType.event,
    date: '2022-01-07T21:30:00.787Z',
    title: 'Reggae Party',
    body: 'Mainstrasse 66001',
    covidMeasure: '2G+',
    participants: 10,
  }, {
    type: CalendarType.event,
    date: '2022-01-07T12:00:00.787Z',
    title: 'Tame Impala Concert',
    body: 'Secret place in paris',
    covidMeasure: '2G+',
    participants: 65,
  }, {
    type: CalendarType.event,
    date: '2022-02-14T10:00:00.787Z',
    title: 'HCI exam',
    body: 'Final Exam at university Campus',
    covidMeasure: '2G+',
    participants: 30,
  }, {
    type: CalendarType.event,
    date: '2022-01-15T20:00:00.787Z',
    title: 'HCI post exam party',
    body: 'Party with proffesor and tutors',
    covidMeasure: 'online',
  }, {
    type: CalendarType.event,
    date: '2022-04-01T16:00:00.787Z',
    title: 'Summer semester 2022',
    body: 'Sarland University welcome event',
    covidMeasure: 'online',
  }
]
