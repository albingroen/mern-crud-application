import React from 'react';
import { Component } from 'react';
import './style.css';

export class Button extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.primary && (
          <button
            style={{ width: this.props.width }}
            className="button-primary"
          >
            {this.props.value}
          </button>
        )}
        {this.props.secondary && (
          <button
            style={{ width: this.props.width }}
            className="button-secondary"
          >
            {this.props.value}
          </button>
        )}
        {this.props.default && (
          <button
            style={{ width: this.props.width }}
            className="button-default"
          >
            {this.props.value}
          </button>
        )}
      </div>
    );
  }
}
