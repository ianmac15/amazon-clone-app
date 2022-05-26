import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';


const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID


ReactDOM.render(
  <Auth0Provider domain={'dev-xdma-v87.us.auth0.com'} clientId={'ErIBC6u7y7aH8v5GYlG9l6AV7GMEQISY'} redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
