import React, { FC } from 'react'
import { ToastContainer } from 'react-toastify'
import { Offline } from 'react-detect-offline'

import Grid from '../../../components/Layout/Grid/Grid.component'
import RouteConfig from '../../../routeConfig/RouteConfig'

import 'react-toastify/dist/ReactToastify.css'

const Main: FC = () => {
  return (
    <Grid data-test="main-container">
      <Offline data-test="offline-banner-container">
        <Grid className="offline-wrapper-overlay">
          <Grid className="offline-wrapper-banner">
            You're offline right now. Check your connection.
          </Grid>
        </Grid>
      </Offline>
      <RouteConfig data-test="route-config-component" />
      <ToastContainer data-test="toast-component" />
    </Grid>
  )
}

export default Main
