const React = require('react');

function CategoryItem({ category }) {
  return (
    <div className='themeItem'>
      <img src={category.image}></img>
      <h2>{category.name}</h2>
      <button href={`/categories/${category.id}`}>ПОГНАЛИ!!!</button>
    </div>
  );
}

module.exports = CategoryItem;
