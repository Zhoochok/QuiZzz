const React = require('react');
const Layout = require('./Layout');

function CategoryId({ category, quize }) {
  return (
    <Layout>
      <div className="category">
        <h1>{category.name}</h1>
        <img src={category.img}></img>
        <p>{quize.question}</p>
        <form className="form-result">
          {quize.Otvets.map((el) => (
            <div>
              <input type="radio" name="answer" value={el.isRight} />
              {/* <button className='btn-otvet' value={el.isRight}>{el.name}</button> */}
              <label for="huey">{el.name}</label>
            </div>
          ))}
          <button type="submit" className="btn-otvet">
            click
          </button>
          <p className="form-result"></p>
        </form>
        <button className="btn-next">
          {' '}
          <a href={`/categories/${category.id}/${quize.id + 1}`}>Dalee</a>{' '}
        </button>
      </div>
    </Layout>
  );
}

module.exports = CategoryId;
