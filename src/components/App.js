import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Tutorial from './Tutorial';
import Header from './Header';
import Home from './Home';

class Container extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/tutorial" component={Tutorial} />
                </Switch>
            </main>
        )
    }
}
class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Container />
            </div>
        )
    }
}

export default App;