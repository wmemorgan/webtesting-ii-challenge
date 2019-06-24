import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

// Components
import App from './App';
import Display from './components/ScoreBoardComponents/Display'
//import Dashboard from './components/Dashboard'

describe('Test <App /> component', () => {
  it('<App /> renders without crashing', () => {
    render(<App />)
  })

  it('<Display /> renders without crashing', () => {
    render(<Display />)
  })

  // xit('Dashboard renders without crashing', () => {
  //   render(<Dashboard />)
  // })
})


