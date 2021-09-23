import React, { Component } from 'react'
import { connect } from 'react-redux'
import { KEYS } from 'constants/constants'
import { setInput, setPIN, setLocked} from 'actions/appActions'

import styles from './Keypad.module.css'

export class Keypad extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => this.handleKeyPress(e))
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', e => this.handleKeyPress(e))
  }

  handleCLick = (key) => {
    if (key === 'CLR') {
      return this.props.setInput('')
    }
    
    if (key === 'ENTER') {
      if (this.props.isLocked) {
        if (this.props.PIN === this.props.input) {
          this.props.setPIN('')
          this.props.setLocked(false)
        } else {
          this.props.setInput('INVALID')
        }
      } else if (!this.props.isLocked && this.props.input.length === 4) {
        this.props.setPIN(this.props.input)
        this.props.setInput('LOCKED')
        this.props.setLocked(true)
      }
      return
    }

    if (this.props.input === 'LOCKED' || this.props.input === 'INVALID') {
      this.props.setInput(key)
    } else {
      this.props.setInput(`${this.props.input}${key}`.substr(-4));
    }
  }

  handleKeyPress = (event) => {
    if (KEYS.includes(event.key)) {
      this.handleCLick(event.key);
    } else if (event.key === 'Enter') {
      this.handleCLick('ENTER');
    } else if (event.key === 'Backspace') {
      this.handleCLick('CLR');
    }
  }

  render() {
    return (
      <div className={styles.keysContainer} onKeyDown={e => this.handleKeyPress(e)} tabIndex={0}>
        {KEYS.map((key) => (
          <div
            tabIndex={0}
            className={styles.key}
            key={key}
            onClick={() => {
              this.handleCLick(key);
            }}
          >
            {key === 'ENTER' ? '⇨' : key}
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  input: state.app.input,
  PIN: state.app.PIN,
  isLocked: state.app.isLocked
})

const mapDispatchToProps = (dispatch) => ({
  setInput: value => dispatch(setInput(value)),
  setPIN: PIN => dispatch(setPIN(PIN)),
  setLocked: boolean => dispatch(setLocked(boolean))
})

export default connect(mapStateToProps, mapDispatchToProps)(Keypad)
