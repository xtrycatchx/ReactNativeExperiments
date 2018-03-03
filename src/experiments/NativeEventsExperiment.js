import React, { Component } from 'react';
import { View } from 'react-native';
import TestEvent from '../native/TestEvent'

class NativeEventsExperiment extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={{ flex: 1, padding: 10 }}>
                <TestEvent />
            </View>
        );
    }
}

export default NativeEventsExperiment;