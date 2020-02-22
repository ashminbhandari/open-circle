import React from 'react';
import Landing from './components/Landing'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Landing/>
        </div>
    </BrowserRouter>
  );
}

export default App;
