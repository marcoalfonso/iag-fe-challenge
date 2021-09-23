import React, { Component } from 'react'

import styles from './Screen.module.css'

export class Screen extends Component {
  render() {
    return (
      <div className={styles.screen}>
        {this.props.input && this.props.input.split('').map((displayElement, index) => {
          return (
            <span key={`${displayElement}-${index}`}>{displayElement}</span>
          )
        })}
      </div>
    )
  }
}

export default Screen
