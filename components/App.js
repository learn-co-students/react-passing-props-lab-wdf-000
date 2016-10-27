import React, { Component, PropTypes } from 'react';
const FruitBasket = require('./FruitBasket');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {fruit:[],filters:[]};
  }

  render() {
    return (
      <FruitBasket />
    );
  }
}


module.exports = App;
