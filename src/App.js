import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return <div className='App'>
        <header className='App-header' >
            <img src={logo}
                className='App-logo'
                alt='logo' />
            <p> First React Js Webapp </p>
            <a className='App-link'
                href='https://reactjs.org'
                target='_blank'
                rel='noopener noreferrer' >
                Welcome to React JS</a>
        </header></div>
}

export default App;