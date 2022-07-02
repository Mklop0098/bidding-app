import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from './pages/LoginPage';
import { SignInPage } from './pages/SignInPage';
import { UserProvider } from './Context/user/user.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <div className="App">
          <Routes>
            <Route path="/web/login" element={<LoginPage />}></Route>
            <Route path="/web/signin" element={<SignInPage />}></Route>
            <Route path="*" element={<App />}></Route>
          </Routes>
        </div>
      </UserProvider>
    </Router>
  </React.StrictMode>
);
reportWebVitals();

