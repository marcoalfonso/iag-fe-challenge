import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Keypad from 'components/Keypad/Keypad'
import Screen from 'components/Screen/Screen'

import styles from './Homepage.module.css'

export class Homepage extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.safe}>
          <Keypad />
          <span className={styles.screenContainer}>
            <Screen input={this.props.input} />
            <div className={`${styles.indicator} ${this.props.isLocked ? styles.red : styles.green}`} />
          </span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  input: state.app.input,
  isLocked: state.app.isLocked
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Homepage))
