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
        margin: '0px auto',
        height: '95vh',
        minWidth: 500,
        maxWidth: 800,
        gap: 8,
      }}
    >
      <div
        style={{
          backgroundColor: Colors.yellowDisabled,
          display: 'flex',
          flex: 10,
          borderRadius: 16,
          overflow: 'hidden',
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
        }}
      >
        <MenuBar />
      </div>
    </div>
  );
}

export default App;
