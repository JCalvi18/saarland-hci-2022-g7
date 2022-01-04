import React, { useState } from 'react'
import { FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch, Tab, Tabs, TextField } from '@material-ui/core'
import ClosableDialog from './DialogClosable'
// import { Colors } from '../theme/types'
// import { DatePicker } from '@material-ui/pickers'


export function CalendarForm({
  open,
  onClose,
}: {
  open: boolean
  onClose: VoidFunction
}) {
  const [selectedTab, setSelectedTab] = useState(0)
  const [repeating, setRepeating] = useState('None')
  const [covidM, setCovidM] = useState('None')
  const [privateEvent, setPrivateEvent] = useState(true)

  return (
    <ClosableDialog
      open={open}
      onClose={onClose}
      style={{
        padding: '8px 32px',
        gap: 16,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 8,
        }}
      >
        <Tabs
          value={selectedTab}
          textColor='primary'
          indicatorColor='primary'
          onChange={(_, newValue) => setSelectedTab(newValue)}
          style={{ alignItems: 'center', justifyContent: 'center', }}
        >
          <Tab value={0} label='Task' />
          <Tab value={1} label='Event' />
        </Tabs>
      </div>
      <TextField
        label='Title'
      />

      <TextField
        label='Description'
      />

      <TextField
        id="datetime-local"
        label="Date"
        type="datetime-local"
        defaultValue="2022-01-05T10:30"
        InputLabelProps={{
          shrink: true,
        }}
      />
      {selectedTab > 0 &&
        <>
          <FormControlLabel
            control={
              <Switch
                checked={privateEvent}
                onChange={() => setPrivateEvent(!privateEvent)}
                name="checkedB"
                color="primary"
              />
            }
            label="Private"
          />

          <FormControl >
            <InputLabel >Repeating</InputLabel>
            <Select
              value={repeating}
              onChange={(event) => setRepeating(event.target.value as string)}
            >
              <MenuItem value={10}>None</MenuItem>
              <MenuItem value={20}>daily</MenuItem>
              <MenuItem value={30}>weekly</MenuItem>
            </Select>
          </FormControl>

          <FormControl >
            <InputLabel >Covid Measure</InputLabel>
            <Select
              value={covidM}
              onChange={(event) => setCovidM(event.target.value as string)}
            >
              <MenuItem value={10}>None</MenuItem>
              <MenuItem value={20}>2G</MenuItem>
              <MenuItem value={30}>2G+</MenuItem>
              <MenuItem value={40}>test</MenuItem>
            </Select>
          </FormControl>

          {!privateEvent &&
            <TextField
              label="Number of Participants"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />}
        </>
      }

    </ClosableDialog>
  )
}