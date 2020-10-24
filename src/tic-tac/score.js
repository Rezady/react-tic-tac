
import React from 'react';
import ReactDOM from 'react-dom';


export default class Scores extends React.Component {

  state = {
    scorePlayer1: 0,
    scorePlayer2: 0
  };

  render() {
    return (
      <div className="container">

        <div className="row">

          <div className="col-6">
            Player 1 : {this.state.scorePlayer1}
          </div>

          <div className="col-6">
            Player 2 : {this.state.scorePlayer1}
          </div>

        </div>

      </div>

    );
  }

}
