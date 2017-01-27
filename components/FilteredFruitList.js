const React = require('react');


export default function FilteredFruitList({fruit, filter}){

    const list = !filter ? fruit : fruit.filter(i => i.fruit_type == filter);

     return (
        <ul className="fruit-list">
          {list.map((i,idx) => <li key={idx}>{i.char}</li>)}
        </ul>
      )
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
};


// refactored before and after


// const { Component } = require('react');
//
// class FilteredFruitList extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       items: []
//     };
//   }
//
//   componentWillMount() {
//     fetch('/api/fruit')
//       .then(res => res.json())
//       .then(fruit => this.setState({ items: fruit}));
//   }
//
//   render() {
//     const list = !this.props.filter ? this.state.items :
//       this.state.items.filter(i => i.fruit_type == this.props.filter);
//
//     return (
//       <ul className="fruit-list">
//         {list.map((i,idx) => <li key={idx}>{i.char}</li>)}
//       </ul>
//     );
//   }
// }

module.exports = FilteredFruitList;
