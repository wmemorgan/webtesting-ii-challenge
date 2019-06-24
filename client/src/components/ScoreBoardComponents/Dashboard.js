import React from 'react'
import { EventEmitter } from '../../utils/events'

const addBall = () => {
  EventEmitter.dispatch('addBall')
}

const addStrike = () => {
  EventEmitter.dispatch('addStrike')
}

const Dashboard = () => {
  return (
    <div>
      <button onClick={addBall}>Ball</button>
      <button onClick={addStrike}>Strike</button>
      <button>Foul</button>
    </div>
  )
}

export default Dashboard