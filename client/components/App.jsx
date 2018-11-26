import React from 'react'
import Main from './Main'
import { HashRouter as Router, Route } from 'react-router-dom'


class App extends React.Component {
  render() {
  return (

    <Router>
      <React.Fragment>
       <Route path='/' component={Main} />
      </React.Fragment>

     </Router>
  )}
}

export default App

