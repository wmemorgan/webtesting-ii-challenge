import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

import Dashboard from './Dashboard'

describe('Test <Dashboard /> component', () => {
  it('renders without errors', () => {
    render(<Dashboard />)
    // console.log(`\n***Rendered Dashboard***`, render(<Dashboard />).debug())
  })
})

describe('Test buttons', () => {
  it('Ball button', () => {
    const { getByText } = render(<Dashboard />)
    const ballButton = getByText(/ball/i)

    fireEvent.click(ballButton, 'click')

  })

  it('Strike button', () => {
    const { getByText } = render(<Dashboard />)
    const strikeButton = getByText(/strike/i)

    fireEvent.click(strikeButton, 'click')

  })

  it('Foul button', () => {
    const { getByText } = render(<Dashboard />)
    const foulButton = getByText(/foul/i)

    fireEvent.click(foulButton, 'click')

  })

  it('Hit button', () => {
    const { getByText } = render(<Dashboard />)
    const hitButton = getByText(/hit/i)

    fireEvent.click(hitButton, 'click')

  })
})