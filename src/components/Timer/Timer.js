import React, { Component } from 'react';

import './Timer.css';

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seconds: 300
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            let newSeconds;
            if (this.state.seconds) {
                newSeconds = this.state.seconds - 1;
            }
            this.setState({
                seconds: newSeconds
            });
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div className="timer">
                {this.state.seconds} seconds remaining
            </div>
        );
    }
}

export default Timer;
