const React = require('react');

function CategoryId({ category, quize }) {
  return (
    <div className="category">
      <h1>{category.name}</h1>
      <img src={category.img}></img>
      <p>{quize.question}</p>
      <form>
        {quize.Otvets.map((el) => (
          <div>
            <input type="radio" name="answer" value={el.name} />
            <label for="huey">{el.name}</label>
          </div>
        ))}
      </form>
      <button className="btn-next">
        {' '}
        <a href={`/categories/${category.id}/${quize.id + 1}`}>Dalee</a>{' '}
      </button>
    </div>
  );
}

module.exports = CategoryId;
