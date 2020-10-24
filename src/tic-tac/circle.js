import React from 'react';
import ReactDOM from 'react-dom';
import './circle.css';

export default class Circle extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className={this.props.className}></span>
    );
  }

}
