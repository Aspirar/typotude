import React, { Component, PropTypes } from 'react';

import './TypingInput.css';

class TypingInput extends Component {
    render() {
        return (
            <div className="typing-input">
                <textarea className="typing-input__textarea"
                          placeholder="Begin typing here..."
                          value={this.props.input}
                          onChange={this.props.handleChange} />
            </div>
        );
    }
}

TypingInput.propTypes = {
    input: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default TypingInput;
