const React = require('react');

function CategoryItem({ category }) {
  return (
    <div className='themeItem'>
      <h1>{category.name}</h1>
      <img src={category.image}></img>
      <button>
        <a href={`/categories/${category.id}`}>ПОГНАЛИ</a>
      </button>
    </div>
  );
}

module.exports = CategoryItem;
