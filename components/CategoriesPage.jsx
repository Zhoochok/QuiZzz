const React = require('react');
const Layout = require('./Layout');
const CategoryItem = require('./CategoryItem');

function Categories({ title, categories }) {
  return (
    <Layout title={title}>
      <h1>Quiz</h1>
      <div className='container'>
        {categories.map((category) => (
          <CategoryItem category={category} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = Categories;
