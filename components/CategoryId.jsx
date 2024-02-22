const React = require('react');

function CategoryId({ category }) {
  return (
    <div>
      <h1>{category.name}</h1>
      <img src={category.img}></img>;
    </div>
  );
}

module.exports = CategoryId;
