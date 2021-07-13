import React from 'react';
// load the the global style
import { GlobalStyle } from './GlobalStyle';
// load the components
import Header from './Components/Header'
import Home from './Components/Home'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
