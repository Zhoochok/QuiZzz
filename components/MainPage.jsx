const React = require('react');
const Layout = require('./Layout');

function MainPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className='main-page'>
        <h2 className='aaaa'>Вы зарегались? Тогда пристегните ремни! (...музыка♪♪)</h2>
        <img
          // src='https://cdn.forbes.ru/forbes-static/c/608x342/new/2022/12/1111IMG-1490-kopia-6390c10fcb5a4.webp'
          className='main-page-img'
          src=''
        />
      </div>
    </Layout>
  );
}

module.exports = MainPage;