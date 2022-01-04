import React, { PropsWithChildren, CSSProperties } from 'react'

import { Dialog, Divider, IconButton, Typography } from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'
import { Colors } from '../../theme/types'
import { useMobileBreakPoint } from './sizeHooks'


interface Props {
  open: boolean,
  onClose: VoidFunction,
  style?: CSSProperties
  paperStyle?: CSSProperties,
  fullScreen?: boolean
}
export default function ClosableDialog({
  open,
  onClose,
  children,
  style = {},
  paperStyle = {},
}: PropsWithChildren<Props>) {

  const mobileBreakpoint = useMobileBreakPoint()
  return (
    <Dialog
      fullScreen={mobileBreakpoint}
      open={open}
    // onClose={onClose}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          borderRadius: mobileBreakpoint ? 0 : 8,
          width: mobileBreakpoint ? undefined : 590,
          height: mobileBreakpoint ? undefined : 700,
          flex: mobileBreakpoint ? 1 : undefined,
          ...paperStyle,
        }}
      >
        <IconButton
          style={{
            alignSelf: 'flex-start'
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        <Divider />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            ...style,
          }}
        >
          {children}
        </div>
      </div>
    </Dialog >
  )
}
