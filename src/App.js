import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Main from './Main'
import PromiseExperiment from './experiments/PromiseExperiment'
import PersistenceExperiment from './experiments/PersistenceExperiment'
import HttpExperiment from './experiments/HttpExperiment'
import NativeUIExperiment from './experiments/NativeUIExperiment'
import NativeEventsExperiment from './experiments/NativeEventsExperiment'
import PushNotificationExperiment from './experiments/PushNotificationExperiment'
import RnOpenNativeViewController from './native/RnOpenNativeViewController'
import ScrollExperiment from './experiments/ScrollExperiment'

const Navigation = StackNavigator({
    Main: { screen: Main },
    PromiseExperiment: { screen: PromiseExperiment },
    PersistenceExperiment: { screen: PersistenceExperiment },
    HttpExperiment: { screen: HttpExperiment },
    NativeUIExperiment: { screen: NativeUIExperiment },
    NativeEventsExperiment: { screen: NativeEventsExperiment },
    PushNotificationExperiment: { screen: PushNotificationExperiment },
    RnOpenNativeViewController: { screen: RnOpenNativeViewController },
    ScrollExperiment: { screen: ScrollExperiment }
});

class App extends Component {
    render = () => <Navigation />
}

export default App