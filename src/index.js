import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './component/Counter';
import PageNotFound from './component/PageNotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element= {<App />}/>
      <Route path='/Counter.js' element= {<Counter/>}/>
      <Route path='*' element= {<PageNotFound/>}/>
    </Routes>
  </Router>
);

