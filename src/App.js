import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Routes from './Routes'

import 'antd/dist/antd.css'
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <div className="nav-wrapper">
          <Link to="/">
            <img src="https://www.iag.com.au/sites/default/themes/iag2015/logo.png" alt="iag-logo" height="64px"/>
          </Link>
          </div>
        </header>
        <ToastContainer autoClose={4000} />
        <Routes />
      </div>
    )
  }
}

export default withRouter(App)
