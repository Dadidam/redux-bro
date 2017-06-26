import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { Map } from 'immutable';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_LIKE':
            return state.update('likes', likes => likes + 1);
        case 'ADD_DISLIKE':
            return state.update('dislikes', dislikes => dislikes + 1);
        default:
            return state;
    }
};
const initialState = Map({
    views: 20,
    likes: 0,
    dislikes: 0
});
const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
