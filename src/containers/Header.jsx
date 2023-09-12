import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <h1>Health Local</h1>
      <p>Your Source for Health Articles and Information</p>

      <nav>
        <ul>
          <li>
            <a
              className="nav-element"
              href="https://github.com/Ejtolf"
              target="blank"
            >
              Developer
            </a>
          </li>

          <li>
            <a
              className="nav-element"
              href="https://github.com/Ejtolf/healthlocal"
              target="blank"
            >
              Source code
            </a>
          </li>

          <li>
            <a className="nav-element" href="?">
              Navigation
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
