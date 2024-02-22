const React = require('react');
const Layout = require('./Layout');

function MainPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className='main-page'>
        <h2>Вы зарегались? Тогда пристегните ремни! (...музыка♪♪)</h2>
        <img
          // src='https://cdn.forbes.ru/forbes-static/c/608x342/new/2022/12/1111IMG-1490-kopia-6390c10fcb5a4.webp'
          className='main-page-img'
          src='https://upload.wikimedia.org/wikipedia/ru/9/9c/%D0%97%D0%B0%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0_%D0%A7%D1%82%D0%BE%3F_%D0%93%D0%B4%D0%B5%3F_%D0%9A%D0%BE%D0%B3%D0%B4%D0%B0%3F_2013.jpg'
          alt='Фото Георгия Бабаяна'
        />
      </div>
    </Layout>
  );
}

module.exports = MainPage;