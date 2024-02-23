const React = require('react');

function CategoryId({ category, quize }) {
  return (
    <div>
      <h1>{category.name}</h1>
      <img src={category.img}></img>
      <p>{quize.question}</p>
      <form>
        {quize.Otvets.map((el) => (
          <div>
            <input type='radio' name='answer' value={el.name} />
            <label for='huey'>{el.name}</label>
          </div>
        ))}
      </form>
    </div>
  );
}

module.exports = CategoryId;
