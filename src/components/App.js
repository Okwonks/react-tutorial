import React, { Component } from 'react';
import UserName from './hello-world';
import Game from './Game';

class App extends Component {
    render() {
        return(
            <div className="container-fluid">
                <Game />
                <UserName />
            </div>
        )
    }
}

export default App;