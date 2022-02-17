import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Login} from './components/Signin/login';
import {Routes, Route} from "react-router-dom";
import ForgotForm from './components/Signin/forgotpassword';


function App() {
  
  return (
    <div className="App">
          <Routes>
            <Route  path="/" element={<Login />} />
            <Route  path="/forgot" element={<ForgotForm />} />
            
          </Routes>
    </div>
  );
}

export default App;