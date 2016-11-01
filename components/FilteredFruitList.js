const React = require('react');
const { Component } = require('react');

function FilteredFruitList(props) {
  return (
    <ul className="fruit-list">
      {(props.filter ? props.fruit.filter(i => i.fruit_type == props.filter) : props.fruit ).map((i,idx) => <li key={idx}>{i.char}</li>)}
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}

module.exports = FilteredFruitList;