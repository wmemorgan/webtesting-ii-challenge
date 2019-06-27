import React, { Component } from 'react';
import { EventEmitter } from './utils/events'

import AppContainer from './components/DesignComponents/AppStyles'
import Display from './components/ScoreBoardComponents/Display'
import Dashboard from './components/ScoreBoardComponents/Dashboard'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balls: 0,
      strikes: 0,
      fouls: 0,
      outs: 0,
      hits: 0,
      walks: 0
    }

    EventEmitter.subscribe('addBall', event => this.addBall(event))
    EventEmitter.subscribe('addStrike', event => this.addStrike(event))
    EventEmitter.subscribe('addFoul', event => this.addFoul(event))
    EventEmitter.subscribe('addHit', event => this.addHit(event))
  }

  addBall = () => {
    if (this.state.balls <= 3) {
      this.setState(prevState => (
        { balls: prevState.balls + 1 }
      ), () => console.log(this.state))
    } else {
      this.setState({
        balls: 0,
        strikes: 0,
        fouls: 0
      })
    }
  }

  addStrike = () => {
    if (this.state.strikes <= 2) {
      this.setState(prevState => (
        { strikes: prevState.strikes + 1 }
      ))
    } else {
      this.setState(prevState => (
        {
          balls: 0,
          strikes: 0,
          fouls: 0,
          outs: prevState.outs + 1
        }
      ))
    }
  }

  addFoul = () => {
    if (this.state.strikes < 2) {
      this.setState(prevState => (
        {
          strikes: prevState.strikes + 1,
          fouls: prevState.fouls + 1
        }
      ), () => console.log(this.state))
    } else {
      this.setState(prevState => (
        { fouls: prevState.fouls + 1 }
      ), () => console.log(this.state))
    }
  }

  addHit = () => {
    this.setState(prevState => (
      {
        balls: 0,
        strikes: 0,
        fouls: 0,
        hits: prevState.hits + 1
      }
    ))
  }

  componentDidUpdate() {
    if (this.state.balls === 4) {
      this.addBall()
    }
    if (this.state.strikes === 3) {
      this.addStrike()
    }

  }

  render() {
    return (
      <AppContainer>
        <Display {...this.state}/>
        <Dashboard />
      </AppContainer>
    )
  }
}

export default App;
