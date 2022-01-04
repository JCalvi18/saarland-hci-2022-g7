import React, { PropsWithChildren, CSSProperties } from 'react'

import { Dialog, Divider, IconButton, Typography } from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'


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
  fullScreen = false,
}: PropsWithChildren<Props>) {


  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
    // onClose={onClose}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          borderRadius: fullScreen ? 0 : 8,
          width: fullScreen ? undefined : 590,
          height: fullScreen ? undefined : 700,
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
