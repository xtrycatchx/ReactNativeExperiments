import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Main from './Main'
import PromiseExperiment from './experiments/PromiseExperiment'
import HttpExperiment from './experiments/HttpExperiment'

const Navigation = StackNavigator({
    Main: { screen: Main },
    PromiseExperiment: { screen: PromiseExperiment },
    HttpExperiment: { screen: HttpExperiment }
});

class App extends Component {

    render() {
        return (
            <Navigation />
        );
    }

}

export default App