import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// LOCAL IMPORTS
import AppRouter from './routers/AppRouter';

console.log('App Running!');

ReactDOM.render(<AppRouter />, document.getElementById('app'));