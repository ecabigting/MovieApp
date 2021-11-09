import React from 'react';
// routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
// load the the global style
import { GlobalStyle } from './GlobalStyle';
// load the components
import Header from './Components/Header'
import Home from './Components/Home'
import Movie from './Components/Movie';
import NotFound from './Components/NotFound';

const App = () => (  
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:movieId' element={<Movie/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <GlobalStyle />
    </Router>
)

export default App;
