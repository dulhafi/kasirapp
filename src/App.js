import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { NavbarComponent } from './components'
import { Home, Sukses, Fail } from './pages'
// import Fail from './pages/Fail'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <NavbarComponent />
          <main>
            <Switch>
              <Route  path="/" component={Home} exact/>
              <Route  path="/sukses" component={Sukses} exact/>
              <Route  path="/fail" component={Fail} exact/>
            </Switch>
          </main>
      </BrowserRouter>
    )
  }
}
