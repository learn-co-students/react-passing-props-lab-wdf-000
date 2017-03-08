const React = require('react');

const FruitBasket = require('./FruitBasket');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  render() {
    return(
      <FruitBasket />
    )
  }

}



module.exports = App;
