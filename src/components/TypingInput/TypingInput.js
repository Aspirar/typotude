import React, { Component, PropTypes } from 'react';
import Button from '../Button/Button';

import './TypingInput.css';

class TypingInput extends Component {
    render() {
        return (
            <div className="typing-input">
                <textarea className="typing-input__textarea"
                          placeholder="Begin typing here..."
                          value={this.props.input}
                          onChange={this.props.handleChange} />
                <Button className="typing-input__submit">Submit</Button>
            </div>
        );
    }
}

TypingInput.propTypes = {
    input: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default TypingInput;
