import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Tutorial from './Tutorial'
import Header from './Header'

class Container extends Component {
    render() {
        return (
            <main>
                <Switch>
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