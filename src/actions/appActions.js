import {
  SET_INPUT,
  SET_PIN,
  SET_LOCKED
} from 'constants/constants'

export const setInput = value => ({ type: SET_INPUT, value })

export const setPIN = PIN => ({ type: SET_PIN, PIN })

export const setLocked = boolean => ({ type: SET_LOCKED, boolean })