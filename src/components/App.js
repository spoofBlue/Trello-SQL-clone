
import React from 'react';
//import mainReducer from '../reducers/reducer';
import './App.css';
import Board from './board';
import Panel from './panel';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          This is the Trello Clone with SQL! Wow!
        </h1>
      </header>
      <Panel />
      <Board />
    </div>
  );
}

export default App;