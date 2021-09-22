import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import styles from './Homepage.module.css'

export class Homepage extends Component {
  render() {
    return (
      <div className={styles.lockerContainer}>
        Hello world
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Homepage))
