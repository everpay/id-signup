import React, { Component } from 'react'
import { Route } from "react-router-dom";

import Auth from "./Auth/Auth";
import Callback from "./Callback";
import { UserForm } from './components/UserForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
        	<Route
              path="/"
              exact
              render={props => <UserForm auth={this.auth} {...props} />}
            />
            <Route
              path="/callback"
              render={props => <Callback auth={this.auth} {...props} />}
            />
        </div>
      </div>
    )
  }
}

export default App
