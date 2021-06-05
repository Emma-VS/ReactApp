import React from 'react';
import './App.css';
import { Stars } from './components/test components/component1';
import { Routing } from './routes/router'
import { NavigationBar } from './components/navigationBar/navigationBar';

function App() {
  return (
    <Routing>
      <NavigationBar />
    </Routing>
  );
}

export default App;
