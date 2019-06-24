import React from 'react';

import AppContainer from './components/DesignComponents/AppStyles'
import Display from './components/ScoreBoardComponents/Display'
import Dashboard from './components/ScoreBoardComponents/Dashboard'

function App() {
  return (
    <AppContainer>
      <Display />
      <Dashboard />
    </AppContainer>
  );
}

export default App;
