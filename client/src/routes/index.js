import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header } from '../comps/header/index'
import Start from '../pages/start/index'
import Flow from '../pages/flow/index'
import Insert from '../pages/insert/index'
import './style.css'

export default () => (
  <div>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <div className="content">
            <Route path="/" exact component={Start} />
            <Route path="/flow" exact component={Flow} />
            <Route path="/new-feature" exact component={Insert} />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  </div>
)
