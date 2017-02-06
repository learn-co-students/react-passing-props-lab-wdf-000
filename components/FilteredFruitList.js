const React = require('react');

const FilteredFruitList = ({ filter, fruit }) => {
    const list = !filter ? fruit :
      fruit.filter(i => i.fruit_type == filter);

    return (
      <ul className="fruit-list">
        {list.map((i,idx) => <li key={idx}>{i.char}</li>)}
      </ul>
    );
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
};
module.exports = FilteredFruitList;

