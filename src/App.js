import React, { Component } from 'react';
import './App.css';
import Nav from './component/Nav/Nav';
import routes from './routes';
import { withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './ducks/store'

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Nav location={this.props.location} />
        </Provider>
        <div> {routes} </div>
      </div>
    );
  }
}

export default withRouter(App);