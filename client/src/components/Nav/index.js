import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
      <ul class="nav justify-content-right">
        <li class="nav-item">
          <a class="nav-link text-white" href="/signup">SIGN UP</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="">LOGIN</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
