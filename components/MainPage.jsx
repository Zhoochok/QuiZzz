const React = require('react');
const Layout = require('./Layout');

function MainPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className='container center'>
        <h1>MainPage</h1>
        <img
          src='https://cdn.forbes.ru/forbes-static/c/608x342/new/2022/12/1111IMG-1490-kopia-6390c10fcb5a4.webp'
          alt='Фото Георгия Бабаяна'
        />
      </div>
    </Layout>
  );
}

module.exports = MainPage;