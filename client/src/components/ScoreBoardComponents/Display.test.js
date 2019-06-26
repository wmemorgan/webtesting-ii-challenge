import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

import Display from './Display'

describe('renders <Display /> component', () => {
  describe('display stat categories', () => {
    it('should render without errors', () => {
      render(<Display />)
    })

    it('should display "Scoreboard"', () => {
      const { getByText } = render(<Display />)
      getByText(/scoreboard/i)
    })

    it('should display "Balls"', () => {
      const { getByText } = render(<Display />)
      getByText(/balls/i)
    })

    it('should display "Strikes"', () => {
      const { getByText } = render(<Display />)
      getByText(/strikes/i)
    })

    it('should display "Outs"', () => {
      const { getByText } = render(<Display />)
      getByText(/outs/i)
    })
  })

  describe('display game data', () => {
    it('display number of balls', () => {
      const mockState = { balls: 0 }
      const component = render(<Display {...mockState} />)
      const numberOfBalls = component.getByTestId(/ball-count/i).textContent

      expect(Number(numberOfBalls)).toBe(mockState.balls)
    })

    it('display number of strikes', () => {
      const mockState = { strikes: 2 }
      const component = render(<Display {...mockState} />)
      const numberOfStrikes = component.getByTestId(/strike-count/i).textContent

      expect(Number(numberOfStrikes)).toBe(mockState.strikes)
    })

    it('display number of outs', () => {
      const mockState = {
        balls: 0,
        strikes: 0,
        outs: 2
      }
      const component = render(<Display {...mockState} />)
      const numberOfOuts = component.getByTestId(/out-count/i).textContent

      expect(Number(numberOfOuts)).toBe(mockState.outs)
    })

    it('display number of hits', () => {
      const mockState = {
        balls: 0,
        strikes: 0,
        hits: 1
      }
      const component = render(<Display {...mockState} />)
      const numberOfHits = component.getByTestId(/hit-count/i).textContent

      expect(Number(numberOfHits)).toBe(mockState.hits)
    })
  })
})