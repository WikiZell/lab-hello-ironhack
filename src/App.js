import React from 'react';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import Bottom from './components/Bottom'

function App() {
  return (
    <div className="App">
      <div className="Content-Top">
        <Header></Header>
        <Content></Content>
      </div>
      <div className="Content-Bottom">
        <Bottom></Bottom>
      </div>
    </div>
  );
}

export default App;
