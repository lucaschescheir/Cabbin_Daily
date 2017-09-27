import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ControlPanel from './components/control_panel';
import GridDisplay from './components/grid_display';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ControlPanel />
          <GridDisplay />
      </div>
    );
  }
}

export default App;
