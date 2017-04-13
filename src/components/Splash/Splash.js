import React, { Component, PropTypes } from 'react';

import Button from '../Button/Button';

import './Splash.css';

class Splash extends Component {
    constructor(props) {
        super(props);

        this.state = {
            code: ''
        };

        this.handleCodeChange = this.handleCodeChange.bind(this);
        this.handleCodeSubmit = this.handleCodeSubmit.bind(this);
    }

    handleCodeChange(e) {
        this.setState({
            code: e.target.value
        });
    }

    handleCodeSubmit() {
        this.props.handleCodeSubmit(this.state.code);
    }

    render() {
        let warning;
        if (!this.props.okay) {
            warning = <div className="splash__warning">Wrong Code</div>
        }
        return (
            <div className="splash__wrapper">
                <div className="splash__content">
                    <h1>Typotude</h1>
                    <input type="text"
                           placeholder="Code"
                           className="splash__code"
                           value={this.props.code}
                           onChange={this.handleCodeChange}
                           key="code-input" />
                    <Button onClick={this.handleCodeSubmit}>Begin</Button>
                    {warning}
                </div>
            </div>
        );
    }
}

Splash.propTypes = {
    handleCodeSubmit: PropTypes.func.isRequired,
    okay: PropTypes.bool.isRequired
};

export default Splash;
