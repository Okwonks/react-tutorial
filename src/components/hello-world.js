import React, { Component, Fragment } from 'react';
import { Input } from 'mdbreact';

class ShowList extends Component {
    render() {
        let listItems = this.props.names.map(function (friend) {
            return <li key={friend}>{friend}</li>
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

class AddFriends extends Component {
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
            <Fragment>
                <div className="form-inline">
                    <div className="form-group">
                        <Input label="Add Friend" className="form-control" type="text" value={this.state.newFriend} onChange={this.updateNewFriend} onKeyPress={e => { if (e.charCode === 13) { this.handleAddNew() } }} />
                    </div>
                    <span className="form-group bmd-form-group">
                        <button className="btn btn-success" onClick={this.handleAddNew}>Add Friend</button>
                    </span>
                </div>
            </Fragment>
        )
    }
}

class UserName extends Component {
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
            <div className="container-fluid">
                <h3>Hello {this.state.username}</h3> <br />
                <ShowList names={this.state.friends} />
                <div className="form-inline">
                    <div className="form-group">
                        <Input label="Username" className="form-control" type="text" onChange={this.handleChange} />
                    </div>
                    <AddFriends addNew={this.addFriend} />
                </div>
            </div>
        )
    }
}

UserName.defaultProps = {
    username: '@albert',
    friends: ['Jake Lingwall', 'Murphy Randall', 'Merrick Christensen', 'Drake the Winstone']
}

export default UserName;