const React = require('react');
const Layout = require('./Layout');

function Navbar({ user }) {
  // <Layout></Layout>
  return (
    <nav user={user}>
      <div class="nav-wrapper">
        <ul>
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/categories">Выбор темы</a>
          </li>
          <li>
          {user ? (
            <a>Привет, {user.name}! Удачи!</a>
          ) : (
            <div className='privet'>Всем привет, знатоки!</div>
          )}
        </li>
          <li style={{ float: 'right' }}>
            <a href="/registration">Регистрация</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

module.exports = Navbar;
