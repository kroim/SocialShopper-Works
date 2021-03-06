import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from './actionTypes';
import { loginSuccess, logoutUserSuccess, apiError } from './actions';

//AUTH related methods
import { getBackendAPI } from '../../../helpers/backend';


function* loginUser({ payload: { user, history } }) {
    try {
        const result = yield getBackendAPI().loginUser(user.email, user.password);
        if(result.token){
            localStorage.setItem('token', result.token);
            yield call(getBackendAPI().setLoggeedInUser, result.user);
            yield put(loginSuccess(result.user));
            history.push('/dashboard');
        } else {
            yield put(apiError("Invalid User"));
        }
    } catch (error) {
        yield put(apiError(error));
    }
}

function* logoutUser({ payload: { history } }) {
    try {
        const response = yield call(getBackendAPI().logout);
        yield put(logoutUserSuccess(response));
        history.push('/login');
    } catch (error) {
        yield put(apiError(error));
    }
}


export function* watchUserLogin() {
    yield takeEvery(LOGIN_USER, loginUser)
}

export function* watchUserLogout() {
    yield takeEvery(LOGOUT_USER, logoutUser)
}

function* authSaga() {
    yield all([
        fork(watchUserLogin),
        fork(watchUserLogout),
    ]);
}

export default authSaga;