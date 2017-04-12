import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Splash from '../Splash/Splash';
import Test from '../Test/Test';

class App extends Component {
    render() {
        return (
            <div id="app">
                <Route exact path="/" component={Splash} />
                <Route path="/test" component={Test} />
            </div>
        );
    }
}

export default App;
