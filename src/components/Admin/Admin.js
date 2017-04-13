import React, { Component, PropTypes } from 'react';

class Admin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: null
		};
	}

	componentDidMount() {
		this.props.socket.emit('admin');
		this.props.socket.on('admin', (users) => {
			this.setState({
				users: users
			});
		});
	}

	render() {
		let data = []
		console.log(this.state.users);
		if (this.state.users) {
			for (var user in this.state.users) {
				if (!this.state.users.hasOwnProperty(user)) continue;
				data.push(
					<div key={this.state.users[user].name}>
						<h1>{user}</h1>
						<h2>{this.state.users[user].time} seconds</h2>
						<p>{this.state.users[user].data}</p>
					</div>
				);
			}
		}
		return (
			<div>
				{data}
			</div>
		);
	}
}

Admin.propTypes = {
	socket: PropTypes.object.isRequired
};

export default Admin;
