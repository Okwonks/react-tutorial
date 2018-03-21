import React, { Component, Fragment } from 'react';
import Game from './Game';
import UserName from './hello-world';

class Tutorial extends Component {
    render() {
        return(
            <Fragment>
                <Game />
                <UserName />
            </Fragment>
        )
    }
}

export default Tutorial;