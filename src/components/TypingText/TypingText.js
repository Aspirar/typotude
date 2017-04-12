import React, { Component } from 'react';

import './TypingText.css';

class TypingText extends Component {
    render() {
        return (
            <div className="typing-text">
                <p className="typing-text__paragraph">
                    {this.props.text}
                </p>
            </div>
        );
    }
}

export default TypingText;
