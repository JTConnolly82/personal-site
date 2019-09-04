import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import NoMatch from './Components/NoMatch';
import './App.css';
import ContactComplete from './Components/ContactComplete';





function App() {
  return (
    <Router>
      <div id='app'>
        <Header/>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/contact" component={ Contact } />
            <Route exact path='/contactcomplete' component={ ContactComplete } />
            <Route component={ NoMatch } />
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
