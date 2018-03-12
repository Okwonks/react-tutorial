import React from 'react';
import ReactDOM from 'react-dom';
/** This is an alternative way of using classes
 *  Just in case ES6 looks difficult ;)
 */
// let createReactClass = require('create-react-class');
// let HelloUser = createReactClass({
//     getInitialState() {
//         return {
//             username: '@albert'
//         }
//     },
//     handleChange(e) {
//         this.setState({
//             username: e.target.value
//         });
//     },
//     render() {
//         return (
//             <div>
//                 Hello {this.state.username} <br/>
//                 Change Name: <input type="text" value={this.state.username} onChange={this.handleChange}/>
//             </div>
//         )
//     }
// });

class UserName extends React.Component {
    constructor(props) {
        super(props);
        this.state = UserName.defaultProps;
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (e) => {
        this.setState({
            username: e.target.value
        });
    }
    // this is the basic method
    // handleChange(e) {
    //     this.setState({
    //         username: e.target.value
    //     });
    // }
    render() {
        return (
            <div>
                Hello {this.state.username} <br/>
                Change Name: <input type="text" value={this.state.username} onChange={this.handleChange}/>
            </div>
        )
    }
}

UserName.defaultProps = {
    username: '@albert'
}

ReactDOM.render(<UserName />, document.getElementById('hello-user'));