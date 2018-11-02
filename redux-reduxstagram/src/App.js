import React, { Component } from 'react';
import './App.css';
import Main from '../src/components/Main';
import Single from '../src/components/Single';
import Photogrid from '../src/components/Photogrid';
import BrowserRouter from 'react-router-dom/BrowserRouter';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
       <Main>
        <p>Hello</p>
      </Main>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
