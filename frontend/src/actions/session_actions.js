import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

// user signs-in
export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

//upon signup the user is redirected to the login page 
export const receiveUserSignIn = () => ({
    type: RECEIVE_USER_SIGN_IN
});

//Display authentication errors
export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});


export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

// Action to be taken based on response from the backend
export const signup = user => dispatch => (
    APIUtil.signup(user)
        .then(() => dispatch(receiveUserSignIn()))
        .then(() => dispatch(login(user)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
);

// setting the session token and errors on failure.
export const login = user => dispatch => (
    APIUtil.login(user).then(res => {
        console.log(user, res, "wasif is login here");
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
    })
    .catch(err => {
        dispatch(receiveErrors(err.response.data));
    })
)


export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    APIUtil.setAuthToken(false)
    dispatch(logoutUser())
};