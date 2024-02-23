const React = require('react');

function CategoryItem({ category }) {
  return (
    <div>
      <h1>{category.name}</h1>
      <img src={category.img}></img>
      <button>
        <a href={`/categories/${category.id}`}>ПОГНАЛИ</a>
      </button>
    </div>
  );
}

module.exports = CategoryItem;
