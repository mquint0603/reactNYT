import React, { Component } from 'react';
// import logo from './logo.svg';
import Search from './components/Search'
// import Saved from './components/Saved'
import Header from './components/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <br/>
        <Search/>
      </div>
    );
  }
}

export default App;

