import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page from './components/pages/page';
import Home from './components/pages/home';
import HireMe from './components/pages/hire-me';
import Hobbies from './components/pages/hobbies';
import Contact from './components/pages/contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={ Home }></Route>
        <Route path="/whyyoushouldhireme" component={ HireMe }></Route>
        <Route path="/whatidoforfun" component={ Hobbies }></Route>
        <Route path="/contact" component={ Contact }></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
