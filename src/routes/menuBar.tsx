import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';
import { routes } from '../App';


export function MenuBar() {

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',

      }}
    >
      <Button component={Link} to={`${routes.start}`} variant="contained" color="primary">
        Home
      </Button>
      <Button component={Link} to={`${routes.calendar}`} variant="contained" color="primary">
        Calendar
      </Button>
      <Button component={Link} to={`${routes.communities}`} variant="contained" color="primary">
        Communities
      </Button>
      <Button component={Link} to={`${routes.settings}`} variant="contained" color="primary">
        Settings
      </Button>
    </div>
  )
}
