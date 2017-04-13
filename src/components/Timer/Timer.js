import React, { Component, PropTypes } from 'react';

import './Timer.css';

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: this.props.time
        };

        this.decrementTime = this.decrementTime.bind(this);
    }

    decrementTime() {
        let newTime = 0;
        if (this.state.time > 0) {
            newTime = this.state.time - 1;
        }
        this.setState({
            time: newTime
        });
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.decrementTime();
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div className="timer">
                {this.state.time} seconds remaining
            </div>
        );
    }
}

Timer.propTypes = {
    time: PropTypes.number.isRequired
};

export default Timer;
