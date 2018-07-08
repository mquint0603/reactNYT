import React, { Component } from 'react';
// import logo from './logo.svg';
import Search from './components/Search'
// import Saved from './components/Saved'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search/>
        <br/>
        {/* <Saved/> */}
      </div>
    );
  }
}

export default App;

