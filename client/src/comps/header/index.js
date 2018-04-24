import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <nav>
        <ul>
          <div className="left">
            <Link to="/">
              <li>Flow to go</li>
            </Link>
          </div>
          <div className="right">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/new-feature">
              <li>New feature</li>
            </Link>
          </div>
        </ul>
      </nav>
    );
  }
}
