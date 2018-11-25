import { handleActions } from 'redux-actions'
import { fromJS } from 'immutable'

import { STATUS } from '../constants/index'
import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
} from '../constants/user'

export const userState = fromJS({
  isAuthenticated: false,
  status: STATUS.IDLE,
  successMessage: 'User logged in successfully',
  errorMessage: 'Error occured during logging in',
})

export default handleActions(
  {
    [USER_LOGIN]: state => state.set('status', STATUS.RUNNING),
    [USER_LOGIN_SUCCESS]: state =>
      state.set('isAuthenticated', true).set('status', STATUS.SUCCESS),
    [USER_LOGIN_ERROR]: (state, { payload: { err } }) => {
      console.log(err)
      return state
        .set('isAuthenticated', false)
        .set('status', STATUS.ERROR)
    },
  },
  userState
)
