import React, {Component} from 'react';
import FixedMenu from './Components/FixedMenu';
import MainMenu from './Components/MainMenu';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import Home from './pages/Home/index';
import About from './pages/About/index';
import Products from './pages/Products/index';

import './App.css';

class App extends Component {
    state = {}

    hideFixedMenu = () => this.setState({visible: false})
    showFixedMenu = () => this.setState({visible: true})

    render() {
        const { visible } = this.state
        return (
            <Router>
                <div>
                    { visible ? <FixedMenu /> : null }
                    <MainMenu />

                    <Route exact path="/" component={Home}/>
                    <Route path="/products" component={Products}/>
                    <Route path="/about" component={About}/>
                    {/*<Route path="/:id" component={Child}/>*/}
                </div>

            </Router>
        );
    }
}
/*
const Child = ({match}) => (
    <div>
        <h3>ID: {match.params.id}</h3>
    </div>
)
*/
export default App;
