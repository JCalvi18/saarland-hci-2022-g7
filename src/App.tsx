import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './routes/home'
import './index.css'
import { MenuBar } from './routes/menuBar'
import { Colors } from './theme/types'
import { CalendarPage } from './routes/calendar'
import { CommunityPage } from './routes/community'
import { SettingsPage } from './routes/settings'
interface AppProps { }

export const routes = {
  start: '',
  calendar: 'calendar',
  communities: 'communities',
  settings: 'settings',
}


function App({ }: AppProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'stretch',
        margin: '0px auto',
        height: '100vh',
        maxWidth: '70vh'
      }}
    >
      <div
        style={{
          backgroundColor: Colors.cyan,
          flex: 10,
          width: '100%'
        }}
      >
        <Routes>
          <Route path={`/`} element={<HomePage />} />
          <Route path={`/${routes.calendar}`} element={<CalendarPage />} />
          <Route path={`/${routes.communities}`} element={<CommunityPage />} />
          <Route path={`/${routes.settings}`} element={<SettingsPage />} />
        </Routes>
      </div>
      <div
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: Colors.purpleLight,
        }}
      >
        <MenuBar />
      </div>
    </div>
  );
}

export default App;
