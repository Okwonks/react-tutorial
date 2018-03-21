import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import UserName from './hello-world';
import Game from './Game';
import Tutorial from './Tutorial'

class Container extends Component {
    render() {
        <main>
            <Switch>
                <Route path="/tutorial" component={Tutorial} />
            </Switch>
        </main>
    }
}
class App extends Component {
    render() {
        return(
            <div className="container-fluid">
                <Container />
            </div>
        )
    }
}

export default App;