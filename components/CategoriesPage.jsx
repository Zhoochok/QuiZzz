const React = require('react');
const Layout = require('./Layout');
const CategoryItem = require('./CategoryItem');

function Categories({ title, categories }) {
  return (
    <Layout title={title}>
      <h2>Выберите тему:</h2>
      <div className='themesList'>
        {categories.map((category) => (
          <CategoryItem category={category} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = Categories;
