const React = require('react');
const Navbar = require('./Navbar');

function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel='stylesheet' href='/css/styles.css' />
        <link rel='stylesheet' href='/css/reset.css' />

        <script src='/js/script.js' />
        {/* <script defer src='/scripts/product.js' /> */}
      </head>
      <body>
        <Navbar user={user} />
        {/* наши страницы */}
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
