import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './Components/Store/index'
import   {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // Passing property store as value global state 'store' 
    //<Provider> - is reponsible for passing the store value to entire application
   <Provider store={store}> 
        <App />
    </Provider>
  
);

reportWebVitals();
