import React, { Component } from 'react';
import Posts from './component/Posts';
import Postform from './component/Postform';
import { Provider } from 'react-redux';

import './App.css';

class App extends Component {
  render() {
    
    return (
      <Provider store={store}>
        <div>
          <Postform></Postform>
          <Posts></Posts>
        </div>
     </Provider>
    );
  }
}

export default App;
