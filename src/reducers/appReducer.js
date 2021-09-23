/*
 * The reducer takes care of our data
 * Using actions, we can change our application state
 * To add a new action, add it to the switch statement in the homeReducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return assign({}, state, {
 *       stateVariable: action.var
 *   });
 */

import {
  SET_INPUT,
  SET_PIN,
  SET_LOCKED
} from 'constants/constants'

// The initial application state
const initialState = {
  loading: false,
  input: '',
  PIN: '',
  isLocked: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        input: action.value
      }

    case SET_PIN:
      return {
        ...state,
        PIN: action.PIN
      }

    case SET_LOCKED:
      return {
        ...state,
        isLocked: action.boolean
      }

    default:
      return state
  }
}

export default appReducer
