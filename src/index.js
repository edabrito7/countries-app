import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { searchCountries, requestCountries, regionCountries } from './reducers';
import './index.css';
import App from './containers/App';
import {BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  searchCountries,
  requestCountries,
  regionCountries
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


ReactDOM.render(
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router> 
    </Provider>
    
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
