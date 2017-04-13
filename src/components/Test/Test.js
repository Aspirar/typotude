import React, { Component, PropTypes } from 'react';

import TypingText from '../TypingText/TypingText';
import TypingInput from '../TypingInput/TypingInput';
import Button from '../Button/Button';

import './Test.css';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const textArray = text.split(' ');

class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            text: text
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.transformText = this.transformText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.socket.on('get data', () => {
            this.props.handleSubmit(this.state.input);
            console.log('get');
        });
    }

    handleSubmit() {
        this.props.handleSubmit(this.state.input);
    }

    handleInputChange(e) {
        this.setState({
            input: e.target.value,
            text: this.transformText(e.target.value)
        });
    }

    transformText(input) {
        const inputArray = input.split(' ');
        let transformed = [];
        let i = 0;
        for (i = 0; i < inputArray.length - 1; i++) {
            if (i >= textArray.length) break;
            let className;
            if (inputArray[i] === textArray[i]) {
                className = 'correct';
            } else {
                className = 'incorrect';
            }
            transformed.push(
                <span key={i} className={className}>
                    {textArray[i]}{' '}
                </span>
            );
        }
        if (i < textArray.length && i === inputArray.length - 1) {
            if (inputArray[i].length > textArray[i].length) {
                transformed.push(
                    <span key={i} className="incorrect">
                        {textArray[i]}
                    </span>
                );
            } else {
                let j;
                for (j = 0; j < inputArray[i].length; j++) {
                    if (j >= textArray[i].length) break;
                    let className;
                    if (inputArray[i][j] === textArray[i][j]) {
                        className = 'correct';
                    } else {
                        className = 'incorrect';
                    }
                    transformed.push(
                        <span key={'letter' + j} className={className}>
                            {textArray[i][j]}
                        </span>
                    );
                }
                for (; j < textArray[i].length; j++) {
                    transformed.push(
                        <span key={'letter' + j}>
                            {textArray[i][j]}
                        </span>
                    );
                }
            }
        }
        for (i += 1; i < textArray.length; i++) {
            transformed.push(
                <span key={i}>
                    {' '}{textArray[i]}
                </span>
            );
        }
        return transformed;
    }

    render() {
        return (
            <div className="test">
                <TypingText text={this.state.text} />
                <TypingInput input={this.state.input} handleChange={this.handleInputChange} />
                <Button className="typing-input__submit" onClick={this.handleSubmit}>Submit</Button>
            </div>
        );
    }
}

Test.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    socket: PropTypes.object.isRequired
};

export default Test;
