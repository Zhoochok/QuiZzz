const React = require('react');

function Categories({ category }) {
  return (
    <div>
      <h1>{category.name}</h1>
      <img src={category.img}></img>;
      <button>ПОГНАЛИ</button>
    </div>
  );
}

module.exports = Categories;
