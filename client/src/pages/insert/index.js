import React, { Component } from 'react'
import { Button } from '../../comps/button/index'
import './style.css'

export default class Insert extends Component {
  render() {
    return (
      <div className="wrapper">
        <form action="/insert" method="post">
          <input name="title" placeholder="Titel..." />

          <input name="status" placeholder="Status..." />

          <input name="role" placeholder="Roll..." />

          <div className="button-wrapper">
            <Button width="100%" primary value="New feature" />
          </div>
        </form>
      </div>
    )
  }
}
