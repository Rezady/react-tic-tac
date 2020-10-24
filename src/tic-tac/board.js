import React from 'react';
import ReactDOM from 'react-dom';
import "./board.css";
import Circle from './circle.js';

class Col_Chess extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      arr: this.props.arrs,
      isClick: false,
      classCircle: "red my-4",
      idCircle: [],
      idxCircle: 0,
      idx_col: this.props.idx_col,
      player_1_turn: true,
    }
  }


  // memunculkan circle 
  handleClick = (event) => {
    console.log("yes");

    this.setState({ isClick: !this.state.isClick });
    if (this.state.isClick == true) {
      this.setState({ classCircle: "blue my-4" })
    } else {
      this.setState({ classCircle: "red my-4" })
    }

    this.state.idCircle.push(event.target.id);
    console.log(this.state.idCircle);
    // console.log(this.state.isClick);
  }

  isInclude = (idCircle, index) => {
    if (idCircle.includes(index)) {
      return true;
    } else {
      return false;
    }
  }

  render() {

    return (

      this.state.arr.map((value, index) => {

        return (

          <button id={this.state.idx_col * 3 + index} type="button" className={value} onClick={this.handleClick}>

            <
              Circle id={this.state.idx_col * 3 + index} className={
                this.state.idCircle.includes((this.state.idx_col * 3 + index).toString()) ?
                  this.state.classCircle + " visible" : this.state.classCircle
              }
            />

            {
              console.log(this.state.idCircle.includes("2"))
            }

          </button>


        )
      })
    )
  }
}

export default class Board extends React.Component {

  constructor(props) {

    super(props);
    this.state = {

      white: "white col btn-lg btn-warning",
      black: "black col btn-lg btn-warning",
      isBlack: true,
      num_boards: 3,
      row_boards: [],
      id_boards: 0,
    }
  }

  // Membuat array berisi 1 sampe 3  
  make_col = (item) => {

    let i;

    for (i = 0; i < this.state.num_boards; i++) {

      if (this.state.isBlack == true) {
        item.push(this.state.black);
      } else {
        item.push(this.state.white);
      }

      this.state.isBlack = !this.state.isBlack;

    }

    return item;
  }

  make_row = (item) => {
    let i;

    for (i = 0; i < 3; i++) {
      if (i % 2 == 0) {
        item.push(this.state.black);
      } else {
        item.push(this.state.white);
      }
    }
    return item;
  }



  render() {

    return (

      <div id="papanCatur" className="container w-50 mt-5">
        {

          this.make_col([]).map((value, index) => {
            return (

              <div id={index} className="row" >
                <Col_Chess arrs={this.make_col([])} idx_col={index} />
              </div>

            )
          })

        }

      </div >
    );
  }

}
