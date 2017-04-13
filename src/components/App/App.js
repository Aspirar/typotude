import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import io from 'socket.io-client';

import Splash from '../Splash/Splash';
import Test from '../Test/Test';
import Timer from '../Timer/Timer';
import Done from '../Done/Done';
import Admin from '../Admin/Admin';

class App extends Component {
	constructor(props) {
		super(props);

		this.socket = io.connect('http://localhost:5000');
		this.socket.on('connected', () => {
			window.location.assign('/#/splash');
		});

		this.time = 0;

		this.state = {
			code: '',
			okay: true
		};

		this.handleCodeSubmit = this.handleCodeSubmit.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(text) {
		this.socket.emit('data', {
			name: this.state.code,
			data: text
		});
		this.socket.on('done', () => {
			window.location.assign('/#/done');
		});
	}

	handleCodeSubmit(code) {
		this.setState({
			code: code
		}, () => {
			this.socket.emit('hello', { name: this.state.code });
			this.socket.on('reject', () => {
				console.log('r');
				this.setState({
					okay: false
				});
			});
			this.socket.on('time', (msg) => {
				this.time = msg.seconds;
				window.location.assign('/#/test')
			});
		});
	}

    render() {
        return (
            <div id="app">
                <Route exact path="/splash" component={() => <Splash handleCodeSubmit={this.handleCodeSubmit} okay={this.state.okay} />} />
                <Route path="/test" component={() => <Test socket={this.socket} handleSubmit={this.handleSubmit} />} />
            	<Route path="/test" component={() => <Timer time={this.time} />} />
            	<Route path="/done" component={Done} />
            	<Route path="/admin" component={() => <Admin socket={this.socket} />} />
            </div>
        );
    }
}

export default App;
