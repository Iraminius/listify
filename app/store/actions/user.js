import { createActions } from 'redux-actions'
import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
} from '../constants/user'

export const { userLogin } = createActions(
  {
    [USER_LOGIN_ERROR]: err => ({ err }),
  },
  USER_LOGIN,
  USER_LOGIN_SUCCESS
)
