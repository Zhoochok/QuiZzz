const React = require('react');
const Layout = require('./Layout');
const CategoryItem = require('./CategoryItem');

function Categories({ title, categories, user }) {
  return (
    <Layout title={title} user={user}>
      <h2>Выберите тему:</h2>
      <div className="themesList">
        {categories.map((category) => (
          <CategoryItem category={category} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = Categories;
