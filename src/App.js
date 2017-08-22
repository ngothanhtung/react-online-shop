import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Home from './pages/Home/index';
import About from './pages/About/index';
import Products from './pages/Products/index';

import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/products" component={Products}/>
                <Route path="/about" component={About}/>
                <Route path="/:id" component={Child}/>
            </div>
        </Router>
    );
  }
}

const Child = ({ match }) => (
    <div>
        <h3>ID: {match.params.id}</h3>
    </div>
)

export default App;
