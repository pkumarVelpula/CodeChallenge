import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./Stores/StoreContext";
import JobsStore from "./Stores/JobsStore";

import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <StoreContext.Provider value={JobsStore}>
     <App />
     </StoreContext.Provider>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('egentask')
);