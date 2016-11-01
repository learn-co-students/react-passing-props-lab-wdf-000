const React = require('react');

const FruitBasket = require('./FruitBasket');

class App  extends React.Component {
  constructor() {
    super()
    this.state = {
      fruit: [],
      filters: []
    }
  }

  render() {
    return (
      <FruitBasket />
    );
  }
}

module.exports = App;
