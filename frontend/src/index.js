import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';



document.addEventListener('DOMContentLoaded', () => {
    let store;
    //condition for user with a session token in localStorage
    if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);
        //Retrieve information of the user
        const decodedUser = jwt_decode(localStorage.jwtToken);
        //pre-load state added to store immediately
        const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

        store = configureStore(preloadedState);

        const currentTime = Date.now() / 1000;

        //Incase of an expired token
        if (decodedUser.exp < currentTime) {
            // Redirect to the login page and Logout
            store.dispatch(logout());
            window.location.href = '/login';
        }
    } else {
        //Begin with an empty store
        store = configureStore({});
    }

    const root = document.getElementById('root');

    ReactDOM.render(<Root store={store} />, root);
});