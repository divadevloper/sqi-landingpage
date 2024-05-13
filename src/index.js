import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sectionone from './Sectionone';
import Sectiontwo from './Sectiontwo';
import Sectionthree from './Sectionthree';
import Sectionfour from './Sectionfour';
import Sectionfive from './Sectionfive';
import Sectionsix from './Sectionsix';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Sectionone></Sectionone>
    <Sectiontwo></Sectiontwo>
    <Sectionthree></Sectionthree>
    <Sectionfour></Sectionfour>
    <Sectionfive></Sectionfive>
    <Sectionsix></Sectionsix>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
