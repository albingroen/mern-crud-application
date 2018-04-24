import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../comps/button/index';

import './style.css';

class Start extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  }
  componentDidMount() {
    fetch('/get-data')
      .then(res => res.json())
      .then(projects => this.setState({ projects }));
  }

  render() {
    return (
      <div>
        <div className="container" />
        <header>
          <h1>Create & manage flow-schemas for your upcoming features</h1>
          <Link to="/new-feature">
            <Button primary value="Get started" />
          </Link>
        </header>

        <h3 className="subtitle">Features</h3>
        <section>
          {this.state.projects.map((project, index) => (
            <Link key={index} to={`/flow?title=${project.title}`}>
              <div>
                <h3>{project.title}</h3>
                <section>
                  <h3>{project.status}</h3>
                  <h3>{project.role}</h3>
                </section>
              </div>
            </Link>
          ))}
        </section>
      </div>
    );
  }
}

export default Start;
