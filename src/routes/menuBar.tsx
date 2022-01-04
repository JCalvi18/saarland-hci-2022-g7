import React from 'react'
import { Button, Icon } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { routes } from '../App';
import {
  Home as HomeIcon,
  EventNote as CalendarIcon,
  EmojiPeople as CommunityIcon,
} from '@material-ui/icons';

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
      <Button
        style={{ flex: 1 }}
        component={Link}
        to={`${routes.start}`}
        variant="contained"
        color="primary">
        <HomeIcon style={{ fontSize: 40 }} />
      </Button>
      <Button
        style={{ flex: 1 }}
        component={Link}
        to={`${routes.calendar}`}
        variant="contained"
        color="primary">
        <CalendarIcon style={{ fontSize: 40 }} />
      </Button>
      <Button
        style={{ flex: 1 }}
        component={Link}
        to={`${routes.communities}`}
        variant="contained"
        color="primary">
        <CommunityIcon style={{ fontSize: 40 }} />
      </Button>
      {/* <Button
        style={{ flex: 1 }}
        component={Link}
        to={`${routes.settings}`}
        variant="contained"
        color="primary">
        Settings
      </Button> */}
    </div>
  )
}
