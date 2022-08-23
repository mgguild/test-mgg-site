import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Providers from './Providers';
import './polyfill'


const root = ReactDOM.render(
    <React.StrictMode>
        <Providers>
            <App/>
        </Providers>
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
