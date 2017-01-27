const React = require('react');

const FruitBasket = require('./FruitBasket');


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: [],
      fruit: [],
      selectedFilter: null
    };

  }

    render(){
      return (
        <div> </div>
      );
    };
}

module.exports = App;

// refactored before and after
// const App = () => {
//   return (
//     <FruitBasket />
//   );
// }
