import React, { Component } from 'react';
import { Button, View, Text, NativeModules, AlertIOS } from 'react-native';
import UglySquareNativeView from '../native/UglySquareNativeView'

class NativeUIExperiment extends Component {

    constructor(props) {
        super(props);
    }

    doSomething = () => {}

    render() {

        return (
            <View style={{ flex: 1, padding: 10 }}>

                <UglySquareNativeView />
            </View>
        );
    }
}

export default NativeUIExperiment;