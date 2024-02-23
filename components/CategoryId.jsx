const React = require('react');
const Layout = require('./Layout');

function CategoryId({ title, user, category, quize }) {
  return (
    <Layout title={title} user={user}>
      <div className="category">
        <h1>{category.name}</h1>
        <img src={quize.image} width={500} height={350}></img>
        <p className='add'>{quize.question}</p>
        <form className="form-result">
          {quize.Otvets.map((el) => (
            <div>
              <input
                type="radio"
                name="answer"
                className="otvet"
                value={el.isRight}
              />
              {/* <button className='btn-otvet' value={el.isRight}>{el.name}</button> */}
              <label for="huey" className="otvet">
                {el.name}
              </label>
            </div>
          ))}
          <button type="submit" className="btn-otvet">
            Проверимся?
          </button>
          <p className="form-result"></p>
        </form>
        <button className="btn-next">
          {' '}
          <a href={`/categories/${category.id}/${quize.id + 1}`}>
            Едем дальше
          </a>{' '}
        </button>
      </div>
    </Layout>
  );
}

module.exports = CategoryId;
