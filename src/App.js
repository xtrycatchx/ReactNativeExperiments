import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Main from './Main'
import PromiseExperiment from './experiments/PromiseExperiment'

const Navigation = StackNavigator({
    Main: { screen: Main },
    PromiseExperiment: { screen: PromiseExperiment }
});

class App extends Component {

    render() {
        return (
            <Navigation />
        );
    }

}

export default App