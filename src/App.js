import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Main from './Main'
import PromiseExperiment from './experiments/PromiseExperiment'
import PersistenceExperiment from './experiments/PersistenceExperiment'
import HttpExperiment from './experiments/HttpExperiment'

const Navigation = StackNavigator({
    Main: { screen: Main },
    PromiseExperiment: { screen: PromiseExperiment },
    PersistenceExperiment: { screen: PersistenceExperiment },
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