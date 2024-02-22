const React = require('react');

function Navbar({ user }) {
  return (
    <nav>
      <div class='nav-wrapper'>
        <a href='#' class='brand-logo'>
          Logo
        </a>
        <ul id='nav-mobile' class='right hide-on-med-and-down'>
          <li>
            <a href='/'>main</a>
          </li>
          <li>
            <a href='/books'>category</a>
          </li>
          <li>
            <a href='/auth/registration'>sign-up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

module.exports = Navbar;