import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/shared/Header'
import Footer from './components/shared/Footer'

import Home from './screen/Home'
import Teams from './screen/Teams'
import Team from './components/teamsComponents/Team'


const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/teams/:id" component={Team} exact />
      <Route path="/teams" component={Teams} exact />
      <Route path="/" component={Home} exact />
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default Routes