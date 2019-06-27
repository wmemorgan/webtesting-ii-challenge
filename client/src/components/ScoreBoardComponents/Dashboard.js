import React from 'react'
import { EventEmitter } from '../../utils/events'

import * as S from './ScoreboardStyles'
import Button from '../DesignComponents/Button'

const addBall = () => {
  EventEmitter.dispatch('addBall')
}

const addStrike = () => {
  EventEmitter.dispatch('addStrike')
}

const addFoul = () => {
  EventEmitter.dispatch('addFoul')
}

const addHit = () => {
  EventEmitter.dispatch('addHit')
}

const Dashboard = () => {
  return (
    <S.DashBoardContainer>
      <Button onClick={addBall} primary>Ball</Button>
      <Button onClick={addStrike} delete>Strike</Button>
      <Button onClick={addFoul} update>Foul</Button>
      <Button onClick={addHit} success>Hit</Button>
    </S.DashBoardContainer>
  )
}

export default Dashboard