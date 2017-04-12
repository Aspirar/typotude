import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button/Button';

import './Splash.css';

class Splash extends Component {
    render() {
        return (
            <div className="splash__wrapper">
                <div className="splash__content">
                    <h1>Typotude</h1>
                    <Link to="/test"><Button>Begin</Button></Link>
                </div>
            </div>
        );
    }
}

export default Splash;
