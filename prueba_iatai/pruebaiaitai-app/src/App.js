import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import Routes from './Routes'
import { withRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div >
        <nav className="navbar">
        <Link to="/product/create">
          <span>
          Crear productos
          </span>
          </Link>

          <Link to="/product/all">
            <span>
            Ver productos
            </span>
            </Link>
        </nav>
        <Routes />
      </div>
    );
  }
}

export default withRouter(App)
