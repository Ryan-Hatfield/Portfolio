import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Footer from "./components/Footer";

class App extends Component {
 render() {
   return (
    <BrowserRouter basename="/Portfolio">
    <div>
      <Navigation />
        <Switch>
         <Route path="/" component={Home} exact/>
         <Route path="/contact" component={Contact}/>
         <Route path="/portfolio" component={Portfolio}/>
       </Switch>
       <Footer />
    </div> 
  </BrowserRouter>
   );
 }
}

export default App;
