import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/home';
import HireMe from './components/pages/hire-me';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={ Home }></Route>
        <Route path="/whyyoushouldhireme" component={ HireMe }></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
