import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

import Dashboard from './Dashboard'

describe('Test <Dashboard /> component', () => {
  it('renders without errors', () => {
    render(<Dashboard />)
  })
})