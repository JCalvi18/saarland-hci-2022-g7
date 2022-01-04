import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { routes } from '../App';


export function MenuBar() {

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'stretch',
        height: '100%',
        borderRadius: 16,
        overflow: 'hidden',
        gap: 4,
      }}
    >
      {/* <Button
        style={{ flex: 1 }}
        component={Link}
        to={`${routes.start}`}
        variant="contained"
        color="primary">
        Home
      </Button> */}
      <Button
        style={{ flex: 1 }}
        component={Link}
        to={`${routes.calendar}`}
        variant="contained"
        color="primary">
        Calendar
      </Button>
      <Button
        style={{ flex: 1 }}
        component={Link}
        to={`${routes.communities}`}
        variant="contained"
        color="primary">
        Communities
      </Button>
      <Button
        style={{ flex: 1 }}
        component={Link}
        to={`${routes.settings}`}
        variant="contained"
        color="primary">
        Settings
      </Button>
    </div>
  )
}
