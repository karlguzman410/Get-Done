import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from '@material-ui/core'

import HomePage from './pages/HomePage'
import MainHeader from './components/MainHeader'

import './App.css'

const App = () => {
  return (
    <Container className="App">
      <MainHeader />
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default App
