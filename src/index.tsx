import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Coor from './Coor';
import App from './App';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="*" element={<Coor />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
function useState<T>(arg0: never[]): [any, any] {
  throw new Error('Function not implemented.');
}

