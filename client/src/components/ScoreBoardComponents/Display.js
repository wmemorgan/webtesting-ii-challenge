import React from 'react'

import * as S from './ScoreboardStyles'

const Display = props => {
  const { balls, strikes, outs, hits } = props
  return (
    <S.ScoreboardContainer>
      <h2>Scoreboard</h2>
      <S.StatContainer>
        <S.StatWrapper>
          <S.StatCategory>
            Balls
            </S.StatCategory>
          <S.StatDisplay data-testid='ball-count'>
            {balls}
          </S.StatDisplay>
        </S.StatWrapper>
        <S.StatWrapper>
          <S.StatCategory>
            Strikes
            </S.StatCategory>
          <S.StatDisplay data-testid='strike-count'>
            {strikes}
          </S.StatDisplay>
        </S.StatWrapper>
        <S.StatWrapper>
          <S.StatCategory>
            Outs
            </S.StatCategory>
          <S.StatDisplay data-testid='out-count'>
            {outs}
          </S.StatDisplay>
        </S.StatWrapper>
        <S.StatWrapper>
          <S.StatCategory>
            Hits
            </S.StatCategory>
          <S.StatDisplay data-testid='hit-count'>
            {hits}
          </S.StatDisplay>
        </S.StatWrapper>
      </S.StatContainer>
    </S.ScoreboardContainer>
  )
}

export default Display