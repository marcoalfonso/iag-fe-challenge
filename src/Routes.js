import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'


export const RoutesContainer = () => (
  <Switch>
    <Route path="/" exact component={Homepage} />
  </Switch>
)

const Routes = withRouter(RoutesContainer)

export default Routes
