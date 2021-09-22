import api from '../apiClient'
import {
  SENDING_REQUEST
} from '../constants/constants'
import { toast } from 'react-toastify'

export const sendingRequest = loading => ({ type: SENDING_REQUEST, loading })