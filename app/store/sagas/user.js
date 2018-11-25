import { delay } from 'redux-saga'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import { USER_LOGIN_SUCCESS, USER_LOGIN_ERROR, USER_LOGIN } from '../constants'

export function* userLogin() {
  try {
    yield call(delay, 1000)

    yield put({ type: USER_LOGIN_SUCCESS })
  } catch (err) {
    yield put({ type: USER_LOGIN_ERROR, payload: err })
  }
}

export default function* user() {
  yield all([takeLatest(USER_LOGIN, userLogin)])
}
