import React, { Component } from 'react';
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

class ShowList extends Component {
    render() {
        let listItems = this.props.names.map(function (friend) {
            return <li>{friend}</li>
        });
        return (
            <div>
                <h4>Friends</h4>
                <ul>
                    {/* {this.props.names.map((friend) => <li>{friend}</li>)} this is an alternative way */}
                    {listItems}
                </ul>
            </div>
        )
    }
}

class AddFriends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newFriend: ''
        }

        this.updateNewFriend = this.updateNewFriend.bind(this);
        this.handleAddNew = this.handleAddNew.bind(this);
    }
    updateNewFriend(e) {
        this.setState({
            newFriend: e.target.value
        })
    }
    handleAddNew = () => {
        this.props.addNew(this.state.newFriend);
        this.setState({
            newFriend: ''
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.newFriend} onChange={this.updateNewFriend} />
                <button onClick={this.handleAddNew}>Add Friend</button>
            </div>
        )
    }
}

class UserName extends React.Component {
    constructor(props) {
        super(props);
        this.state = UserName.defaultProps;
        this.handleChange = this.handleChange.bind(this);
        this.addFriend = this.addFriend.bind(this);
    }
    addFriend(friend) {
        this.setState((state) => ({
            friends: state.friends.concat([friend])
        }))
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
                <h3>Hello {this.state.username}</h3> <br />
                <ShowList names={this.state.friends} />
                Change Name: <input type="text" value={this.state.username} onChange={this.handleChange} />
                <AddFriends addNew={this.addFriend}/>
            </div>
        )
    }
}

UserName.defaultProps = {
    username: '@albert',
    friends: ['Jake Lingwall', 'Murphy Randall', 'Merrick Christensen', 'Drake the Winstone']
}

export default UserName;

ReactDOM.render(<UserName />, document.getElementById('hello-user'));