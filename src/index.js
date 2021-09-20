import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Cp1 from'./Components/Cp1';
import Cp2 from './Components/Cp2'
import Cp3 from'./Components/Cp3';
import Cp4 from'./Components/Cp4';

ReactDOM.render(
  <React.StrictMode>
<Cp1/>
<Cp2/>
<Cp3/>
<Cp4/>

  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
