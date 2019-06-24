import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

import Display from './Display'

describe('Test <Display /> component', () => {
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