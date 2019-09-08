
import React from 'react';
//import rootReducer from '../reducers/index';
import './App.css';
import Board from './board';
import Panel from './panel';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          This is the Trello Clone that will use SQL! Wow!
        </h1>
      </header>
      <main>
        <Panel />
        <Board />
      </main>
    </div>
  );
}

export default App;