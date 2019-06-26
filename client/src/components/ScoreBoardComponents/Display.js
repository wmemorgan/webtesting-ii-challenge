import React, { Component } from 'react'
import { EventEmitter } from '../../utils/events'
import * as S from './ScoreboardStyles'

class Display extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balls: 0,
      strikes: 0,
      fouls: 0,
      outs: 0,
      walks: 0
    }

    EventEmitter.subscribe('addBall', event => this.addBall(event))
    EventEmitter.subscribe('addStrike', event => this.addStrike(event))
    EventEmitter.subscribe('addFoul', event => this.addFoul(event))
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
        { strikes: prevState.strikes + 1, 
          fouls: prevState.fouls + 1
        }
      ), () => console.log(this.state))
    } else {
      this.setState(prevState => (
        { fouls: prevState.fouls + 1 }
      ), () => console.log(this.state))
    }
  }

  componentDidMount() {

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
      <S.ScoreboardContainer>
        <h2>Scoreboard</h2>
        <S.StatContainer>
          <S.StatWrapper>
            <S.StatCategory>
              Balls
            </S.StatCategory>
            <S.StatDisplay>
              {this.state.balls}
            </S.StatDisplay>
          </S.StatWrapper>
          <S.StatWrapper>
            <S.StatCategory>
              Strikes
            </S.StatCategory>
            <S.StatDisplay>
              {this.state.strikes}
            </S.StatDisplay>
          </S.StatWrapper>
          <S.StatWrapper>
            <S.StatCategory>
              Outs
            </S.StatCategory>
            <S.StatDisplay>
              {this.state.outs}
            </S.StatDisplay>
          </S.StatWrapper>
        </S.StatContainer>
      </S.ScoreboardContainer>
    )
  }
}

export default Display