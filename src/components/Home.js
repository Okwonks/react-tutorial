import React, { Component } from 'react';
import Header from './Header';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Building My First React App</h1>
                <div className="row">
                    <div className="col-4 col-md-auto">
                        <h2>How it all started</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;