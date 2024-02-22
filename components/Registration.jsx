const React = require('react');
const Layout = require('./Layout');

function Registration({ title }) {
  return (
    <Layout title={title}>
      <h1 className='headline'>Регистрация</h1>
      <form className="registration" action="/api/registration" method="POST">
        <input className='input' type="text" name="name" placeholder="Имя" />
        <input className='input' type="email" name="email" placeholder="email" />
        <input className='input' type="password" name="password" placeholder="Пароль" />
        <button>Ввод</button>
      </form>
    </Layout>
  );
}

module.exports = Registration;
