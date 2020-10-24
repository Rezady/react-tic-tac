import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Score from './tic-tac/score.js';
import Board from './tic-tac/board.js';
import Circle from './tic-tac/circle.js';

export default function App() {
    return (
        <div className="App">
            <h1> Welcome to Tic Tac Toe </h1>
            <h2> Happy Enjoy The Game </h2>
            <Score />
            <Board />
        </div>

    );
}
