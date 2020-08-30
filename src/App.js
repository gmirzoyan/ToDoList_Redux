import React from 'react';
import './App.css';
import Dashboard from "./Dashboard";


function App() {
    return (
        <div className='App'>

            <span>{(new Date()).toLocaleDateString()}</span>
            <p><span>{(new Date()).toLocaleTimeString()}</span></p>
            <br/>
            <h4><p className="font-weight-bold text-success">TODO LIST</p></h4>

            <Dashboard/>
        </div>
    );
}

export default App;
