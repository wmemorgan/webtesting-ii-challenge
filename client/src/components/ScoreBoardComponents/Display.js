import React, { Component } from 'react'

import * as S from './ScoreboardStyles'

class Display extends Component {
  state = {
    balls: 0,
    strikes: 0,
    fouls: 0,
    outs: 0
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
              {this.state.balls}
            </S.StatDisplay>
          </S.StatWrapper>
          <S.StatWrapper>
            <S.StatCategory>
              Outs
            </S.StatCategory>
            <S.StatDisplay>
              {this.state.balls}
            </S.StatDisplay>
          </S.StatWrapper>
        </S.StatContainer>
      </S.ScoreboardContainer>
    )
  }
}

export default Display